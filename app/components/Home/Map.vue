<script
  setup
  lang="ts"
>
import { onMounted, ref } from "vue";
import { locations } from "~/data/locations";
// Leaflet types are optional; fall back to any if @types/leaflet not installed
// import type { Map } from 'leaflet'
type Map = any;

const contactPhoneDisplay = "222-222-2222";
const contactPhoneHref = "2222222222";
const contactEmail = "hello@drain-flo.com";

const mapContainer = ref<HTMLElement>();
let map: Map | null = null;

onMounted(async () => {
  // Dynamic import; TS ignore to suppress missing types if @types/leaflet not installed
  // @ts-ignore
  const L = await import("leaflet");

  // Fix for default icon path issue with webpack
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  map = L.map(mapContainer.value!, {
    attributionControl: false,
  }).setView([41.4089, -75.6624], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // attribution intentionally removed
  }).addTo(map);

  locations.forEach((loc) => {
    if (loc.lat && loc.lon) {
      const marker = L.marker([loc.lat, loc.lon]).addTo(map);
      marker.bindPopup(`<strong>${loc.name}</strong>`);
    }
  });
});
</script>

<template>
  <UContainer>
    <section class="grid gap-8 lg:grid-cols-2 py-20">
      <div>
        <h2 class="text-2xl font-bold">Contact</h2>
        <p class="mt-4 text-lg leading-relaxed">
          <a
            class="underline"
            :href="`tel:${contactPhoneHref}`"
          >{{ contactPhoneDisplay }}</a>
          <span class="mx-2">•</span>
          <a
            class="underline"
            :href="`mailto:${contactEmail}`"
          >{{ contactEmail }}</a>
        </p>

        <h2 class="mt-10 text-3xl font-bold">Locations We Serve</h2>
        <p class="mt-4 text-lg leading-relaxed">
          We proudly serve
          <template
            v-for="(loc, i) in locations"
            :key="loc.slug"
          >
            <NuxtLink
              class="underline"
              :to="`/locations/${loc.slug}`"
            >{{ loc.name }}</NuxtLink>
            <span v-if="locations.length === 1">.</span>
            <span v-else-if="locations.length === 2">
              <span v-if="i === 0"> and </span>
              <span v-else>.</span>
            </span>
            <span v-else>
              <span v-if="i < locations.length - 2">, </span>
              <span v-else-if="i === locations.length - 2">, and </span>
              <span v-else>.</span>
            </span>
          </template>
        </p>

        <p class="mt-4 text-lg leading-relaxed">
          <a
            class="underline"
            href="https://share.google/yjgVYcaz8l32VUyh4"
            target="_blank"
            rel="noopener noreferrer"
          >Visit Our Google Business Profile Page</a>
        </p>
      </div>

      <div>
        <div
          ref="mapContainer"
          class="w-full h-96 bg-gray-200 border-2 border-stone-800 rounded-lg overflow-hidden"
          style="min-height: 300px"
        />
      </div>
    </section>
  </UContainer>
</template>

<style>
@import 'leaflet/dist/leaflet.css';
</style>
