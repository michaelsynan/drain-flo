<script
  setup
  lang="ts"
>
import { reviews } from "~/data/reviews";
</script>

<template>
  <main class="min-h-screen w-full">
    <section class="py-20 border-y-2 bg-flo-50">

      <div class="mb-12">
        <h1 class="text-3xl font-bold text-center">Reviews</h1>
        <p class="text-center mb-8">What customers are saying about Drain-Flo.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReviewsCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>

    </section>
  </main>
</template>

<style scoped></style>
