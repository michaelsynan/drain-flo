<script
  setup
  lang="ts"
>
import { services } from "~/data/services";

const route = useRoute();

const slug = computed(() => {
  const param = route.params.slug;
  if (Array.isArray(param)) return param[0] ?? "";
  if (typeof param === "string") return param;
  return "";
});

const service = computed(() => services.find((s) => s.slug === slug.value));

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: "Service not found" });
}

useSeoMeta({
  title: () => `${service.value!.title} | Drain-Flo`,
  description: () => service.value!.description,
});
</script>

<template>
  <ServicesWrapper>
    <h1 class="text-3xl font-bold mb-4">{{ service!.title }}</h1>

    <p
      v-for="(paragraph, idx) in service!.body"
      :key="idx"
      class="mb-4"
    >
      {{ paragraph }}
    </p>

    <ServicesCTA :service="service!" />
  </ServicesWrapper>
</template>
