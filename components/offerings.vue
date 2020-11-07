<template>
  <section class="bg-gray-100 py-10 px-4 lg:px-0 xl:px-0">
    <div class="max-w-5xl mx-auto space-y-8">
      <p class="text-center text-gray-800 text-xl font-bold">Our Offerings</p>
      <div class="w-20 mx-auto border-t-4 border-gray-800 my-4"></div>
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div class="space-y-2">
          <p class="text-center text-sm font-semibold text-blowhorn-cyan-dark">
            Seamless payments and GST-ready invoices
          </p>
          <div class="rounded-lg shadow-lg overflow-hidden">
            <img src="/payments.jpg" class="w-full h-auto" alt="Payments" />
            <ul class="p-4 space-y-2 h-32">
              <li
                v-for="(item, i) in paymentFeatures"
                :key="i"
                class="flex items-start space-x-2"
              >
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p class="text-sm">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-center text-sm font-semibold text-blowhorn-cyan-dark">
            Multi pick-up and drop-off points
          </p>
          <div class="rounded-lg shadow-lg overflow-hidden">
            <img src="/map.jpg" class="w-full h-auto" alt="Maps" />
            <ul class="p-4 space-y-2 h-32">
              <li
                v-for="(item, i) in locationFeatures"
                :key="i"
                class="flex items-start space-x-2"
              >
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p class="text-sm">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-center text-sm font-semibold text-blowhorn-cyan-dark">
            End-to-end visibility
          </p>
          <div class="rounded-lg shadow-lg overflow-hidden">
            <img src="/app.jpg" class="w-full h-auto" alt="App" />
            <ul class="p-4 space-y-2 h-32">
              <li
                v-for="(item, i) in appFeatures"
                :key="i"
                class="flex items-start space-x-2"
              >
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p class="text-sm">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paymentFeatures: ["Cash/Paytm", "Debit or credit card", "Net banking"],
      locationFeatures: [
        "Load and unload at different places on your way",
        "Hassle free route options",
      ],
      appFeatures: [
        "Track your vehicle on the app",
        "Get notified for every moment",
      ],
    };
  },
};
</script>

<style>
</style>