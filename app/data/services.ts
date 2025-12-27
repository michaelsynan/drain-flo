export type Service = {
  slug: string;
  title: string;
  description: string;
  body: string[];
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
    body: [
      "Need urgent help with a clogged or backed-up drain? We offer fast-response emergency drain service.",
    ],
    cta: {
      label: "Contact us now",
      to: "/contact",
    },
  },
];
