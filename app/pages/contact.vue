<script
  setup
  lang="ts"
>
definePageMeta({
  title: 'Contact'
})

useSeoMeta({
  title: 'Contact',
  description:
    'Do you have a clogged drain or plumbing emergency? Call 570-357-4228 or email gubitoso114@gmail.com to get your drain cleared today.',
})

const phoneDisplay = '570-357-4228'
const phoneHref = 'tel:5703574228'
const emailDisplay = 'gubitoso114@gmail.com'
const emailHref = 'mailto:gubitoso114@gmail.com'
</script>

<template>
  <UContainer class="py-10">
    <div class="py-4">
      <h1 class="font-bold text-center">Contact Us Now</h1>
      <p class="mx-auto mt-2 max-w-[460px] px-2 text-center text-stone-900/80">
        Do you have a clogged drain or other plumbing emergency? Get in touch today and we’ll help get your drain
        cleared and your issue fixed.
      </p>
    </div>

    <div class="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
      <div
        class="flex h-[220px] w-[220px] flex-col items-center justify-center gap-4 rounded-lg border-2 border-stone-900 bg-flo-100 p-6 text-center"
      >
        <UIcon
          name="i-mdi-phone"
          class="h-10 w-10 text-stone-900"
          aria-hidden="true"
        />

        <UButton
          as="a"
          :href="phoneHref"
          color="tertiary"
          size="md"
          class="w-full justify-center rounded-full text-base font-bold"
        >Call {{ phoneDisplay }}</UButton>
      </div>

      <div
        class="flex h-[220px] w-[220px] flex-col items-center justify-center gap-4 rounded-lg border-2 border-stone-900 bg-flo-100 p-6 text-center"
      >
        <UIcon
          name="i-mdi-email"
          class="h-10 w-10 text-stone-900"
          aria-hidden="true"
        />

        <UButton
          as="a"
          :href="emailHref"
          color="tertiary"
          size="md"
          class="w-full justify-center rounded-full text-base font-bold"
        >Email Us</UButton>

        <p class="!text-xs text-stone-900/80 sm:text-sm">
          {{ emailDisplay }}
        </p>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
