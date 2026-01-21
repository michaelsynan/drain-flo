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

const legacySlugRedirects: Record<string, string> = {
  excavation: "sewer-excavation",
};

const service = computed(() => services.find((s) => s.slug === slug.value));

type ServiceCardItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
};

const otherServices = computed<ServiceCardItem[]>(() => {
  return services
    .filter((s) => s.slug !== slug.value)
    .map((s) => ({
      id: s.slug,
      title: s.title,
      description: s.description,
      link: `/services/${s.slug}`,
      featured: s.featured,
    }))
    .slice(0, 4);
});

const heroImage = computed(() => service.value?.image ?? "drain-flo.jpg");

if (!service.value) {
  const next = legacySlugRedirects[slug.value];
  if (next) {
    await navigateTo(`/services/${next}`, { redirectCode: 301 });
  }
  throw createError({ statusCode: 404, statusMessage: "Service not found" });
}

useSeoMeta({
  title: () => `${service.value!.title} | Drain-Flo`,
  description: () => service.value!.description,
});
</script>

<template>
  <ServicesWrapper>
    <div class="relative mb-12 overflow-hidden rounded-lg border-2 border-stone-900">
      <NuxtImg
        :src="`/${heroImage}`"
        :alt="service!.title"
        class="aspect-[16/9] w-full object-cover"
      />

      <div class="absolute inset-x-0 bottom-0 bg-white/85 px-4 py-3 sm:px-6 sm:py-4 border-t-2 border-stone-900">
        <h1 class="text-2xl sm:text-3xl font-bold text-stone-950 leading-tight !pb-0 !mb-0">
          {{ service!.title }} in Duryea & Across NEPA
        </h1>
      </div>
    </div>

    <section
      v-if="service!.bullets?.length"
      class="mb-8 rounded-lg border-2 border-stone-900 bg-flo-100 p-6"
    >
      <h2 class="text-xl font-bold mb-4">What we can help with</h2>
      <ul class="space-y-4">
        <li
          v-for="(bullet, idx) in service!.bullets"
          :key="idx"
          class="flex items-center gap-3"
        >
          <UIcon
            name="i-mdi-star-circle"
            class="h-6 w-6 shrink-0 text-wrench-500"
          />
          <span class="text-lg text-stone-800">{{ bullet }}</span>
        </li>
      </ul>
    </section>

    <p
      v-for="(paragraph, idx) in service!.body"
      :key="idx"
      class="mb-4"
    >
      {{ paragraph }}
    </p>

    <ServicesCTA :service="service!" />

    <section
      v-if="otherServices.length"
      class="mt-16 mb-20"
    >
      <h2 class="text-2xl font-bold text-center !mb-12 pt-10">Looking for Other Services?</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="item in otherServices"
          :key="item.id"
          :to="item.link"
          class="rounded-lg border-2 border-stone-800 bg-drain-100 shadow-sm p-6 flex flex-col"
        >
          <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 mb-4">{{ item.description }}</p>
          <span
            class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-tertiary-500 px-4 py-2 text-sm font-bold text-black md:w-fit"
          >
            Learn more
            <UIcon
              name="i-mdi-arrow-right"
              class="h-5 w-5"
            />
          </span>
        </NuxtLink>
      </div>
    </section>
  </ServicesWrapper>
</template>
