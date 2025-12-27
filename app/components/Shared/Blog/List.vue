<script
  setup
  lang="ts"
>
const { data: posts } = await useAsyncData('home-posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description')
    .limit(5)
    .all()
})
</script>

<template>
  <div class="!py-20 border-y-2 bg-flo-50">
    <UContainer>
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-center">Check Out Our Latest Posts</h2>
        <p class="text-center mb-8">Read tips and insights from our experts.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in posts"
          :key="post.path"
          class="card bg-flo-100"
        >
          <NuxtLink
            :to="post.path"
            class="block p-4"
          >
            <h3 class="text-lg font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-sm text-gray-600">{{ post.description }}</p>
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

  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
