/** Facts taken from the public iOne home page. No other company claims. */
export const company = {
  name: "iOne",
  site: "https://ione.mn",
  email: "sales@ione.mn",
  addressLines: [
    "15th khoroo, Jargalan 2, 1",
    "Khan-Uul District, Ulaanbaatar, Mongolia",
  ],
  headline: "IT Services / Smart Card Solutions",
  subline:
    "Innovative IT services, card technologies, and secure digital solutions",
  about:
    "iOne is a technology company providing IT solutions, cloud services, AI integration, blockchain consulting, and professional EMV smart card supply as the official distributor of Kona-M, Korea’s leading card manufacturer.",
  konaTitle: "Official Distributor of Kona-M Smart Cards",
  konaBody:
    "We supply certified EMV card chips and provide support for card personalization through Mongolian processing partners.",
} as const;

export const services = [
  {
    slug: "it",
    href: "/services/it",
    title: "IT Services",
    items: [
      "IT infrastructure setup & support",
      "Cloud solutions",
      "AI & automation",
      "Blockchain services",
    ],
  },
  {
    slug: "smart-cards",
    href: "/services/smart-cards",
    title: "Smart Card Solutions",
    items: [
      "Contact & contactless EMV card supply",
      "Technical consulting",
      "Card issuance support",
      "Card personalization integration",
    ],
  },
  {
    slug: "consulting",
    href: "/services/consulting",
    title: "Consulting",
    items: [
      "IT security consulting",
      "System design & architecture",
      "API integration guidance",
      "Project planning & support",
    ],
  },
] as const;
