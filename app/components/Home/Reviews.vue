<script
  setup
  lang="ts"
>
import { reviews } from "~/data/reviews";

const loopReviews = computed(() => {
  // Duplicate for seamless looping
  return [...reviews, ...reviews];
});
</script>

<template>
  <section class="py-20 border-b-2 border-stone-900 bg-drain-50/10">

    <div class="mb-12">
      <h2 class="text-2xl font-bold text-center">What Customers Are Saying</h2>
      <p class="text-center mb-8 !text-xl">Real feedback from homeowners we’ve helped.</p>
    </div>

    <div class="reviews-marquee">
      <div class="reviews-track">
        <div
          v-for="(review, i) in loopReviews"
          :key="`${review.id}-${i}`"
          class="reviews-item"
        >
          <ReviewsCard :review="review" />
        </div>
      </div>
    </div>

    <div class="mt-10 text-center">
      <a
        href="https://www.google.com/search?q=drain+flo+pa&sca_esv=c73be6b8c2f624be&sxsrf=AE3TifM8J3xvd3qS-Xk81toKfTlmgRy97A%3A1766834408348&source=hp&ei=6MBPacywE6mfw8cP_JqE0Qw&iflsig=AOw8s4IAAAAAaU_O-F5zLobi9-hc7c8wu9l8VSzqP2U-&ved=0ahUKEwjMxKOK092RAxWpz_ACHXwNIcoQ4dUDCBs&uact=5&oq=drain+flo+pa&gs_lp=Egdnd3Mtd2l6IgxkcmFpbiBmbG8gcGEyBBAjGCcyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjbDFAAWM8LcAB4AJABAJgBkQKgAcAKqgEFNS41LjG4AQPIAQD4AQGYAgugAooLwgIKECMYgAQYJxiKBcICCxAAGIAEGJECGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICCxAuGIAEGNEDGMcBwgIIEC4YgAQYsQPCAgoQABiABBhDGIoFwgIFEC4YgATCAg4QLhiABBjHARiOBRivAcICCBAAGIAEGLEDwgIOEC4YgAQYsQMYgwEY5QTCAgwQLhiABBixAxgKGAuYAwCSBwUzLjcuMaAHs3SyBwUzLjcuMbgHigvCBwQyLTExyAcwgAgA&sclient=gws-wiz#mpd=~963112038620280244/customers/reviews"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 underline font-semibold"
      >
        See all reviews
        <UIcon
          name="i-heroicons-arrow-right-20-solid"
          class="h-5 w-5"
          aria-hidden="true"
        />
      </a>
    </div>

  </section>
</template>

<style scoped>
.reviews-marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right,
      transparent 0,
      black 64px,
      black calc(100% - 64px),
      transparent 100%);
  mask-image: linear-gradient(to right,
      transparent 0,
      black 64px,
      black calc(100% - 64px),
      transparent 100%);
}

.reviews-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  will-change: transform;
  animation: reviews-scroll 45s linear infinite;
}

.reviews-marquee:hover .reviews-track {
  animation-play-state: paused;
}

.reviews-item {
  flex: 0 0 auto;
  width: 22rem;
}

@keyframes reviews-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
