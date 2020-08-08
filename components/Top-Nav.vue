<template>
  <header class="navbar">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <logo class="animation-traslate" />
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleShow"
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          :class="{ collapsed: !isShowing }"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <transition name="menu">
        <div class="w-full block flex-grow lg:flex lg:items-ends">
          <div class="text-sm lg:flex-grow">
            <a
              href="#index"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {{ $t("links.index") }}
            </a>
            <a
              href="#clients"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {{ $t("links.clients") }}
            </a>
            <a
              href="#solutions"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              {{ $t("links.solutions") }}
            </a>
            <a
              href="#services"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              {{ $t("links.services") }}
            </a>
            <a
              href="#about-us"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              {{ $t("links.about") }}
            </a>
            <a
              href="#quote"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              {{ $t("links.quote") }}
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo,
  },
  data: function() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow: function() {
      this.isShowing = !this.isShowing;
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
