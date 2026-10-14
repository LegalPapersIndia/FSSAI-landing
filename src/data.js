export const services = [
  {
    title: "FSSAI Basic Registration",
    desc: "For small food businesses with turnover up to ₹1.5 crore, filed end-to-end on FoSCoS.",
    tag: "Most booked",
  },
  {
    title: "FSSAI State License",
    desc: "For restaurants, manufacturers and distributors with turnover from ₹1.5 crore to ₹50 crore.",
  },
  {
    title: "FSSAI Central License",
    desc: "For turnover above ₹50 crore, importers, exporters and multi-state food businesses.",
  },
  {
    title: "FSSAI Modification",
    desc: "Change address, food categories or business details, or upgrade your category as you grow.",
  },
  {
    title: "FSSAI Returns",
    desc: "We prepare and file your FSSAI returns on time, so a missed due date never costs you a penalty.",
  },
  {
    title: "Renewal & Updates",
    desc: "Holding an older license? We handle its renewal, updates and annual fee as per the latest rules.",
  },
];

export const processSteps = [
  {
    title: "Fill the form",
    desc: "Share your business details in under two minutes.",
  },
  {
    title: "Document check",
    desc: "Our expert reviews your ID, premises proof and food category details.",
  },
  {
    title: "Application filed",
    desc: "We file your application on the FoSCoS portal and handle every query.",
  },
  {
    title: "FSSAI delivered",
    desc: "Your certificate with the 14-digit FSSAI number lands in your inbox.",
  },
];

export const documentsRequired = [
  "PAN card of the business / proprietor",
  "Photo ID & passport-size photo of the applicant",
  "Partnership deed / incorporation certificate (firms & companies)",
  "Proof of business premises (electricity bill / rent agreement)",
  "Signed declaration (Form A) — we prepare it for you",
  "Mobile number & email ID (for OTP verification)",
];

/* State / Central license documents (same icon order as above) */
export const documentsLicense = [
  "PAN card of the business / proprietor",
  "ID proof of the applicant, directors / partners & nominee",
  "Incorporation certificate / partnership deed / society registration",
  "Premises proof, layout plan & NOC (where applicable)",
  "Food safety management plan (FSMS) declaration",
  "Mobile number & email ID (for OTP verification)",
];

export const whyUs = [
  { title: "Expert guidance", desc: "Compliance professionals review every application before it's filed." },
  { title: "Fast turnaround", desc: "No back-and-forth — we chase the paperwork so you don't have to." },
  { title: "Transparent pricing", desc: "One quote upfront. No hidden charges after you've paid." },
  { title: "Compliance alerts", desc: "Reminders for returns and renewals so you're never caught off guard." },
];

export const reviewPlatforms = [
  {
    name: "Google Reviews",
    rating: "4.9",
    count: "2,000+ reviews",
    href: "https://share.google/1MYy6yASxWRMA1ZPa",
  },
  {
    name: "Trustpilot",
    rating: "4.9",
    count: "500+ reviews",
    href: "https://www.trustpilot.com/review/legalpapersindia.com",
  },
  {
    name: "Mouthshut",
    rating: "4.9",
    count: "100+ reviews",
    href: "https://www.mouthshut.com/product-reviews/legalpapersindia-reviews-926198492",
  },
];

export const stats = [
  { value: "1,00,000+", label: "Businesses served" },
  { value: "2,000+", label: "Five-star reviews" },
  { value: "35+", label: "States & UTs covered" },
  { value: "24×7", label: "Support" },
];

export const faqs = [
  {
    q: "1. Is FSSAI registration mandatory?",
    a: "Yes. Every food business in India, from a home kitchen to a large manufacturer, needs FSSAI approval. You get a 14-digit FSSAI number to show on your packaging, bills and premises.",
  },
  {
    q: "2. Which one do I need: Registration, State or Central License?",
    a: "It depends on your annual turnover and business type. From 1 April 2026: Registration up to ₹1.5 crore, State License from ₹1.5 crore to ₹50 crore, and Central License above ₹50 crore. Importers, exporters and multi-state businesses need a Central License regardless of turnover.",
  },
  {
    q: "3. How long does it take?",
    a: "Basic Registration usually takes about a week. A State License takes around a month and a Central License 30–60 days, since licenses involve verification.",
  },
  {
    q: "4. What are the government fees?",
    a: "Roughly ₹100 a year for Registration, ₹2,000–₹5,000 a year for a State License (depending on your business category) and ₹7,500 a year for a Central License. Legal Papers India charges a separate, transparent professional fee.",
  },
  {
    q: "5. Do I still have to renew my FSSAI?",
    a: "Registrations and licenses issued from 1 April 2026 have perpetual validity, so there is no renewal, though the annual fee still applies. If you hold an older license, our team will tell you exactly what applies to it.",
  },
  {
    q: "6. What happens if I run a food business without FSSAI?",
    a: "It is an offence under the Food Safety and Standards Act, with penalties of up to ₹5 lakh. Most delivery apps and online marketplaces also ask for your FSSAI number before you can start selling.",
  },
];

