<script
  setup
  lang="ts"
>
type Location = {
  name: string
}

const phone = "570-357-4228"
const phoneHref = "tel:5703574228"

defineProps<{ location: Location }>()
</script>

<template>
  <section class="mt-6 border-2 border-stone-900 rounded-lg p-6 bg-flo-100">
    <h2 class="text-xl font-bold">Need drain service in {{ location.name }}?</h2>
    <p class="mt-3">
      Call now for fast help with clogs, backups, and sewer line issues.
    </p>
    <div class="mt-4 flex justify-start text-stone-900">
      <UButton
        class="rounded-full text-base font-bold px-5 py-2 text-stone-950"
        color="tertiary"
        size="md"
        icon="i-mdi-phone"
        as="a"
        :href="phoneHref"
      >
        Call {{ phone }}
      </UButton>
    </div>
  </section>
</template>

<style scoped></style>