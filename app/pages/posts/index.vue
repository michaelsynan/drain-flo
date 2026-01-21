<template>
  <UContainer class="max-w-4xl py-10 min-h-screen">
    <div class="flex flex-col gap-6">
      <h1>Draining & Sewer Cleaning Blog</h1>
      <div class="flex flex-col gap-4">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="block"
        >
          <div class="rounded-lg border-2 border-stone-800 bg-flo-100 p-5">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between gap-4">
                <p
                  v-if="post.date"
                  class="text-sm text-stone-900/70"
                >{{ formatDate(post.date) }}</p>

                <div
                  v-if="post.tags?.length"
                  class="flex flex-wrap justify-end gap-2"
                >
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="rounded-full px-3 py-1 text-xs font-mono"
                    :class="isPostTag(tag) ? POST_TAG_CLASSES[tag] : 'border-2 border-stone-900 bg-flo-50 text-stone-900'"
                  >{{ tag }}</span>
                </div>
              </div>

              <h2 class="text-xl font-semibold">{{ post.title }}</h2>
              <p class="text-stone-900/80">{{ post.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<script
  setup
  lang="ts"
>
import { POST_TAG_CLASSES, isPostTag } from '@/data/postTags'

const { data: posts } = await useAsyncData('posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date', 'tags')
    .all()
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
})

function formatDate(dateValue: string | Date) {
  const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue
  if (Number.isNaN(date.getTime())) return ''
  return dateFormatter.format(date)
}

</script>
