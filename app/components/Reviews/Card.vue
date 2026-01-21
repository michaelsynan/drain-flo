<script
  setup
  lang="ts"
>
import type { Review } from "~/data/reviews";

const props = defineProps<{
  review: Review;
}>();

const initials = computed(() => {
  const parts = props.review.name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const first = parts[0]?.[0] ?? "";
  const last = (parts.length > 1 ? parts[parts.length - 1]?.[0] : "") ?? "";
  return (first + last).toUpperCase();
});

const stars = computed(() => {
  return Array.from({ length: 5 }, (_, i) => i < props.review.rating);
});
</script>

<template>
  <article class="rounded-lg border-2 border-stone-900 bg-drain-100 shadow-sm p-6">
    <div class="flex items-start justify-between gap-4">
      <div class="w-full">
        <div class="flex items-center gap-3">
          <div
            class="h-10 w-10 rounded-full border-2 border-stone-900 bg-white overflow-hidden flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <img
              v-if="review.imageUrl"
              :src="review.imageUrl"
              :alt="review.name"
              class="h-full w-full object-cover"
              loading="lazy"
            />
            <span
              v-else
              class="text-xs font-extrabold text-stone-900"
            >{{ initials }}</span>
          </div>

          <p class="text-lg !font-bold">
            {{ review.name }}
            <span
              v-if="review.location"
              class="font-normal text-gray-700"
            >— {{ review.location }}</span>
          </p>
        </div>

        <p class="mt-2 text-sm text-stone-800">
          <span class="font-semibold tracking-wide">
            <span
              v-for="(filled, i) in stars"
              :key="i"
              :class="filled ? 'text-yellow-500' : 'text-stone-300'"
            >★</span>
          </span>
        </p>
      </div>
    </div>

    <h3
      v-if="review.title"
      class="mt-4 text-base font-bold"
    >
      {{ review.title }}
    </h3>
    <p class="mt-3 text-sm text-gray-700">{{ review.body }}</p>
  </article>
</template>

<style scoped></style>