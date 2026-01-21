<script
  setup
  lang="ts"
></script>

<template>
  <footer class="w-full border-t-2 border-stone-900 bg-flo-300 text-stone-900">
    <UContainer class="py-8">
      <div class="flex flex-col gap-8">
        <div
          class="flex flex-col gap-8 border-b-2 border-flo-900/40 pb-8 md:flex-row md:items-start md:justify-between">
          <div class="flex flex-col gap-3 text-center md:max-w-xl md:text-left">
            <div class="flex items-start justify-center gap-4 md:justify-start">
              <NuxtLink
                to="/"
                aria-label="Drain-Flo"
                class="shrink-0"
              >
                <NuxtImg
                  src="/footer.png"
                  alt="Drain-Flo"
                  class="h-24 w-auto"
                />
              </NuxtLink>

              <div class="flex max-w-md flex-col gap-2 text-left">
                <NuxtLink
                  to="/"
                  class="text-base font-semibold leading-none sm:text-lg"
                >Drain-Flo</NuxtLink>

                <p class="!text-xs text-stone-900/80 sm:text-sm md:text-lg">
                  Drain-Flo is a family-run drain and sewer cleaning service based in Duryea, PA. Please get in touch if
                  you have any questions or need our help.
                </p>

                <a
                  href="https://www.facebook.com/drain.flo.2025"
                  class="inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Drain-Flo on Facebook"
                  title="Drain-Flo on Facebook"
                >
                  <UIcon
                    name="i-mdi-facebook"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 !text-xs sm:text-sm md:justify-end md:text-right">
            <NuxtLink
              to="/locations"
              class="underline"
            >Locations</NuxtLink>
            <NuxtLink
              to="/privacy"
              class="underline"
            >Privacy</NuxtLink>
            <NuxtLink
              to="/terms"
              class="underline"
            >Terms</NuxtLink>
          </nav>
        </div>

        <p class="text-center !text-xs text-stone-900/80 sm:text-sm">
          © {{ new Date().getFullYear() }} Drain-Flo. All rights reserved.
        </p>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped></style>
