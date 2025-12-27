<script
  setup
  lang="ts"
>
type Location = {
  details?: string
  extra?: string
  directions?: string
  landmarks?: string[]
}

defineProps<{ location: Location }>()
</script>

<template>
  <section class="mt-6 border-2 border-flo-200 rounded-lg p-4">
    <h2 class="text-xl font-bold">Local details</h2>

    <div class="mt-3 space-y-3">
      <p v-if="location.details">{{ location.details }}</p>
      <p v-if="location.extra">{{ location.extra }}</p>
      <p v-if="location.directions">
        <strong>Directions:</strong> {{ location.directions }}
      </p>

      <div v-if="location.landmarks?.length">
        <strong>Nearby landmarks:</strong>
        <ul class="mt-2 list-disc pl-6 space-y-1">
          <li
            v-for="landmark in location.landmarks"
            :key="landmark"
          >
            {{ landmark }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>