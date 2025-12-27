<script
  setup
  lang="ts"
>
import { locations } from "~/data/locations";

const route = useRoute();

const slug = computed(() => {
  const param = route.params.slug;
  if (Array.isArray(param)) return param[0] ?? "";
  if (typeof param === "string") return param;
  return "";
});

const location = computed(() => locations.find((l) => l.slug === slug.value));

if (!location.value) {
  throw createError({ statusCode: 404, statusMessage: "Location not found" });
}

useSeoMeta({
  title: () => `Drain Cleaning Service in ${location.value!.name} | Drain-Flo`,
  description: () =>
    location.value!.seoDescription ||
    `Need drain cleaning in ${location.value!.name}? Fast, reliable drain and sewer service in the area.`,
});
</script>

<template>
  <UContainer>
    <div class="my-8">
      <h1>Drain Cleaning Service in {{ location!.name }}</h1>

      <p class="mt-3">
        Looking for fast, professional drain cleaning in
        <strong>{{ location!.name }}</strong>? We help local homes and businesses with clogged drains, backups, and
        routine maintenance.
      </p>

      <LocationsAbout :location="location!" />
      <LocationsDetails :location="location!" />
      <LocationsCTA :location="location!" />

      <div class="mt-6">
        <NuxtLink
          to="/locations"
          class="hover:underline"
        >← All locations</NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
