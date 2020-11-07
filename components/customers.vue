<template>
  <section class="bg-whtie py-10 px-4 lg:px-0 xl:px-0">
    <div class="max-w-5xl mx-auto space-y-6">
      <p class="text-center text-gray-800 text-xl font-bold">
        Customers who trust us a truck load
      </p>
      <div class="w-20 mx-auto border-t-4 border-gray-800"></div>
      <div class="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        <img
          v-for="(customer, i) in customers"
          :key="i"
          :src="customer"
          class="h-6 w-auto m-2 mx-auto"
          alt="Blowhorn"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/reliancedig@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/zero@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/rivigo@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/xiaomi@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/quikr@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/rentickle@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/ninja@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/gati@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/furlenko@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/fedex@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/bisleri@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/amazon@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/biocon@2x.png",
        "https://blowhorn.com/static/website/images/blowhorn/homepage/brands/flip.png",
      ],
    };
  },
};
</script>
