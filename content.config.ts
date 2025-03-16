import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asOgImageCollection } from 'nuxt-og-image/content';

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asOgImageCollection({
        type: 'page',
        source: '**/*.md',
        schema: z.object({
          date: z.string().optional(),
        }),
      })
    ),
  },
});
