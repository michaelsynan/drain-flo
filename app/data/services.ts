export type Service = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  bullets?: string[];
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
    image: "drain-flo-clog-removal.jpg",
    description:
      "Professional drain cleaning to restore flow, reduce odors, and help prevent recurring clogs.",
    bullets: [
      "Clear slow drains and restore flow",
      "Reduce odors caused by buildup",
      "Help prevent repeat clogs",
      "Identify signs of a deeper main-line issue",
    ],
    body: [
      "Slow drains and recurring backups usually mean there’s buildup inside the pipe—soap scum, grease, hair, and debris that keeps catching more material over time.",
      "Our drain cleaning service clears the line thoroughly to restore proper flow and help reduce repeat clogs. We focus on practical solutions that work for real homes in NEPA, whether it’s a kitchen sink that keeps slowing down or a tub that won’t drain right.",
      "We can service common household drains (sinks, tubs, showers, floor drains) and help identify when a problem is likely deeper in the main line.",
      "If you’ve tried plungers or store-bought cleaners and the problem keeps returning, professional drain cleaning is often the fastest path back to normal.",
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
      "Targeted clog removal for sinks, tubs, showers, toilets, and floor drains—fast and effective.",
    image: "nepa-clog-removal.jpg",
    bullets: [
      "Sinks, tubs, showers, toilets, and floor drains",
      "Fast, targeted clearing (no guesswork)",
      "Helps stop backups and standing water",
      "Guidance when symptoms suggest a main line issue",
    ],
    body: [
      "When a drain is fully blocked, you need targeted clog removal—not guesswork. We clear common clogs caused by hair, wipes, paper, grease, and buildup that traps debris.",
      "We start by identifying the fixture and symptoms (slow drain vs. full backup) so we can use the right approach and avoid unnecessary mess or damage.",
      "This service is ideal for single-fixture problems like a backed-up bathroom sink, a slow shower drain, or a floor drain that starts pooling water.",
      "If multiple fixtures are affected, that can indicate a main line issue—at that point, sewer line cleaning may be the right next step.",
    ],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
  {
    slug: "sewer-line-cleaning",
    title: "Sewer Line Cleaning",
    description:
      "Sewer line cleaning to clear buildup, improve flow, and help prevent backups in your main line.",
    image: "sewer-cleaning-duryea.jpg",
    bullets: [
      "Clear restrictions in the main sewer line",
      "Improve whole-home drainage",
      "Reduce basement drain backups",
      "Preventative option for repeat issues",
    ],
    body: [
      "If more than one drain is slow—or you’re seeing backups in a basement drain—your main sewer line may be restricted.",
      "Our sewer line cleaning service clears buildup and obstructions in the main line to restore proper drainage from the entire home.",
      "Older properties in NEPA can be more prone to main line issues due to aging piping, shifts over time, and debris that accumulates in low spots.",
      "Regular sewer line cleaning can be a smart preventative step if you’ve had repeat backups or slow drains throughout the house.",
    ],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
  {
    slug: "emergency-drain-service",
    title: "Emergency Drain Service",
    description:
      "Fast-response emergency drain service for urgent clogs, backups, and sewer line problems.",
    image: "emergency-drain-cleaning.jpg",
    bullets: [
      "Fast response for urgent clogs and backups",
      "Help limit water damage",
      "Main line and multi-fixture troubleshooting",
      "Clear guidance based on your symptoms",
    ],
    body: [
      "Drain and sewer backups don’t wait. If you have standing water, an overflowing drain, or a sudden sewage smell, you may need emergency service.",
      "We prioritize fast response for urgent clogs and backups so you can protect your home and avoid further damage.",
      "Emergency drain service can include clearing a blocked fixture, addressing a floor drain backup, or helping diagnose a main line issue when multiple drains are affected.",
      "If you’re unsure what’s happening, call—describing the symptoms (which drains, when it started, whether water backs up elsewhere) helps us guide you right away.",
    ],
    featured: true,
    cta: {
      label: "Contact us now",
      to: "/contact",
    },
  },
  {
    slug: "sewer-excavation",
    title: "Sewer Excavation",
    description:
      "Excavation services for sewer line repairs, replacements, and outdoor drain projects when digging is required.",
    image: "excavation-services.jpg",
    bullets: [
      "Repairs or replacement when digging is required",
      "Fix damaged or collapsed sewer sections",
      "Resolve repeat backups caused by structural issues",
      "Clear explanation of options before major work",
    ],
    body: [
      "Some drain and sewer problems can’t be solved from the inside—especially when there’s a collapsed line, severe damage, or a failed section that needs replacement.",
      "Our sewer excavation service supports repairs and replacements where digging is required to access the pipe safely and correctly.",
      "We can help when a line is broken, shifted, or repeatedly clogging due to structural issues that cleaning alone won’t fix.",
      "If you’re dealing with persistent backups despite repeated cleanings, excavation may be the right long-term solution. We’ll explain what we’re seeing and what options make sense before any major work.",
    ],
    cta: {
      label: "Contact us",
      to: "/contact",
    },
  },
];
