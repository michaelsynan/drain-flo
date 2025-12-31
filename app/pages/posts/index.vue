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
              <p
                v-if="post.date"
                class="text-sm text-stone-900/70"
              >{{ formatDate(post.date) }}</p>

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
const { data: posts } = await useAsyncData('posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date')
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
