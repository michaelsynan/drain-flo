<script
  setup
  lang="ts"
>
import { services } from "~/data/services";

useSeoMeta({
  title: 'Services | Drain-Flo',
  description: 'Drain cleaning, clog removal, sewer line cleaning, and emergency drain service.',
})
</script>

<template>
  <UContainer>
    <div class="my-8">
      <h1>Services</h1>
      <p class="mt-2">
        Fast, professional drain services for clogs, backups, and routine maintenance.
      </p>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in services"
          :key="item.slug"
          class="rounded-lg border-2 border-flo-200 bg-white shadow-sm p-6 flex flex-col"
        >
          <h2 class="text-lg font-semibold mb-2">{{ item.title }}</h2>
          <p class="text-sm text-gray-700 mb-4">{{ item.description }}</p>
          <NuxtLink
            :to="`/services/${item.slug}`"
            class="text-flo-600 underline mt-auto"
          >Learn more</NuxtLink>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>