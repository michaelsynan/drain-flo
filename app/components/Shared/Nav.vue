<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isMobile = ref(false)
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <div
    class="relative bg-flo-50"
    @click.self="isMenuOpen = false"
  >
    <div class="grid grid-cols-3 items-center border-b-2 p-4">
      <!-- Left: Menu toggle button -->
      <div class="justify-self-start">
        <UButton
          class="w-20 h-20 rounded-full bg-flo-500/50 text-white font-bold border-2 border-flo-200 hover:text-flo-900 transition-all ease-in-out duration-300 flex items-center justify-center"
          variant="outline"
          size="lg"
          :aria-expanded="isMenuOpen"
          aria-controls="main-menu"
          @click="toggleMenu"
        >
          <span
            aria-hidden="true"
            class="text-3xl leading-none"
          >{{ isMenuOpen ? '×' : '☰' }}</span>
          <span class="sr-only">Toggle menu</span>
        </UButton>
      </div>

      <!-- Center: Logo / Site name -->
      <div class="justify-self-center">
        <NuxtLink to="/">
          <img
            v-if="siteLogo"
            :src="siteLogo"
            :alt="siteName"
            class="h-16 w-auto"
          />
          <span v-else>{{ siteName }}</span>
        </NuxtLink>
      </div>

      <!-- Right: Call to action button -->
      <div class="justify-self-end">
        <UButton
          class="rounded-full bg-flo-500/50 text-white text-2xl font-bold border-2 border-flo-200 hover:text-flo-900 transition-all ease-in-out duration-300 px-8 py-4"
          variant="outline"
          size="lg"
          as="NuxtLink"
          to="/donate"
        >Call 2222-222-2222</UButton>
      </div>
    </div>

    <!-- Collapsible menu overlay -->
    <div
      v-if="isMenuOpen"
      id="main-menu"
      class="absolute bg-white/95 backdrop-blur rounded-lg shadow-lg border-2 border-flo-200 p-6 z-50 text-2xl"
      :class="{
        'w-full h-screen top-0 left-0 flex flex-col items-center justify-center': isMobile,
        'w-full top-[calc(100%+0.5rem)] left-4': !isMobile
      }"
    >
      <NuxtLink
        to="/"
        class="block mb-4"
        @click="isMenuOpen = false"
      >Home</NuxtLink>
      <NuxtLink
        to="/about"
        class="block mb-4"
        @click="isMenuOpen = false"
      >About</NuxtLink>
      <NuxtLink
        to="/contact"
        class="block mb-4"
        @click="isMenuOpen = false"
      >Contact</NuxtLink>
      <NuxtLink
        to="/posts"
        class="block"
        @click="isMenuOpen = false"
      >Blog</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
