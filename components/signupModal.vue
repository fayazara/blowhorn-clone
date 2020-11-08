<template>
  <modal
    name="sign-up"
    :width="400"
    :height="'auto'"
    scrollable
    @opened="opened"
    focusTrap
  >
    <div class="overflow-hidden relative p-6 bg-gray-800 text-white">
      <button @click="close" class="absolute top-0 right-0 m-2">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="space-y-4">
        <img
          src="https://blowhorn.com/static/website/images/blowhorn/logo/LogoDark@2x.a5088e73be35.png"
          class="mx-auto"
          alt="Blowhorn Logo"
        />
        <p class="text-xl text-center">Sign up for a Blowhorn account</p>
        <form @submit.prevent="signUp" class="space-y-2">
          <input
            ref="name"
            type="text"
            required
            v-model="user.name"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="NAME"
          />
          <input
            type="email"
            required
            v-model="user.email"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="EMAIL"
          />
          <input
            type="password"
            required
            v-model="user.password"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="PASSWORD"
          />
          <input
            type="tel"
            required
            pattern="^[1-9][0-9]{9}"
            title="10 Digit Indian Number"
            v-model="user.mobile"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="MOBILE"
          />
          <div class="flex my-4 justify-center">
            <label class="flex items-center">
              <input
                v-model="isBusiness"
                type="checkbox"
                class="form-checkbox"
              />
              <span class="ml-2 text-xl">I am a business user</span>
            </label>
          </div>

          <input
            v-if="isBusiness"
            type="text"
            required
            v-model="user.company"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="COMPANY NAME"
          />
          <input
            v-if="isBusiness"
            type="text"
            v-model="user.gstin"
            class="p-3 w-full rounded bg-gray-700"
            placeholder="GSTIN (OPTIONAL)"
          />

          <label class="flex items-center">
            <input
              v-model="agreedToTnc"
              type="checkbox"
              class="form-checkbox"
            />
            <span class="ml-2 text-xs"
              >I agree to the
              <span class="underline">Terms of Service</span> and
              <span class="underline">Privacy Policy</span></span
            >
          </label>
          <button
            :class="loading ? 'opacity-50 cursor-not-allowed' : null"
            :disabled="loading"
            class="p-3 bg-blowhorn-cyan text-gray-800 uppercase tracking-widest font-bold w-full rounded flex items-center justify-center"
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
            Proceed
          </button>
          <p class="text-center">or sign up with</p>
          <div class="grid grid-cols-2 gap-3">
            <button
              type="button"
              class="p-3 flex items-center justify-center bg-fb text-white space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798 c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771 l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z"
                ></path>
              </svg>
              <span>Facebook</span>
            </button>
            <button
              type="button"
              class="p-3 flex items-center justify-center bg-google text-white space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28 c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233 c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934 C20.485,11.453,20.404,10.884,20.283,10.356z"
                ></path>
              </svg>
              <span>Google</span>
            </button>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span>Already have an account?</span>
            <button @click="login" type="button" class="text-blowhorn-cyan">Login</button>
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>



<script>
export default {
  name: "signUp",
  data() {
    return {
      isBusiness: false,
      agreedToTnc: false,
      loading: false,
      user: {
        name: null,
        mobile: null,
        email: null,
        password: null,
        company: null,
        gstin: null,
      },
    };
  },
  methods: {
    async signUp() {
      try {
        this.loading = true;
        const { data } = await this.$axios.post("/api/signup", this.user);
        this.$toast.success(data.details);
        this.$modal.hide("sign-up");
      } catch (err) {
        this.loading = false;
        this.$toast.error(err);
      }
    },
    close() {
      this.loading = null;
      this.$modal.hide("sign-up");
    },
    login() {
      this.$modal.hide("sign-up");
      this.$modal.show("login");
    },
    opened() {
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
</style>