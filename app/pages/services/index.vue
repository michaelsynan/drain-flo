<script
  setup
  lang="ts"
>
import { services } from "~/data/services";

useSeoMeta({
  title: 'Services | Drain-Flo',
  description: 'Drain cleaning, clog removal, sewer line cleaning, and emergency drain service.',
})
</script>

<template>
  <UContainer class="max-w-4xl m-auto py-10">
    <div class="my-8">
      <div class="pb-6">
        <h1>Our Drain Cleaning and Clog Removal Services</h1>
        <p class="mt-2">
          Fast, professional drain services for clogs, backups, and routine maintenance.
        </p>
      </div>

      <div class="mt-6 space-y-8">
        <NuxtLink
          v-for="item in services"
          :key="item.slug"
          :to="`/services/${item.slug}`"
          class="group flex w-full flex-col items-stretch gap-0 overflow-hidden rounded-lg border-2 border-stone-900 bg-flo-50 shadow-sm hover:bg-flo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-flo-400 sm:flex-row sm:gap-4"
        >
          <div class="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[12rem] sm:self-stretch">
            <NuxtImg
              :src="`/${item.image ?? 'drain-flo.jpg'}`"
              :alt="item.title"
              fit="cover"
              class="block h-full w-full object-cover object-top sm:absolute sm:inset-0"
            />
          </div>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="text-lg font-semibold mb-1">{{ item.title }}</h2>
            <p class="text-sm text-gray-700">{{ item.description }}</p>

            <UButton
              class="mt-4 w-fit text-stone-900"
              color="tertiary"
              size="md"
              variant="solid"
              as="span"
            >
              Learn more
              <UIcon
                name="i-mdi-arrow-right"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </UButton>
          </div>
        </NuxtLink>
      </div>


    </div>
  </UContainer>
</template>

<style scoped></style>