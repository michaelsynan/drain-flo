<script
  setup
  lang="ts"
>
definePageMeta({
  title: 'About Us'
})

useSeoMeta({
  title: 'About Us',
  description:
    'Drain-Flo is a family-owned drain cleaning company serving Northeastern PA with 24/7 emergency plumbing services. Call 570-357-4228 for fast help.',
})
</script>

<template>
  <UContainer class="py-8">
    <div class="flex flex-col md:flex-row items-start gap-8">
      <NuxtImg
        src="/drain-flo.jpg"
        alt="Drain-Flo"
        class="w-full md:w-1/3 rounded-lg border-2 border-stone-900"
      />

      <div class="flex-1">
        <h1 class="font-bold mb-4">About Us</h1>
        <p class="mb-4">
          We are a family-owned drain cleaning company serving Northeastern PA with 24/7 emergency plumbing services.
          Our team is professional, reliable, and affordable, committed to providing top-quality service to our
          community.
        </p>
        <p class="mb-2 flex items-center gap-2">
          <UIcon
            name="i-mdi-phone"
            class="text-xl"
          />
          <a
            href="tel:5703574228"
            class="text-flo-700 hover:underline"
          >570-357-4228</a>
        </p>
        <p class="flex items-center gap-2">
          <UIcon
            name="i-mdi-email"
            class="text-xl"
          />
          <a
            href="mailto:gubitoso114@gmail.com"
            class="text-flo-700 hover:underline"
          >gubitoso114@gmail.com</a>
        </p>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