export const businessTypes = [
  "Sole Proprietorship",
  "Partnership Firm",
  "LLP",
  "Private Limited Company",
  "One Person Company",
  "Other",
];

// PLACEHOLDER pricing — replace with the real FSSAI plan prices and inclusions before going live.
export const pricingPlans = [
  {
    name: "Registration",
    desc: "For home kitchens, small eateries and shops with turnover up to ₹1.5 crore.",
    originalPrice: 2999,
    discount: "50% off",
    price: 1499,
    instantOff: 1500,
    emi: false,
    highlight: false,
    features: [
      "FSSAI Registration (Form A) Filing",
      "Dedicated Advisor for FSSAI",
      "Expert Document Check",
    ],
  },
  {
    name: "State License",
    desc: "For restaurants, manufacturers and distributors operating within one state.",
    originalPrice: 8999,
    discount: "50% off",
    price: 4499,
    instantOff: 4500,
    emi: false,
    highlight: true,
    features: [
      "FSSAI State License (Form B) Filing",
      "Food Safety Plan Drafting",
      "Query & Inspection Support",
      "MSME (Udyam Certificate)",
    ],
  },
  {
    name: "Central License",
    desc: "For large manufacturers, importers, exporters and multi-state businesses.",
    originalPrice: 17999,
    discount: "50% off",
    price: 8999,
    instantOff: 9000,
    emi: true,
    highlight: false,
    features: [
      "Inclusive of State License support",
      "FSSAI Central License Filing",
      "Multi-state & Import-Export Guidance",
      "Label & Compliance Review",
      "Dedicated Support & Fast Process",
    ],
  },
];

export const whoNeedsFssai = [
  {
    title: "Restaurants, cafes & cloud kitchens",
    desc: "Serving food to customers needs FSSAI, with or without a dine-in space.",
    tag: "FSSAI required",
  },
  {
    title: "Manufacturers & packers",
    desc: "Making, processing or packing food products, from snacks to packaged water.",
    tag: "FSSAI required",
  },
  {
    title: "Shops, traders & distributors",
    desc: "Selling, storing or distributing food items such as grocery, dairy and sweets.",
    tag: "FSSAI required",
  },
  {
    title: "Home & online food sellers",
    desc: "Home bakers, tiffin services and sellers on food delivery apps and marketplaces.",
    tag: "Needed to sell online",
  },
];

