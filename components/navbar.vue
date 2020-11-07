<template>
  <header class="py-6 px-4 lg:px-0 xl:px-0 text-white relative">
    <nav class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Freebee Logo And Home Page Link Start -->
      <div class="flex items-center space-x-2">
        <!-- Mobile Hanburger Button Start-->
        <button @click="openMobileMenu" class="block lg:hidden xl:hidden">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <!-- Mobile Hanburger Button End-->
        <nuxt-link to="/">
          <img src="/logo.png" class="h-8 w-auto" alt="Freebee Logo" />
        </nuxt-link>
      </div>
      <!-- Freebee Logo And Home Page Link End -->
      <!-- Desktop Menu Buttons Start-->
      <div class="hidden lg:block xl:block">
        <ul class="space-x-4 flex items-center">
          <li>
            <a
              href="#"
              class="font-semibold h-10 text-sm flex items-center rounded-lg px-2"
            >
              API Docs
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-semibold h-10 text-sm flex items-center rounded-lg px-2"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-semibold h-10 text-sm flex items-center rounded-lg px-2"
              >Contact</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-semibold h-10 text-sm flex items-center rounded-lg px-2"
              >Track Booking</a
            >
          </li>
          <li>
            <button
              @click="showLoginModal"
              class="font-semibold h-10 text-sm flex items-center rounded-lg px-2"
            >
              Login
            </button>
          </li>
          <li>
            <button
              @click="showSignupModal"
              class="font-semibold h-8 text-sm flex items-center rounded-full border-2 border-white px-4"
            >
              SIGN UP
            </button>
          </li>
          <li>
            <button
              class="font-semibold space-x-2 h-10 text-xs flex items-center rounded-full px-2"
            >
              <img src="/get-app.png" alt="Get Mobile App" />
              <p>Get the app</p>
            </button>
          </li>
        </ul>
      </div>
      <!-- Desktop Menu Buttons End-->
      <!-- Mobile Signup Button Start-->
      <button
        @click="showSignupModal"
        class="lg:hidden xl:hidden font-semibold h-10 text-xs flex items-center rounded-full border-2 border-white px-4"
      >
        SIGN UP
      </button>
      <!-- Mobile Signup Button End-->
    </nav>
    <!-- Mobile Navigation Drawer Start-->
    <div>
      <div
        v-if="mobileMenu"
        @click="closeMobileMenu"
        class="absolute top-0 bg-gray-900 opacity-75 left-0 h-screen w-full z-20"
      ></div>
      <transition
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="mobileMenu"
          class="z-50 min-h-screen w-64 max-w-xl absolute top-0 left-0 py-8 bg-gray-900"
        >
          <ul class="h-screen overflow-y-scroll text-white text-sm">
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 block text-xl"
              >
                API Docs
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 block text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 block text-xl"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 block text-xl"
              >
                Newsroon
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 block text-xl"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.native="closeMobileMenu"
                class="p-4 text-xl flex items-center space-x-2"
              >
                <img src="/get-app.png" alt="Get Mobile App" />
                <p>Get the app</p>
              </a>
            </li>
          </ul>
        </aside>
      </transition>
    </div>
    <!-- Mobile Navigation Drawer End-->
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
    showSignupModal() {
      this.$modal.show("sign-up");
    },
    showLoginModal() {
      this.$modal.show("login");
    },
    closeMobileMenu() {
      this.mobileMenu = false;
    },
    openMobileMenu() {
      this.mobileMenu = true;
    },
  },
  watch: {
    mobileMenu: {
      immediate: true,
      handler(mobileMenu) {
        if (process.client) {
          if (mobileMenu) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
};
</script>

<style>
</style>