/* ==========================================================================
   ingredients.js — THE CONTENT OF THE SITE.
   Every ingredient is one { ... } block in the INGREDIENTS list below.
   See docs/adding-ingredients.md for a blank template and what each field means.

   NOTE: these are starter entries. Check each one against its sources
   before publishing, and replace the general source links with the exact
   page you used.
   ========================================================================== */

// Organisations we cite often. Use them in an ingredient's "sources" list.
const SOURCES = {
  fsanz:  { label: "Food Standards Australia New Zealand (FSANZ)", url: "https://www.foodstandards.gov.au" },
  tga:    { label: "Therapeutic Goods Administration (TGA)",       url: "https://www.tga.gov.au" },
  aicis:  { label: "Australian Industrial Chemicals Introduction Scheme (AICIS)", url: "https://www.industrialchemicals.gov.au" },
  efsa:   { label: "European Food Safety Authority (EFSA)",        url: "https://www.efsa.europa.eu" },
  fda:    { label: "US Food and Drug Administration (FDA)",        url: "https://www.fda.gov" },
  who:    { label: "World Health Organization (WHO)",              url: "https://www.who.int" },
  iarc:   { label: "IARC Monographs (WHO cancer agency)",          url: "https://monographs.iarc.who.int" },
  dcceew: { label: "Australian Government DCCEEW (lead in the home)", url: "https://www.dcceew.gov.au" },
  productSafety: { label: "Product Safety Australia (ACCC)",       url: "https://www.productsafety.gov.au" }
};

