<script
  setup
  lang="ts"
>
import type { Service } from "~/data/services";

defineProps<{ service: Service }>();

const phone = "2222-222-2222";
const phoneHref = "tel:2222222222";
</script>

<template>
  <div class="mt-6">
    <UButton
      class="rounded-full text-base font-bold px-5 py-2 text-stone-950 w-full md:w-auto justify-center text-center"
      color="tertiary"
      size="md"
      icon="i-mdi-phone"
      as="a"
      :href="phoneHref"
    >
      Call {{ phone }}
    </UButton>
  </div>
</template>

<style scoped></style>
