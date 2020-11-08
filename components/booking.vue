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
          v-model="booking.pickup"
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
          v-model="booking.dropoff"
          placeholder="Dropoff Area/Address"
          class="focus:outline-none w-full"
        />
      </div>
    </div>
    <button
      :class="loading ? 'opacity-50 cursor-not-allowed' : null"
      :disabled="loading"
      @click="bookTruck"
      class="py-4 px-8 rounded-full font-bold mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center"
    >
      <svg
        v-if="loading"
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span> Book My Truck </span>
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
      loading: false,
      selected: "on-demand",
      count: 0,
      cityRotate: ["Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad"],
      booking: {
        pickup: null,
        dropoff: null,
        city: null,
      },
    };
  },
  methods: {
    setCity(payload) {
      this.booking.city = payload;
    },
    async bookTruck() {
      try {
        if (this.booking.city && this.booking.pickup && this.booking.dropoff) {
          this.loading = true;
          const { data } = await this.$axios.post("/api/book", this.booking);
          this.$toast.success(data.details);
          this.loading = false;
        } else throw "Please enter all the fields";
      } catch (err) {
        this.loading = false;
        this.$toast.error(err);
      }
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