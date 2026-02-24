<script
  setup
  lang="ts"
>
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

const navEl = ref<HTMLElement | null>(null);
const navHeight = ref(0);
const updateNavHeight = () => {
  if (navEl.value) navHeight.value = navEl.value.offsetHeight;
};

const isNavVisible = ref(true);
const lastScrollY = ref(0);
const handleScroll = () => {
  const current = window.scrollY || 0;
  const delta = current - lastScrollY.value;

  if (isMenuOpen.value) {
    isNavVisible.value = true;
    lastScrollY.value = current;
    return;
  }

  // Always show near the top to avoid jitter.
  if (current < Math.max(navHeight.value, 80)) {
    isNavVisible.value = true;
    lastScrollY.value = current;
    return;
  }

  if (delta > 10) {
    isNavVisible.value = false;
  } else if (delta < -10) {
    isNavVisible.value = true;
  }

  lastScrollY.value = current;
};

onMounted(() => {
  updateIsMobile();
  updateNavHeight();
  lastScrollY.value = window.scrollY || 0;

  window.addEventListener('resize', updateIsMobile);
  window.addEventListener('resize', updateNavHeight);
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
  window.removeEventListener('resize', updateNavHeight);
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div
    aria-hidden="true"
    :style="{ height: `${navHeight}px` }"
  />

  <div
    ref="navEl"
    :class="[
      'fixed left-0 right-0 top-0 bg-flo-300 transition-transform duration-200 ease-out z-50',
      isNavVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
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
          <NuxtImg
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
          :icon="isMobile ? undefined : 'i-mdi-phone'"
          as="a"
          href="tel:5703574228"
        >{{ isMobile ? 'CALL' : 'Call 570-357-4228' }}</UButton>
      </div>
    </div>

    <!-- Collapsible menu overlay -->
    <!-- Mobile: teleport overlay to body to avoid transform/positioning bugs -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMenuOpen && isMobile"
          id="main-menu"
          class="fixed left-0 right-0 bottom-0 bg-white/95 backdrop-blur p-6 z-[60]"
          :style="{ top: `${navHeight}px` }"
        >
          <div
            ref="menuEl"
            class="h-full flex flex-col items-center justify-center text-2xl"
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

            <a
              class="block mt-8 text-flo-700 hover:underline"
              href="https://www.facebook.com/drain.flo.2025"
              target="_blank"
              rel="noopener noreferrer"
              @click="isMenuOpen = false"
            >Add Us on Facebook</a>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Desktop: anchored dropdown below nav -->
    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen && !isMobile"
        id="main-menu"
        ref="menuEl"
        class="absolute bg-white/95 backdrop-blur rounded-lg shadow-lg border-2 !border-black p-6 z-50 text-2xl top-[calc(100%+0.5rem)] left-4 w-max max-w-[calc(100vw-2rem)]"
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
