<script
  setup
  lang="ts"
>
useSeoMeta({
  title: "Terms of Service | Drain-Flo",
  description: "Terms of service for Drain-Flo.",
});
</script>

<template>
  <main class="min-h-screen w-full">
    <section class="py-20 border-y-2 bg-flo-50">
      <UContainer class="max-w-4xl">
        <h1 class="text-3xl font-bold">Terms of Service</h1>
        <p class="mt-3 text-gray-700">
          These Terms of Service govern your use of this website. By using the site, you agree to these terms.
        </p>

        <div class="mt-10 space-y-8 text-gray-700">
          <section>
            <h2 class="text-xl font-bold text-stone-900">Use of the Site</h2>
            <p class="mt-2">
              You may use this site for lawful purposes only. Do not attempt to disrupt, damage, or gain unauthorized
              access to the site or its systems.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-stone-900">No Professional Advice</h2>
            <p class="mt-2">
              Content on this site is provided for general information only and may not be complete or up to date.
              Contact us directly for service availability, pricing, and scheduling.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-stone-900">Links to Third Parties</h2>
            <p class="mt-2">
              This site may link to third-party websites (such as review platforms). We are not responsible for their
              content or practices.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-stone-900">Limitation of Liability</h2>
            <p class="mt-2">
              To the extent permitted by law, we are not liable for any damages arising from your use of this site.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-stone-900">Changes</h2>
            <p class="mt-2">
              We may update these terms from time to time. Updates will be posted on this page.
            </p>
          </section>
          <UButton
            href="/contact"
            variant="solid"
          >
            Contact Us
          </UButton>
        </div>
      </UContainer>
    </section>
  </main>
</template>

<style scoped></style>
