<script
  setup
  lang="ts"
>
import { locations } from "~/data/locations";

useSeoMeta({
  title: "Locations | Drain Cleaning Service",
  description:
    "Browse our service locations for drain cleaning, clog removal, and sewer line cleaning.",
});
</script>

<template>
  <UContainer>
    <div class="my-8">
      <h1>Locations</h1>
      <p class="mt-2">
        We provide drain cleaning and related services across these locations.
      </p>

      <ul class="mt-6 space-y-3">
        <li
          v-for="location in locations"
          :key="location.slug"
          class="border-2 border-flo-200 rounded-lg p-4"
        >
          <NuxtLink
            :to="`/locations/${location.slug}`"
            class="font-bold hover:underline"
          >
            {{ location.name }}
          </NuxtLink>
          <div class="text-sm mt-1">
            {{ location.county }} County
          </div>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

<style scoped></style>
