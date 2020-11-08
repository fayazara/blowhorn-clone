<template>
  <div class="relative text-gray-800" v-on-clickaway="closeMenu">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center rounded-lg shadow bg-white justify-between w-full p-4 focus:outline-none focus:bg-gray-100"
    >
      <div class="flex items-center space-x-2">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>{{ selectedCity }}</span>
      </div>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 translate -translate-y-1 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 translate-y-1 scale-95"
    >
      <ul
        v-if="isOpen"
        class="divide-y rounded-lg bg-white absolute mt-2 left-0 w-full shadow-lg z-20 overflow-hidden"
      >
        <li v-for="(city, i) in cities" :key="i">
          <button
            @click="setCity(city)"
            class="p-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white"
          >
            {{ city }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";

export default {
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
      isOpen: false,
      selectedCity: "Location",
      cities: ["Bangalore", "Chennai", "Mumbai", "Hyderabad", "Delhi NCR"],
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
    setCity(city) {
      this.isOpen = false;
      this.selectedCity = city;
      this.$emit("selectedCity", city);
    },
  },
};
</script>

<style>
</style>