const INGREDIENTS = [
  // ---------------------------------------------------------------- SKINCARE
  {
    id: "niacinamide",
    name: "Niacinamide",
    aliases: ["Nicotinamide", "Vitamin B3"],
    codes: [],
    categories: ["skincare"],
    functions: ["Skin conditioning", "Brightening"],
    safety: "generally-safe",
    summary: "A form of vitamin B3 that helps strengthen the skin barrier and even out skin tone.",
    whatItIs: "Niacinamide is a water-soluble form of vitamin B3. Your body uses it in many everyday processes, and it's one of the best-studied active ingredients in skincare.",
    whyUsed: "It's added to serums and moisturisers to support the skin's protective barrier, reduce the look of redness and dark spots, and help control oiliness. Products usually contain around 2–5%.",
    foundIn: ["Serums", "Moisturisers", "Sunscreens", "Toners"],
    safetyNotes: "Well tolerated by most skin types. Very high strengths (10% and above) can cause redness or tingling in some people, so start low if your skin is sensitive.",
    myths: [
      {
        myth: "You can't use niacinamide with vitamin C.",
        fact: "This idea comes from old lab tests using unstable ingredients at high temperatures. Modern products can be used together without problems."
      }
    ],
    sources: [SOURCES.aicis],
    lastReviewed: "2026-11"
  },
  {
    id: "hyaluronic-acid",
    name: "Hyaluronic acid",
    aliases: ["Sodium hyaluronate", "Hyaluronan"],
    codes: [],
    categories: ["skincare"],
    functions: ["Humectant (draws in water)"],
    safety: "generally-safe",
    summary: "A moisture-attracting molecule that is naturally found in your skin.",
    whatItIs: "Hyaluronic acid is a sugar-based molecule found naturally in skin, joints and eyes. In products it often appears as its salt form, sodium hyaluronate, which is smaller and easier to formulate.",
    whyUsed: "It's a humectant: it attracts water and holds it in the top layers of skin, which makes skin look plumper and feel more hydrated.",
    foundIn: ["Serums", "Moisturisers", "Eye creams", "Sheet masks"],
    safetyNotes: "Very low risk of irritation. In very dry air it works best under a moisturiser that seals the water in.",
    myths: [
      {
        myth: "It holds 1,000 times its weight in water, so it will transform your skin.",
        fact: "That number is widely repeated in marketing, but it doesn't describe how the ingredient behaves on your face. The overall formula matters more."
      }
    ],
    sources: [SOURCES.aicis],
    lastReviewed: "2026-11"
  },
  {
    id: "retinol",
    name: "Retinol",
    aliases: ["Vitamin A", "Retinyl palmitate", "Retinoids"],
    codes: [],
    categories: ["skincare"],
    functions: ["Anti-ageing", "Cell turnover"],
    safety: "use-with-care",
    summary: "A vitamin A ingredient that speeds up skin renewal. Effective, but it can irritate.",
    whatItIs: "Retinol is a form of vitamin A. Skin converts it into retinoic acid, which signals skin cells to renew more quickly.",
    whyUsed: "It's used to soften fine lines, improve uneven texture and help with breakouts. It's one of the few cosmetic ingredients with strong evidence behind it.",
    foundIn: ["Night creams", "Serums", "Anti-ageing products"],
    safetyNotes: "Commonly causes dryness, peeling and redness at first, so introduce it slowly. It makes skin more sensitive to the sun, so wear sunscreen daily. Retinoids are generally advised against during pregnancy; ask a doctor or pharmacist. The EU has set maximum strengths for retinol in cosmetics.",
    myths: [
      {
        myth: "Peeling means it's working, so use more.",
        fact: "Irritation is a side effect, not a sign of results. Using less, less often, usually gives the same benefit with fewer problems."
      }
    ],
    sources: [SOURCES.tga, SOURCES.aicis],
    lastReviewed: "2026-11"
  },

  // ---------------------------------------------------------------- COSMETICS
  {
    id: "parabens",
    name: "Parabens",
    aliases: ["Methylparaben", "Ethylparaben", "Propylparaben", "Butylparaben"],
    codes: ["218", "214"],
    categories: ["cosmetics", "skincare", "food"],
    functions: ["Preservative"],
    safety: "restricted",
    summary: "A family of preservatives that stop bacteria and mould growing in products.",
    whatItIs: "Parabens are a group of closely related chemicals (methyl-, ethyl-, propyl-, butylparaben and others) that have been used as preservatives for about a century.",
    whyUsed: "Any product containing water can grow bacteria and mould. Parabens prevent that, which keeps products safe to use for months after opening.",
    foundIn: ["Lotions", "Shampoos", "Makeup", "Some processed foods"],
    safetyNotes: "Parabens can weakly mimic oestrogen, but far more weakly than the body's own hormones. In 2014 the EU banned five less-studied parabens and set limits on the others. Methylparaben and ethylparaben are still widely permitted.",
    myths: [
      {
        myth: "Parabens have been proven to cause breast cancer.",
        fact: "A 2004 study found parabens in breast tissue samples, but it didn't show they caused cancer. Later reviews have not confirmed a link."
      },
      {
        myth: "“Paraben-free” always means safer.",
        fact: "Products still need a preservative. Some replacements, such as methylisothiazolinone, caused a wave of skin allergies in the 2010s."
      }
    ],
    sources: [SOURCES.aicis, SOURCES.fsanz],
    lastReviewed: "2026-11"
  },
  {
    id: "sodium-lauryl-sulfate",
    name: "Sodium lauryl sulfate",
    aliases: ["SLS", "Sodium dodecyl sulfate", "Sodium lauryl sulphate"],
    codes: [],
    categories: ["cosmetics", "household"],
    functions: ["Surfactant (cleansing and foaming)"],
    safety: "use-with-care",
    summary: "A strong cleanser that makes products foam. It can dry out or irritate skin.",
    whatItIs: "SLS is a surfactant: a molecule with one end that grabs oil and one end that mixes with water, so grease and dirt can be rinsed away.",
    whyUsed: "It cleans well and creates lots of foam cheaply, so it's common in shampoo, body wash, toothpaste and dishwashing liquid.",
    foundIn: ["Shampoo", "Body wash", "Toothpaste", "Dishwashing liquid", "Cleaning sprays"],
    safetyNotes: "It can irritate skin and eyes, especially if left on for a long time or used on sensitive skin. Its relative, sodium laureth sulfate (SLES), is usually milder. Some people with frequent mouth ulcers choose SLS-free toothpaste.",
    myths: [
      {
        myth: "SLS causes cancer.",
        fact: "This claim spread through chain emails in the 1990s. SLS is not classified as a cancer-causing substance."
      }
    ],
    sources: [SOURCES.aicis],
    lastReviewed: "2026-11"
  },
  {
    id: "fragrance",
    name: "Fragrance",
    aliases: ["Parfum", "Perfume", "Aroma", "Limonene", "Linalool"],
    codes: [],
    categories: ["cosmetics", "skincare", "household"],
    functions: ["Scent"],
    safety: "use-with-care",
    summary: "One word on a label that can stand for dozens of scent chemicals.",
    whatItIs: "“Fragrance” or “parfum” is an umbrella term. Companies can keep the exact recipe secret, so one word may cover many individual ingredients, natural or synthetic.",
    whyUsed: "To give a product a pleasant smell or to cover the smell of other ingredients.",
    foundIn: ["Perfume", "Lotions", "Shampoo", "Laundry detergent", "Air fresheners"],
    safetyNotes: "Fragrance is one of the most common causes of allergic skin reactions from cosmetics. The EU requires certain fragrance allergens (such as limonene and linalool) to be listed by name above set amounts, and has recently expanded that list. If you react easily, look for “fragrance-free” products.",
    myths: [
      {
        myth: "Natural fragrances and essential oils are gentler.",
        fact: "Essential oils contain many of the same allergens as synthetic fragrance. “Natural” doesn't mean non-irritating."
      },
      {
        myth: "“Unscented” and “fragrance-free” mean the same thing.",
        fact: "“Unscented” products can contain masking fragrance to hide smells. “Fragrance-free” should contain none."
      }
    ],
    sources: [SOURCES.aicis],
    lastReviewed: "2026-11"
  },

  // ---------------------------------------------------------------- MULTI-CATEGORY
  {
    id: "titanium-dioxide",
    name: "Titanium dioxide",
    aliases: ["TiO2", "CI 77891", "Titanium white"],
    codes: ["171"],
    categories: ["cosmetics", "skincare", "food", "paints"],
    functions: ["White pigment", "UV filter"],
    safety: "restricted",
    summary: "A bright white mineral used in paint, sunscreen, makeup and some foods.",
    whatItIs: "Titanium dioxide is a naturally occurring mineral that is processed into a very bright, white powder.",
    whyUsed: "It's the most widely used white pigment in paint. In sunscreen it reflects and absorbs UV light (a ‘mineral’ sunscreen). In makeup and toothpaste it adds whiteness, and in some foods it makes colours look brighter.",
    foundIn: ["Paint", "Mineral sunscreen", "Foundation", "Toothpaste", "Lollies and icing"],
    safetyNotes: "The EU banned it as a food additive (E171) from 2022 after EFSA said a risk of DNA damage could not be ruled out. It is still allowed in food in some other countries, including Australia, so check current rules. IARC classifies breathing in titanium dioxide dust as possibly carcinogenic (Group 2B), based on animal studies, so wear a mask when sanding paint. Australia's TGA has reviewed nano-sized titanium dioxide in sunscreen and found it is unlikely to pass through healthy skin.",
    myths: [
      {
        myth: "If it's banned in EU food, mineral sunscreen must be dangerous too.",
        fact: "Eating it, breathing it in and putting it on your skin are different exposures. Sunscreen rules are assessed separately."
      }
    ],
    sources: [SOURCES.efsa, SOURCES.fsanz, SOURCES.tga, SOURCES.iarc],
    lastReviewed: "2026-11"
  },
  {
    id: "citric-acid",
    name: "Citric acid",
    aliases: [],
    codes: ["330"],
    categories: ["food", "cosmetics", "household"],
    functions: ["Acidity regulator", "Preservative", "Descaler"],
    safety: "generally-safe",
    summary: "The sour acid in lemons, used to add tang, adjust pH and dissolve limescale.",
    whatItIs: "Citric acid is a weak acid found naturally in citrus fruit. Most of what's used commercially is made by fermenting sugar with a type of mould.",
    whyUsed: "In food it adds sourness and helps preserve. In cosmetics it adjusts the pH. In cleaning products it dissolves limescale from kettles, showers and dishwashers.",
    foundIn: ["Soft drinks", "Lollies", "Jams", "Shampoo", "Descalers", "Dishwasher tablets"],
    safetyNotes: "Safe in food. Frequent acidic drinks can wear down tooth enamel. Concentrated powder can sting eyes and skin, so handle cleaning products with care.",
    myths: [
      {
        myth: "It's made from mould, so it's unnatural or unsafe.",
        fact: "The mould is only used to produce it. The citric acid itself is the same molecule found in lemons."
      }
    ],
    sources: [SOURCES.fsanz, SOURCES.efsa],
    lastReviewed: "2026-11"
  },
  {
    id: "glycerin",
    name: "Glycerin",
    aliases: ["Glycerol", "Glycerine"],
    codes: ["422"],
    categories: ["skincare", "cosmetics", "food"],
    functions: ["Humectant (draws in water)", "Sweetener"],
    safety: "generally-safe",
    summary: "A clear, slightly sweet liquid that keeps skin and food moist.",
    whatItIs: "Glycerin is a simple, thick, clear liquid. It is made from plant oils, animal fats or as a by-product of biodiesel.",
    whyUsed: "It attracts water, so it keeps skin hydrated and stops creams, toothpaste and baked goods from drying out.",
    foundIn: ["Moisturisers", "Soap", "Toothpaste", "Cake icing", "Protein bars"],
    safetyNotes: "One of the gentlest and best-studied cosmetic ingredients. Very rarely irritating.",
    myths: [
      {
        myth: "It's just a cheap filler.",
        fact: "It's inexpensive, but it's also one of the most effective moisturising ingredients available."
      }
    ],
    sources: [SOURCES.fsanz, SOURCES.aicis],
    lastReviewed: "2026-11"
  },

  // ---------------------------------------------------------------- FOOD
  {
    id: "msg",
    name: "Monosodium glutamate",
    aliases: ["MSG", "Flavour enhancer 621"],
    codes: ["621"],
    categories: ["food"],
    functions: ["Flavour enhancer"],
    safety: "generally-safe",
    summary: "A flavour enhancer that adds a savoury ‘umami’ taste.",
    whatItIs: "MSG is the sodium salt of glutamate, an amino acid that occurs naturally in tomatoes, parmesan, mushrooms and soy sauce.",
    whyUsed: "It boosts savoury flavour, so it's added to stocks, snacks, sauces and seasonings.",
    foundIn: ["Chips and snacks", "Instant noodles", "Stock cubes", "Seasonings", "Restaurant food"],
    safetyNotes: "Food regulators, including FSANZ, consider it safe. A small number of people report mild, short-lived symptoms after large amounts on an empty stomach, but controlled studies haven't shown consistent reactions.",
    myths: [
      {
        myth: "MSG causes ‘Chinese restaurant syndrome’.",
        fact: "The term came from a 1968 letter, not a study. Controlled trials haven't reliably reproduced the symptoms, and the label is now widely criticised as unfair to Asian cuisine."
      }
    ],
    sources: [SOURCES.fsanz],
    lastReviewed: "2026-11"
  },
  {
    id: "aspartame",
    name: "Aspartame",
    aliases: ["Sweetener 951", "NutraSweet", "Equal"],
    codes: ["951"],
    categories: ["food"],
    functions: ["Artificial sweetener"],
    safety: "use-with-care",
    summary: "A low-calorie sweetener about 200 times sweeter than sugar.",
    whatItIs: "Aspartame is made from two amino acids joined together. Because it is so sweet, only tiny amounts are needed.",
    whyUsed: "To sweeten food and drinks without the kilojoules of sugar.",
    foundIn: ["Diet soft drinks", "Sugar-free gum", "Tabletop sweeteners", "Some yoghurts"],
    safetyNotes: "In 2023, IARC classified aspartame as ‘possibly carcinogenic’ (Group 2B) based on limited evidence, while the WHO/FAO expert committee kept its acceptable daily intake at 40 mg per kg of body weight. People with the genetic condition phenylketonuria (PKU) must avoid it, which is why labels carry a phenylalanine warning.",
    myths: [
      {
        myth: "IARC's 2023 decision proves aspartame causes cancer.",
        fact: "IARC rates how strong the evidence of a hazard is, not how risky normal amounts are. Group 2B also includes aloe vera whole-leaf extract."
      }
    ],
    sources: [SOURCES.who, SOURCES.iarc, SOURCES.fsanz],
    lastReviewed: "2026-11"
  },
  {
    id: "sodium-benzoate",
    name: "Sodium benzoate",
    aliases: ["Preservative 211"],
    codes: ["211"],
    categories: ["food", "cosmetics"],
    functions: ["Preservative"],
    safety: "generally-safe",
    summary: "A preservative that stops mould and yeast growing in acidic foods and drinks.",
    whatItIs: "Sodium benzoate is the salt of benzoic acid, which occurs naturally in small amounts in some berries and spices.",
    whyUsed: "It works best in acidic products, so it's used in soft drinks, sauces, pickles and some cosmetics.",
    foundIn: ["Soft drinks", "Cordial", "Sauces", "Pickles", "Shampoo"],
    safetyNotes: "Safe within permitted limits. Combined with vitamin C (ascorbic acid), heat and light, it can form small amounts of benzene in drinks, and manufacturers changed recipes after this was found in the 2000s. A 2007 UK study linked mixtures of certain food colours plus sodium benzoate to hyperactivity in some children.",
    myths: [],
    sources: [SOURCES.fsanz, SOURCES.efsa],
    lastReviewed: "2026-11"
  },

  // ---------------------------------------------------------------- HOUSEHOLD
  {
    id: "sodium-hypochlorite",
    name: "Sodium hypochlorite",
    aliases: ["Bleach", "Chlorine bleach"],
    codes: [],
    categories: ["household"],
    functions: ["Disinfectant", "Whitener"],
    safety: "use-with-care",
    summary: "The active ingredient in household bleach. Kills germs, but must never be mixed with other cleaners.",
    whatItIs: "Sodium hypochlorite is a chlorine compound dissolved in water. Household bleach is usually a few per cent strength.",
    whyUsed: "It kills bacteria, viruses and mould, and removes stains.",
    foundIn: ["Household bleach", "Mould removers", "Toilet cleaners", "Some laundry products"],
    safetyNotes: "Never mix bleach with ammonia (found in some glass cleaners) or with acids (such as vinegar or some toilet cleaners): this releases toxic gases. Use with windows open, wear gloves, and store out of reach of children.",
    myths: [
      {
        myth: "More bleach cleans better.",
        fact: "Using it stronger than the label says doesn't disinfect better and creates more fumes. Clean off dirt first, because dirt stops bleach working well."
      }
    ],
    sources: [SOURCES.productSafety],
    lastReviewed: "2026-11"
  },

  // ---------------------------------------------------------------- PAINTS
  {
    id: "vocs",
    name: "Volatile organic compounds",
    aliases: ["VOCs"],
    codes: [],
    categories: ["paints", "household"],
    functions: ["Solvent"],
    safety: "use-with-care",
    summary: "Chemicals that evaporate as paint dries, causing that ‘fresh paint’ smell.",
    whatItIs: "VOCs are a large group of carbon-based chemicals that turn into vapour at room temperature. In paint, they help it spread and dry.",
    whyUsed: "As solvents in paints, varnishes, glues and some cleaning products.",
    foundIn: ["Oil-based paint", "Varnish", "Paint thinners", "Glues", "Air fresheners"],
    safetyNotes: "Breathing in VOCs can cause headaches, dizziness, and eye and throat irritation, and they add to outdoor smog. Water-based and low-VOC paints release much less. Keep rooms ventilated while painting and for a few days after.",
    myths: [
      {
        myth: "“Zero-VOC” paint has no chemicals and no smell.",
        fact: "It still contains other ingredients, and adding colour tints can add some VOCs back. Definitions also differ between brands and countries."
      }
    ],
    sources: [SOURCES.dcceew],
    lastReviewed: "2026-11"
  },
  {
    id: "lead-paint",
    name: "Lead (in older paint)",
    aliases: ["Lead paint", "Lead carbonate", "White lead"],
    codes: [],
    categories: ["paints"],
    functions: ["Pigment", "Drying agent (historic)"],
    safety: "restricted",
    summary: "Once common in house paint. Still found in older homes, and dangerous when sanded or scraped.",
    whatItIs: "Lead compounds were added to paint for colour, durability and faster drying. Australia has progressively cut the lead allowed in household paint since the 1960s and 1970s.",
    whyUsed: "Today's household paints contain only tiny trace amounts. The risk now comes from old paint still on the walls, windows and fences of older homes.",
    foundIn: ["Homes built before about 1970", "Old furniture and toys", "Some imported products"],
    safetyNotes: "Lead is toxic, especially to young children and during pregnancy. Intact paint is low risk, but sanding, scraping or heat-stripping creates lead dust. Test old paint before renovating, and get professional advice if it contains lead.",
    myths: [
      {
        myth: "Lead paint is only a problem if you eat paint chips.",
        fact: "Fine dust from renovating is a major source of exposure. It settles on floors and surfaces where children play."
      }
    ],
    sources: [SOURCES.dcceew, SOURCES.productSafety],
    lastReviewed: "2026-11"
  }
];
