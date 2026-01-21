<script
  setup
  lang="ts"
>
const services = [
  'Drain Cleaning',
  'Clog Removal',
  'Sewer Line Cleaning',
  'Emergency Drain Service',
] as const
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 py-10">
    <slot :services="services">
      <h2 class="text-2xl font-bold">Services</h2>
      <ul class="mt-4 space-y-2">
        <li
          v-for="service in services"
          :key="service"
          class="rounded-md border border-flo-200 px-4 py-3"
        >
          {{ service }}
        </li>
      </ul>
    </slot>
  </section>
</template>

<style scoped></style>
