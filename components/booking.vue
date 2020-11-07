<template>
  <section class="max-w-6xl mx-auto px-4 lg:px-0 xl:px-0 space-y-4 py-8">
    <div class="">
      <button
        @click="selected = 'on-demand'"
        class="border-b-2 text-center py-2 focus:outline-none font-bold text-sm"
        :class="
          selected === 'on-demand'
            ? 'border-blowhorn-cyan text-blowhorn-cyan'
            : 'border-white text-white'
        "
      >
        On Demand Booking
      </button>
      <button
        @click="selected = 'enterprises'"
        class="border-b-2 text-center py-2 focus:outline-none ml-2 font-bold text-sm"
        :class="
          selected === 'enterprises'
            ? 'border-blowhorn-cyan text-blowhorn-cyan'
            : 'border-white text-white'
        "
      >
        For Enterprises
      </button>
    </div>
    <div class="py-8 text-white">
      <p class="text-4xl font-bold">Linking the world.</p>
      <p class="text-4xl font-bold">One city at a time!</p>
      <div class="text-xl lg:text-2xl xl:text-2xl">
        Disrupting logistics in
        <span class="text-blowhorn-cyan font-bold">{{
          cityRotate[count]
        }}</span>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <city-dropdown @selectedCity="setCity" />
      <div class="rounded-lg shadow bg-white flex items-center space-x-2 p-4">
        <span
          class="h-3 w-3 flex-shrink-0 bg-blue-500 rounded-full animate-pulse"
        ></span>
        <input
          type="text"
          v-model="pickup"
          placeholder="Pickup Area/Address"
          class="focus:outline-none w-full"
        />
      </div>
      <div class="rounded-lg shadow bg-white flex items-center space-x-2 p-4">
        <span
          class="h-3 w-3 flex-shrink-0 bg-green-500 rounded-full animate-pulse"
        ></span>
        <input
          type="text"
          v-model="dropoff"
          placeholder="Dropoff Area/Address"
          class="focus:outline-none w-full"
        />
      </div>
    </div>
    <button
      class="py-4 px-8 rounded-full font-bold mx-auto block bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    >
      Book My Truck
    </button>
    <svg
      class="animate-bounce w-5 h-5 text-white mx-auto"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
    <p class="text-center text-xs text-white">Scroll Down For More</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: "on-demand",
      count: 0,
      cityRotate: ["Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad"],
      pickup: null,
      dropoff: null,
      city: null,
    };
  },
  methods: {
    setCity(payload) {
      this.city = payload;
    },
  },
  mounted() {
    let self = this;
    setInterval(() => {
      if (self.count < 4) self.count++;
      else self.count = 0;
    }, 2000);
  },
};
</script>

<style>
</style>