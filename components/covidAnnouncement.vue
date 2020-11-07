<template>
  <section class="py-4">
    <div class="max-w-6xl mx-auto bg-gray-800 text-white overflow-hidden">
      <div
        class="grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 hidden lg:grid xl:grid"
      >
        <div class="p-2 h-24" lazy-background="/covid-banner.jpg">
          <div class="border border-white h-full"></div>
        </div>
        <div class="flex h-full items-center justify-center">
          <p class="text-6xl uppercase font-bold">COVID-19</p>
        </div>
        <div
          class="flex h-full items-center justify-center p-4 border border-blowhorn-cyan"
        >
          <p class="text-xl font-semibold uppercase">The Blowhorn Frontline</p>
          <button
            class="bg-blowhorn-cyan text-white rounded text-sm font-semibold px-4 py-2"
          >
            Know More &amp; Donate
          </button>
        </div>
      </div>
      <div
        class="p-4 block lg:hidden xl:hidden space-y-2"
        lazy-background="/covid-banner.jpg"
      >
        <p class="text-xl text-center font-semibold uppercase">
          The Blowhorn Frontline
        </p>
        <button class="w-full block bg-blowhorn-cyan py-2 rounded">
          Know More &amp; Donate
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>