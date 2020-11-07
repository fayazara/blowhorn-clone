<template>
  <section class="bg-gray-200 py-12 px-4 lg:px-0 xl:px-0">
    <div class="max-w-5xl mx-auto space-y-8">
      <p class="text-center text-gray-800 text-xl font-bold">
        Get the moving help you need
      </p>
      <div class="w-20 mx-auto border-t-4 border-gray-800"></div>
      <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div v-for="(feature, i) in features" :key="i">
          <img
            :src="feature.img"
            class="h-10 w-auto m-2 mx-auto mb-2"
            alt="Blowhorn"
          />
          <p class="text-center text-xl">{{ feature.title }}</p>
        </div>
      </div>
      <p class="text-center">
        . . . and much more. Connect the missing pieces of your logistics needs
        with Blowhorn!
      </p>
      <div class="text-center">
        <a
          href="#top"
          class="py-4 px-8 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Beverages",
          img:
            "https://blowhorn.com/static/website/images/homepage/beverages.png",
        },
        {
          title: "Hyperlocal Deliveries",
          img:
            "https://blowhorn.com/static/website/images/homepage/hyperlocal.png",
        },
        {
          title: "Groceries",
          img:
            "https://blowhorn.com/static/website/images/homepage/groceries.png",
        },
        {
          title: "Agricultural produce",
          img: "https://blowhorn.com/static/website/images/homepage/farm.png",
        },
        {
          title: "Pharmaceuticals",
          img:
            "https://blowhorn.com/static/website/images/homepage/medicine.png",
        },
        {
          title: "Sports goods",
          img: "https://blowhorn.com/static/website/images/homepage/sports.png",
        },
        {
          title: "Industrial machinery",
          img:
            "https://blowhorn.com/static/website/images/homepage/industrial.png",
        },
        {
          title: "House relocation",
          img: "https://blowhorn.com/static/website/images/homepage/sofa.png",
        },
      ],
    };
  },
};
</script>
