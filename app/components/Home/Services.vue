<script
  setup
  lang="ts"
>
type ServiceItem = {
  id: string
  title: string
  description: string
  link: string
}

type Services = {
  primaryCategory: 'plumbing'
  summary: string
  items: ServiceItem[]
}

const services: Services = {
  primaryCategory: 'plumbing',
  summary:
    'Fast, professional drain services for clogs, backups, and routine maintenance.',
  items: [
    {
      id: 'drain-cleaning',
      title: 'Drain Cleaning',
      description: 'Thorough drain cleaning to restore flow and prevent recurring backups.',
      link: '/services/drain-cleaning',
    },
    {
      id: 'clog-removal',
      title: 'Clog Removal',
      description: 'Targeted clog removal for sinks, tubs, showers, and floor drains.',
      link: '/services/clog-removal',
    },
    {
      id: 'sewer-line-cleaning',
      title: 'Sewer Line Cleaning',
      description: 'Sewer line cleaning to clear buildup and help prevent blockages.',
      link: '/services/sewer-line-cleaning',
    },
    {
      id: 'emergency-drain-service',
      title: 'Emergency Drain Service',
      description: 'Rapid response for urgent drain issues—call anytime for help.',
      link: '/services/emergency-drain-service',
    },
  ],
}
</script>

<template>
  <div class="px-6 py-20 border-y border-2 border-stone-950 bg-drain-50/10">
    <div
      v-if="services && services.items && services.items.length"
      class="max-w-4xl mx-auto"
    >
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-center mb-4">Our Services</h2>
        <p class="text-center text-gray-600 mb-8 !text-xl">{{ services.summary }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="item in services.items"
          :key="item.id"
          :to="item.link"
          class="rounded-lg border border-flo-200 bg-drain-100 shadow-sm p-6 flex flex-col"
        >
          <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 mb-4">{{ item.description }}</p>
          <span
            class="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-black bg-tertiary-500 px-4 py-2 text-sm font-bold text-black "
          >
            Learn more
            <UIcon
              name="i-mdi-arrow-right"
              class="h-5 w-5"
            />
          </span>
        </NuxtLink>
      </div>
    </div>
    <div
      v-else
      class="text-center text-gray-500"
    >No services available.</div>
  </div>
</template>

<style scoped></style>
