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

      <div class="mt-6 space-y-4">
        <NuxtLink
          v-for="item in services"
          :key="item.slug"
          :to="`/services/${item.slug}`"
          class="group flex w-full gap-4 rounded-lg border-2 border-flo-200 bg-white shadow-sm overflow-hidden hover:bg-flo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-flo-400"
        >
          <NuxtImg
            :src="`/${item.image ?? 'drain-flo.jpg'}`"
            :alt="item.title"
            class="h-full w-28 shrink-0 object-cover sm:w-40"
          />

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="text-lg font-semibold mb-1">{{ item.title }}</h2>
            <p class="text-sm text-gray-700">{{ item.description }}</p>

            <span class="mt-3 text-flo-600 underline">
              Learn more
            </span>
          </div>
        </NuxtLink>
      </div>

      <p class="mt-8 text-gray-700">
        Need something else? Call us.
      </p>
    </div>
  </UContainer>
</template>

<style scoped></style>