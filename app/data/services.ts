export type Service = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  image?: string;
  featured?: boolean;
  cta?: {
    label: string;
    to: string;
  };
};

export const services: Service[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Thorough drain cleaning to restore flow and help prevent recurring backups.",
    body: [
      "Thorough drain cleaning to restore flow and help prevent recurring backups.",
    ],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
  {
    slug: "clog-removal",
    title: "Clog Removal",
    description:
      "Targeted clog removal for sinks, tubs, showers, and floor drains.",
    image: "nepa-clog-removal.jpg",
    body: ["Targeted clog removal for sinks, tubs, showers, and floor drains."],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
  {
    slug: "sewer-line-cleaning",
    title: "Sewer Line Cleaning",
    description:
      "Sewer line cleaning to clear buildup and help prevent blockages.",
    image: "sewer-cleaning-duryea.jpg",
    body: ["Sewer line cleaning to clear buildup and help prevent blockages."],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
  {
    slug: "emergency-drain-service",
    title: "Emergency Drain Service",
    description:
      "Need urgent help with a clogged or backed-up drain? We offer fast-response emergency drain service.",
    image: "emergency-drain-cleaning.jpg",
    body: [
      "Need urgent help with a clogged or backed-up drain? We offer fast-response emergency drain service.",
    ],
    featured: true,
    cta: {
      label: "Contact us now",
      to: "/contact",
    },
  },
  {
    slug: "excavation",
    title: "Excavation",
    description:
      "Excavation services for sewer line repairs, replacements, and outdoor plumbing projects.",
    image: "excavation-services.jpg",
    body: [
      "Excavation services for sewer line repairs, replacements, and outdoor plumbing projects.",
    ],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
];
