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
    'Emergency plumbing services available 24/7 for urgent issues like leaks, clogs, and system failures.',
  items: [
    {
      id: 'drainage-service',
      title: 'Drainage Service',
      description: 'Professional drainage services to keep your systems flowing smoothly.',
      link: '/services/drainage-service',
    },
    {
      id: 'sewer-line-cleaning-repair',
      title: 'Sewer Line Cleaning & Repair',
      description:
        'Comprehensive sewer line cleaning and repair services for homes and businesses.',
      link: '/services/sewer-line-cleaning-repair',
    },
    {
      id: 'drain-clogs',
      title: 'Drain Clogs',
      description:
        'Expert solutions for stubborn drain clogs to restore proper flow.',
      link: '/services/drain-clogs',
    },
    {
      id: 'toilet-repair',
      title: 'Toilet Repair',
      description: 'Reliable toilet repair services to fix leaks, clogs, and other issues.',
      link: '/services/toilet-repair',
    },
    {
      id: 'faucet-leaks',
      title: 'Faucet Leaks',
      description:
        'Quick and efficient repairs for leaky faucets to prevent water waste.',
      link: '/services/faucet-leaks',
    },
  ],
}
</script>

<template>
  <div class="px-6 py-10">
    <div
      v-if="services && services.items && services.items.length"
      class="max-w-4xl mx-auto"
    >
      <h2 class="text-2xl font-bold text-center mb-4">Our Services</h2>
      <p class="text-center text-gray-600 mb-8">{{ services.summary }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in services.items"
          :key="item.id"
          class="rounded-lg border border-flo-200 bg-white shadow-sm p-6 flex flex-col"
        >
          <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 mb-4">{{ item.description }}</p>
          <NuxtLink
            :to="item.link"
            class="text-flo-600 underline mt-auto"
          >Learn more</NuxtLink>
        </div>
      </div>
    </div>
    <div
      v-else
      class="text-center text-gray-500"
    >No services available.</div>
  </div>
</template>

<style scoped></style>
