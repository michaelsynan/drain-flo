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
  <section class="max-w-3xl mx-auto px-6 py-10">
    <div class="rounded-lg border border-flo-200 bg-white p-6 shadow-sm">
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
    </div>
  </section>
</template>

<style scoped></style>