export const footerLinkColumns = [
  {
    heading: "Business Startup",
    links: [
      { label: "Sole Proprietorship Firm", href: "https://www.legalpapersindia.com/sole-proprietorship" },
      { label: "Partnership Firm", href: "https://www.legalpapersindia.com/partnership-firm" },
      { label: "Limited Liability Partnership", href: "https://www.legalpapersindia.com/limited-liability-partnership" },
      { label: "One Person Company", href: "https://www.legalpapersindia.com/one-person-company" },
      { label: "Private Limited Company", href: "https://www.legalpapersindia.com/private-limited-company" },
      { label: "Producer Company Registration", href: "https://www.legalpapersindia.com/producer-company-registration" },
    ],
  },
  {
    heading: "Registration & License",
    links: [
      { label: "FSSAI Registration", href: "https://www.legalpapersindia.com/fssai-basic-registration" },
      { label: "FSSAI State License", href: "https://www.legalpapersindia.com/fssai-state-license" },
      { label: "FSSAI Central License", href: "https://www.legalpapersindia.com/fssai-central-license" },
      { label: "FSSAI Returns", href: "https://www.legalpapersindia.com/fssai-returns" },
      { label: "FSSAI Renewal", href: "https://www.legalpapersindia.com/fssai-renewal" },
      { label: "Shop and Establishment Certificate", href: "https://www.legalpapersindia.com/shop-and-establishment-certificate" },
    ],
  },
  {
    heading: "Import & Export",
    links: [
      { label: "IEC Registration", href: "https://www.legalpapersindia.com/iec-registration" },
      { label: "ICEGATE Registration", href: "https://www.legalpapersindia.com/icegate-registration" },
      { label: "AD Code Registration", href: "https://www.legalpapersindia.com/ad-code-certificate" },
      { label: "LUT Registration", href: "https://www.legalpapersindia.com/lut-registration-service" },
      { label: "WPC Certificate", href: "https://www.legalpapersindia.com/wpc-certificate" },
      { label: "LMPC Registration", href: "https://www.legalpapersindia.com/lmpc-registration" },
    ],
  },
  {
    heading: "Tax & Compliance",
    links: [
      { label: "Corporate Tax", href: "https://www.legalpapersindia.com/corporate-tax" },
      { label: "GST Registration", href: "https://www.legalpapersindia.com/gst-registration" },
      { label: "GST Registration for Foreigners", href: "https://www.legalpapersindia.com/gst-registration-for-foreigners" },
      { label: "GST Modification", href: "https://www.legalpapersindia.com/gst-modification" },
      { label: "GST Cancellation & Surrender", href: "https://www.legalpapersindia.com/gst-cancellation-and-surrender" },
      { label: "Professional Tax Registration", href: "https://www.legalpapersindia.com/professional-tax-registration" },
    ],
  },
  {
    heading: "Trademark & IP",
    links: [
      { label: "Brand Name Registration", href: "https://www.legalpapersindia.com/brand-name-registration" },
      { label: "Trademark Registration", href: "https://www.legalpapersindia.com/trademark-registration" },
      { label: "Trademark Objection", href: "https://www.legalpapersindia.com/trademark-objection" },
      { label: "Trademark Hearing", href: "https://www.legalpapersindia.com/trademark-hearing" },
      { label: "Trademark Opposition", href: "https://www.legalpapersindia.com/trademark-opposition" },
      { label: "Trademark Renewal", href: "https://www.legalpapersindia.com/trademark-renewal" },
    ],
  },
  {
    heading: "ISO",
    links: [
      { label: "ISO 9001", href: "https://www.legalpapersindia.com/iso-9001" },
      { label: "ISO 14001", href: "https://www.legalpapersindia.com/iso-14001" },
      { label: "ISO 45001", href: "https://www.legalpapersindia.com/iso-45001" },
      { label: "ISO 22000", href: "https://www.legalpapersindia.com/iso-22000" },
      { label: "ISO 27001", href: "https://www.legalpapersindia.com/iso-27001" },
      { label: "ISO Certificate", href: "https://www.legalpapersindia.com/iso-certification" },
    ],
  },
  {
    heading: "GEM & Other",
    links: [
      { label: "GEM Registration", href: "https://www.legalpapersindia.com/gem-registration" },
      { label: "Brand Registration on GEM", href: "https://www.legalpapersindia.com/brand-registration" },
      { label: "Deemed OEM", href: "https://www.legalpapersindia.com/deemed-oem" },
      { label: "Gem Vendor Assessment", href: "https://www.legalpapersindia.com/gem-vendor-assessment" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Home", href: "https://www.legalpapersindia.com/" },
      { label: "About Us", href: "https://www.legalpapersindia.com/about-us" },
      { label: "Contact Us", href: "https://www.legalpapersindia.com/contact-us" },
      { label: "Blogs", href: "https://www.legalpapersindia.com/blog" },
      { label: "Updates", href: "https://www.legalpapersindia.com/updates" },
      { label: "Due Dates", href: "https://www.legalpapersindia.com/due-dates" },
      { label: "Partner With Us", href: "https://www.legalpapersindia.com/partner-with-us" },
    ],
  },
  {
    heading: "Important Links",
    links: [
      { label: "Career", href: "https://www.legalpapersindia.com/career" },
      { label: "Sitemap", href: "https://www.legalpapersindia.com/sitemap" },
      { label: "Privacy Policy", href: "https://www.legalpapersindia.com/privacy-policy" },
      { label: "Terms & Conditions", href: "https://www.legalpapersindia.com/terms-and-conditions" },
      { label: "Refund & Cancellation Policy", href: "https://www.legalpapersindia.com/refund-and-cancellation-policy" },
      { label: "Our Presence", href: "https://www.legalpapersindia.com/our-presence" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/LegalPapersIndiaofficial" },
  { label: "Instagram", href: "https://www.instagram.com/legalpapersindia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/legal-papers-india/" },
  { label: "Twitter", href: "https://x.com/LegalPapersInd" },
];

export const mediaMentions = [
  {
    name: "Dailyhunt",
    caption: "Featured for simplifying GST and compliance.",
  },
  {
    name: "Zee News",
    caption: "Featured for accessible business registration.",
  },
  {
    name: "Hindustan Times",
    caption: "Mentioned in India's digital compliance space.",
  },
  {
    name: "Business Standard",
    caption: "Covered for MSME and tax compliance trends.",
  },
];