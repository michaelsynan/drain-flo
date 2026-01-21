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
    `Need drain cleaning in ${location.value!.name
    }? Fast, reliable drain and sewer service in the area.`,
});

const otherLocations = computed(() => {
  return locations
    .filter((l) => l.slug !== location.value?.slug)
    .map((l) => ({
      id: l.slug,
      title: l.name,
      description: l.seoDescription,
      link: `/locations/${canonicalLocationSlug(l.name)}`,
    }))
    .slice(0, 4);
});

const heroImage = computed(() => location.value?.image || "drain-flo.jpg");
</script>

<template>
  <UContainer class="max-w-4xl py-10">


    <div class="relative mb-6 overflow-hidden rounded-lg border-2 border-stone-900">
      <NuxtImg
        :src="`/${heroImage}`"
        :alt="`${location!.name} drain cleaning`"
        class="aspect-[16/9] w-full object-cover"
      />
      <div class="absolute inset-x-0 bottom-0 bg-white/85 px-4 py-3 sm:px-6 sm:py-4 border-t-2 border-stone-900">
        <h1 class="text-2xl sm:text-3xl font-bold text-stone-950 leading-tight !pb-0 !mb-0">
          Drain Cleaning Service in {{ location!.name }}
        </h1>
      </div>
    </div>

    <p class="text-lg text-gray-700 mb-8">
      {{ location!.seoDescription }}
    </p>

    <section
      v-if="location!.services?.length"
      class="mb-8 rounded-lg border-2 border-stone-900 bg-flo-100 p-6"
    >
      <h2 class="text-xl font-bold mb-4">
        What we can help with in {{ location!.name }}
      </h2>
      <ul class="space-y-4">
        <li
          v-for="(service, idx) in location!.services"
          :key="idx"
          class="flex items-center gap-3"
        >
          <UIcon
            name="i-mdi-star-circle"
            class="h-6 w-6 shrink-0 text-wrench-500"
          />
          <span class="text-lg text-stone-800">{{ service }}</span>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        Serving Local Businesses and Home Owners
      </h2>
      <p class="mb-4">
        We are proud to serve both residential and commercial clients in
        {{ location!.name }}. Our team is familiar with the area, including
        local landmarks like {{ location!.landmarks.join(", ") }}.
      </p>
    </section>

    <LocationsCTA :location="location!" />

    <section
      v-if="otherLocations.length"
      class="mt-16 mb-20"
    >
      <h2 class="text-2xl font-bold text-center !mb-12 pt-10">
        Serving Other Locations in NEPA
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="item in otherLocations"
          :key="item.id"
          :to="item.link"
          class="rounded-lg border-2 border-stone-800 bg-drain-100 shadow-sm p-6 flex flex-col"
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
    </section>

    <div class="text-center mt-8">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 rounded-full border-2 border-black bg-gray-200 px-6 py-3 text-sm font-bold text-black hover:bg-gray-300"
      >
        <UIcon
          name="i-mdi-arrow-left"
          class="h-5 w-5"
        />
        Back to Home
      </NuxtLink>
    </div>
  </UContainer>
</template>