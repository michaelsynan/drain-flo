<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <NuxtRouteAnnouncer />
      <header>
        <SharedNav />
      </header>
      <main class="flex-1 flex flex-col">
        <NuxtPage />
      </main>
      <footer>
        <SharedFooter />
      </footer>
    </div>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>