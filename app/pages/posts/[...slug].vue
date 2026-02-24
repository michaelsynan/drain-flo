<script
  setup
  lang="ts"
>
import { POST_TAG_CLASSES, isPostTag } from '@/data/postTags'

const formatPostDate = (date: string) => {
  const d = new Date(`${date}T00:00:00Z`)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('posts').path(route.path).first()
})

definePageMeta({
  title: 'Blog Post'
})

const seoTitle = computed(() => page.value?.title || 'Blog Post')
const seoDescription = computed(
  () =>
    page.value?.description ||
    'Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.'
)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
})
</script>

<template>
  <UContainer class="max-w-4xl py-10">
    <div
      v-if="page"
      class="rounded-lg border-2 border-stone-900 bg-flo-100 p-6 md:p-10"
    >
      <div class="not-prose mb-6 flex items-center justify-between gap-4  pb-6">
        <p class="text-xs text-stone-500">
          {{ formatPostDate(page.date) }}
        </p>

        <div
          v-if="page.tags?.length"
          class="flex flex-wrap justify-end gap-2"
        >
          <span
            v-for="tag in page.tags"
            :key="tag"
            class="rounded-full px-3 py-1 text-xs font-mono"
            :class="isPostTag(tag) ? POST_TAG_CLASSES[tag] : 'border-2 border-stone-900 bg-flo-50 text-stone-900'"
          >{{ tag }}</span>
        </div>
      </div>

      <div class="prose prose-lg">
        <h1>{{ page.title }}</h1>
        <ContentRenderer :value="page" />
      </div>

      <div class="not-prose pt-6">
        <UButton
          class="text-stone-900 no-underline"
          color="tertiary"
          size="lg"
          icon="i-mdi-arrow-left"
          as="NuxtLink"
          to="/posts"
        >Back</UButton>
      </div>
    </div>
  </UContainer>
</template>
