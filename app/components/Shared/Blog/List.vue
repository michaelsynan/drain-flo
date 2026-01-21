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

const { data: posts } = await useAsyncData('home-posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date', 'tags')
    .limit(5)
    .all()
})
</script>

<template>
  <div class="!py-20 border-b-2 border-stone-900 bg-flo-50">
    <UContainer>
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-center">Check Out Our Latest Posts</h2>
        <p class="text-center mb-8 !text-xl">Read tips and insights from our experts.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in posts"
          :key="post.path"
          class="card bg-drain-100 border-2 border-stone-800"
        >
          <NuxtLink
            :to="post.path"
            class="flex h-full flex-col p-4"
          >
            <div
              v-if="post.tags?.length"
              class="mb-3 flex flex-wrap justify-start gap-2"
            >
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="rounded-full px-3 py-1 text-xs font-mono"
                :class="isPostTag(tag) ? POST_TAG_CLASSES[tag] : 'border-2 border-stone-900 bg-flo-50 text-stone-900'"
              >{{ tag }}</span>
            </div>

            <h3 class="text-lg font-semibold mb-2">{{ post.title }}</h3>
            <time
              class="block text-xs font-mono text-gray-600 mb-2"
              :datetime="post.date"
            >{{ formatPostDate(post.date) }}</time>
            <p class="text-sm text-gray-600">{{ post.description }}</p>

            <div class="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-semibold text-flo-700 hover:underline">
              Read more
              <UIcon
                name="i-mdi-arrow-right"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.u-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.card {


  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
