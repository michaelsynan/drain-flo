import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const PostTag = z.enum(["tips", "maintenance", "emergency", "guides", "news"]);

export const collections = {
  posts: defineCollection({
    // Specify the type of content in this collection
    type: "page",
    // Load every file inside the `content` directory
    source: "posts/*.md",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(PostTag).optional(),
      image: z.string().optional(),
      date: z.string(),
    }),
  }),
};
