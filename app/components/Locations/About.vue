<script
  setup
  lang="ts"
>
type Location = {
  name: string
  services?: string[]
  character?: string
  county?: string
  population?: number
}

defineProps<{ location: Location }>()
</script>

<template>
  <div class="mt-6 grid gap-6 md:grid-cols-2">
    <section class="border-2 border-flo-200 rounded-lg p-4">
      <h2 class="text-xl font-bold">Services in {{ location.name }}</h2>
      <ul
        v-if="location.services?.length"
        class="mt-3 list-disc pl-6 space-y-1"
      >
        <li
          v-for="service in location.services"
          :key="service"
        >
          {{ service }}
        </li>
      </ul>
      <p
        v-else
        class="mt-3 text-sm"
      >
        No services listed.
      </p>
    </section>

    <section class="border-2 border-flo-200 rounded-lg p-4">
      <h2 class="text-xl font-bold">About {{ location.name }}</h2>
      <p
        v-if="location.character"
        class="mt-3"
      >
        {{ location.character }}
      </p>
      <p class="mt-3 text-sm">
        <strong>County:</strong> {{ location.county }}
        <span v-if="location.population">•</span>
        <span v-if="location.population">
          <strong>Population:</strong> {{ location.population.toLocaleString() }}
        </span>
      </p>
    </section>
  </div>
</template>

<style scoped></style>