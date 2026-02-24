<script
  setup
  lang="ts"
>
import { locations } from "~/data/locations";

definePageMeta({
  title: 'Locations'
})

useSeoMeta({
  title: 'Drain Cleaning Locations in Northeastern PA',
  description:
    'Browse our service locations across Northeastern PA for drain cleaning, clog removal, and sewer line cleaning. Find your city and get fast help.',
});
</script>

<template>
  <main class="min-h-screen w-full">
    <section class="py-20 border-y-2 bg-flo-50">
      <UContainer class="max-w-4xl">
        <div>
          <h1>Locations</h1>
          <p class="mt-2">
            We provide drain cleaning and related services across at these locations across Northeastern Pennsylvania.
            If you are nearby and do not see your neighborhood listed, please feel free to get in touch.
          </p>

          <ul class="mt-6 space-y-3">
            <li
              v-for="location in locations"
              :key="location.slug"
              class=""
            >
              <NuxtLink
                :to="`/locations/${location.slug}`"
                class="block border-2 border-flo-200 rounded-lg p-4 hover:bg-flo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-flo-400"
              >
                <div class="font-bold hover:underline">
                  {{ location.name }}
                </div>
                <div class="text-sm mt-1">
                  {{ location.county }} County
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </UContainer>
    </section>
  </main>
</template>

<style scoped></style>
