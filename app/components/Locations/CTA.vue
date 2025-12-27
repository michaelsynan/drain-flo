<script
  setup
  lang="ts"
>
type Location = {
  name: string
}

defineProps<{ location: Location }>()
</script>

<template>
  <section class="mt-6 border-2 border-flo-200 rounded-lg p-6 bg-white">
    <h2 class="text-xl font-bold">Need drain service in {{ location.name }}?</h2>
    <p class="mt-3">
      Call now for fast help with clogs, backups, and sewer line issues.
    </p>
    <div class="mt-4 flex justify-start">
      <UButton
        color="tertiary"
        size="lg"
        as="NuxtLink"
        to="/contact"
      >
        Contact us
      </UButton>
    </div>
  </section>
</template>

<style scoped></style>