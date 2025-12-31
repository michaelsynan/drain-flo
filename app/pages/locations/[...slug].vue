<script
  setup
  lang="ts"
>
import { locations } from "~/data/locations";

const route = useRoute();

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function canonicalLocationSlug(cityName: string) {
  return `drain-cleaning-in-${slugify(cityName)}`;
}

const slug = computed(() => {
  const param = route.params.slug;
  if (Array.isArray(param)) return param[0] ?? "";
  if (typeof param === "string") return param;
  return "";
});

const location = computed(() => {
  const raw = slug.value;

  if (!raw) return undefined;

  const cityPart = raw.startsWith("drain-cleaning-in-")
    ? raw.replace(/^drain-cleaning-in-/, "")
    : raw;

  return locations.find((l) => {
    const byExistingSlug = l.slug === raw;
    const byCanonical = canonicalLocationSlug(l.name) === raw;
    const byCityOnly = slugify(l.name) === cityPart;
    return byExistingSlug || byCanonical || byCityOnly;
  });
});

if (location.value) {
  const canonical = canonicalLocationSlug(location.value.name);
  const param = route.params.slug;
  const hasExtraSegments = Array.isArray(param) && param.length > 1;

  if (slug.value !== canonical || hasExtraSegments) {
    await navigateTo(`/locations/${canonical}`, { redirectCode: 301 });
  }
}

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
  <UContainer class="max-w-4xl py-4">
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
