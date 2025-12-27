<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const appConfig = useAppConfig();
const siteName = appConfig.siteName;
const siteLogo = appConfig.siteLogo;

const isMenuOpen = ref(false);
const menuEl = ref<HTMLElement | null>(null);
const menuButtonEl = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    menuEl.value &&
    !menuEl.value.contains(event.target as Node) &&
    menuButtonEl.value &&
    !menuButtonEl.value.contains(event.target as Node)
  ) {
    isMenuOpen.value = false;
  }
};

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});

const isMobile = ref(false);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative bg-flo-300">
    <div class="grid grid-cols-3 items-center border-b-2 border-black p-4">
      <!-- Left: Menu toggle button -->
      <div
        ref="menuButtonEl"
        class="justify-self-start"
      >
        <UButton
          class="w-12 h-12 rounded-full flex items-center justify-center border-2 !border-black !bg-tertiary-500 !text-black"
          variant="outline"
          color="tertiary"
          size="md"
          :aria-expanded="isMenuOpen"
          aria-controls="main-menu"
          @click="toggleMenu"
        >
          <span
            aria-hidden="true"
            class="text-xl leading-none text-black"
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
            class="h-[70px] w-auto"
          />
          <span v-else>{{ siteName }}</span>
        </NuxtLink>
      </div>

      <!-- Right: Call to action button -->
      <div class="justify-self-end">
        <UButton
          class="rounded-full text-base font-bold px-5 py-2 text-stone-950"
          color="tertiary"
          size="md"
          as="NuxtLink"
          to="/"
        >Call 2222-222-2222</UButton>
      </div>
    </div>

    <!-- Collapsible menu overlay -->
    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="main-menu"
        ref="menuEl"
        class="absolute bg-white/95 backdrop-blur rounded-lg shadow-lg border-2 !border-black p-6 z-50 text-2xl"
        :class="{
          'fixed inset-0 flex flex-col items-center justify-center': isMobile,
          'top-[calc(100%+0.5rem)] left-4 w-max max-w-[calc(100vw-2rem)]': !isMobile,
        }"
      >
        <NuxtLink
          to="/"
          class="block mb-4"
          @click="isMenuOpen = false"
        >Home</NuxtLink>
        <NuxtLink
          to="/services"
          class="block mb-4"
          @click="isMenuOpen = false"
        >Services</NuxtLink>
        <NuxtLink
          to="/locations"
          class="block mb-4"
          @click="isMenuOpen = false"
        >Locations</NuxtLink>
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
    </Transition>
  </div>
</template>
