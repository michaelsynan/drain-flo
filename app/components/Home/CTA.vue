<script
  setup
  lang="ts"
>
const phone = "222-222-2222";
const phoneHref = "tel:2222222222";
</script>

<template>
  <section class="relative w-full min-h-[420px] border-y-2 overflow-hidden bg-drain-100">

    <div class="mx-auto flex min-h-[420px] max-w-4xl items-center px-6 py-20 md:px-8">
      <div class="w-full rounded-lg border-2 border-stone-900 bg-flo-100 p-10 text-center md:p-14">
        <h2 class="text-stone-950">Need pipe cleaning today?</h2>
        <p class="mt-3 !text-lg max-w-xl m-auto">Call now to schedule fast, professional service. Get help with clogs,
          backups, and slow
          drains.</p>
        <div class="mt-6 flex justify-center">
          <UButton
            class="text-stone-90"
            variant="solid"
            color="tertiary"
            size="xl"
            icon="i-mdi-phone"
            as="a"
            :href="phoneHref"
          >Call {{ phone }}</UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
