export const POST_TAGS = [
  "tips",
  "maintenance",
  "emergency",
  "guides",
  "news",
] as const;

export type PostTag = (typeof POST_TAGS)[number];

export const POST_TAG_CLASSES: Record<PostTag, string> = {
  tips: "bg-wrench-200 border-2 border-stone-900 text-stone-900",
  maintenance: "bg-drain-200 border-2 border-stone-900 text-stone-900",
  emergency: "bg-wrench-200 border-2 border-stone-900 text-stone-900",
  guides: "bg-flo-100 border-2 border-stone-900 text-stone-900",
  news: "bg-flo-50 border-2 border-stone-900 text-stone-900",
};

export const isPostTag = (value: string): value is PostTag =>
  (POST_TAGS as readonly string[]).includes(value);
