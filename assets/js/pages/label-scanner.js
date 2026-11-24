/* ==========================================================================
   label-scanner.js — reads the text in a label photo (OCR) on the Decoder page.

   Uses Tesseract.js (https://tesseract.projectnaptha.com), which runs inside
   the visitor's browser, so photos are never uploaded anywhere. The library
   is only downloaded the first time someone scans a photo, so the page
   stays fast for everyone else.
   ========================================================================== */

(function () {
  const TESSERACT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";

  const cameraInput = document.getElementById("scanner-camera");
  const uploadInput = document.getElementById("scanner-upload");
  const statusBox = document.getElementById("scanner-status");
  const preview = document.getElementById("scanner-preview");
  const message = document.getElementById("scanner-message");
  const progressBar = document.getElementById("scanner-progress");
  const textBox = document.getElementById("decoder-input");
  const decoderForm = document.getElementById("decoder-form");

  let isScanning = false;

  /** Loads the Tesseract.js library once, the first time it's needed. */
  function loadTesseract() {
    if (window.Tesseract) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TESSERACT_URL;
      script.onload = resolve;
      script.onerror = () => reject(new Error("Could not load the text reader."));
      document.head.appendChild(script);
    });
  }

  function showStatus(text, progress) {
    statusBox.hidden = false;
    message.textContent = text;
    if (typeof progress === "number") {
      progressBar.style.width = `${Math.round(progress * 100)}%`;
    }
  }

  /**
   * Tidies up text read from a photo. Labels wrap onto new lines in random
   * places, so line breaks are joined back up (and words split with a
   * hyphen at the end of a line are rejoined).
   */
  function cleanScannedText(text) {
    return text
      .replace(/-\s*\n\s*/g, "")   // "Hyal-\nuronate" → "Hyaluronate"
      .replace(/\s*\n\s*/g, " ")   // other line breaks → spaces
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  async function scanPhoto(file) {
    if (!file || isScanning) return;
    isScanning = true;

    preview.src = URL.createObjectURL(file);
    showStatus("Getting the text reader ready…", 0);

    let worker;
    try {
      await loadTesseract();

      worker = await Tesseract.createWorker("eng", 1, {
        logger: (update) => {
          if (update.status === "recognizing text") {
            showStatus("Reading your label…", update.progress);
          }
        }
      });

      const result = await worker.recognize(file);
      const text = cleanScannedText(result.data.text);

      if (!text) {
        showStatus("We couldn't find any text. Try a closer, brighter photo.", 0);
        return;
      }

      textBox.value = text;
      showStatus("Done! Check the text below for mistakes, then decode again if you fix anything.", 1);
      decoderForm.requestSubmit();
      textBox.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      console.error(error);
      showStatus("Sorry, something went wrong reading that photo. Check your internet connection and try again.", 0);
    } finally {
      if (worker) await worker.terminate();
      isScanning = false;
      cameraInput.value = "";
      uploadInput.value = "";
    }
  }

  // ---- Events ----
  cameraInput.addEventListener("change", () => scanPhoto(cameraInput.files[0]));
  uploadInput.addEventListener("change", () => scanPhoto(uploadInput.files[0]));
})();
