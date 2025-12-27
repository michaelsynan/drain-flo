<script
  setup
  lang="ts"
>
import { onMounted, ref } from "vue";
import { locations } from "~/data/locations";
// Leaflet types are optional; fall back to any if @types/leaflet not installed
// import type { Map } from 'leaflet'
type Map = any;

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
        <h2 class="text-3xl font-bold">Locations We Serve</h2>
        <ul class="mt-4 grid gap-2 sm:grid-cols-2">
          <li
            v-for="loc in locations"
            :key="loc.slug"
          >
            <NuxtLink
              class="underline"
              :to="`/locations/${loc.slug}`"
            >{{
              loc.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div
          ref="mapContainer"
          class="w-full h-96 bg-gray-200"
          style="min-height: 300px"
        />
      </div>
    </section>
  </UContainer>
</template>

<style>
@import 'leaflet/dist/leaflet.css';
</style>
