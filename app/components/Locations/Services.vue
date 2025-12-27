<script
  setup
  lang="ts"
>
import { services } from "~/data/services";

const props = defineProps<{
  title?: string
  slugs?: string[]
}>();

const items = computed(() => {
  if (!props.slugs?.length) return services;
  const wanted = new Set(props.slugs);
  return services.filter((s) => wanted.has(s.slug));
});
</script>

<template>
  <section class="border-2 border-flo-200 rounded-lg p-4">
    <h2 class="text-xl font-bold">{{ title ?? 'Services' }}</h2>

    <div class="mt-3 space-y-3">
      <NuxtLink
        v-for="service in items"
        :key="service.slug"
        :to="`/services/${service.slug}`"
        class="block rounded-md border border-flo-200 bg-white p-4"
      >
        <h3 class="text-lg font-semibold">{{ service.title }}</h3>
        <p class="mt-1 text-sm text-gray-700">{{ service.description }}</p>
        <span class="mt-2 inline-block text-flo-600 underline">Learn more</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>