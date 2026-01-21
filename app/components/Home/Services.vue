<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import { services } from '~/data/services'

type ServiceCardItem = {
  id: string
  title: string
  description: string
  link: string
  featured?: boolean
}

const summary =
  'Fast, professional drain services for clogs, backups, and routine maintenance.'

const items = computed<ServiceCardItem[]>(() => {
  const mapped = services.map((service) => ({
    id: service.slug,
    title: service.title,
    description: service.description,
    link: `/services/${service.slug}`,
    featured: service.featured,
  }))

  const nonFeatured = mapped.filter((item) => !item.featured)
  const featured = mapped.filter((item) => item.featured)

  return [...nonFeatured, ...featured]
})
</script>

<template>
  <div class="px-6 py-20 border-b-2 border-stone-950 bg-drain-50/10">
    <div
      v-if="items.length"
      class="max-w-4xl mx-auto"
    >
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-center mb-4">Our Services</h2>
        <p class="text-center text-gray-600 mb-8 !text-xl">{{ summary }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(item, idx) in items"
          :key="item.id"
          :to="item.link"
          :class="[
            'rounded-lg border-2 border-stone-800 bg-drain-100 shadow-sm p-6 flex flex-col',
            item.featured && 'md:col-span-2',
          ]"
        >
          <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 mb-4">{{ item.description }}</p>
          <span
            class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-tertiary-500 px-4 py-2 text-sm font-bold text-black md:w-fit"
          >
            Learn more
            <UIcon
              name="i-mdi-arrow-right"
              class="h-5 w-5"
            />
          </span>
        </NuxtLink>
      </div>
    </div>
    <div
      v-else
      class="text-center text-gray-500"
    >No services available.</div>
  </div>
</template>

<style scoped></style>
