<script
  setup
  lang="ts"
>
import type { Service } from "~/data/services";

const props = defineProps<{ service: Service }>();

const cta = computed(() =>
  props.service.cta ?? {
    label: 'Contact us',
    to: '/contact',
  }
);
</script>

<template>
  <div class="mt-6">
    <UButton
      color="tertiary"
      size="lg"
      as="NuxtLink"
      :to="cta.to"
    >
      {{ cta.label }}
    </UButton>
  </div>
</template>

<style scoped></style>
