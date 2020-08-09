<template>
  <header class="navbar">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 mr-6">
        <logo class="animation-traslate" />
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleShow"
          class="navbar-toggle flex"
          :class="{ collapsed: !isShowing }"
        >
          <span class="icon-wrapper">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </span>
        </button>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleShow"
          class="icn-hamb"
          :class="{ open: !isShowing }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
            <defs />
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M 10.5 12.9 L 10.5 15.6 L 0.7 15.6 L 0.7 12.9 L 10.5 12.9 Z M 20.3 6.7 L 20.3 9.4 L 0.7 9.4 L 0.7 6.7 L 20.3 6.7 Z M 20.3 0.4 L 20.3 3.1 L 0.7 3.1 L 0.7 0.4 L 20.3 0.4 Z"
            />
          </svg>
        </button>
      </div>
      <transition name="menu">
        <div
          class="w-full flex-grow lg:block lg:flex lg:items-center lg:w-auto"
          :class="{ open: !isShowing }"
        >
          <div class="text-sm lg:flex-grow lg:text-right">
            <a
              href="#index"
              class="block mt-4 text-center lg:inline-block text-white hover:text-white"
            >
              {{ $t("links.index") }}
            </a>
            <a
              href="#clients"
              class="block mt-4 text-center lg:inline-block text-white hover:text-white lg:ml-8 xl:ml-16"
            >
              {{ $t("links.clients") }}
            </a>
            <a
              href="#solutions"
              class="block mt-4 text-center lg:inline-block text-white hover:text-white lg:ml-8 xl:ml-16"
            >
              {{ $t("links.solutions") }}
            </a>
            <a
              href="#services"
              class="block mt-4 text-center lg:inline-block text-white hover:text-white lg:ml-8 xl:ml-16"
            >
              {{ $t("links.services") }}
            </a>
            <a
              href="#about-us"
              class="block mt-4 text-center lg:inline-block text-white hover:text-white lg:ml-8 xl:ml-16"
            >
              {{ $t("links.about") }}
            </a>
            <a
              href="#quote"
              class="block mt-4 text-center lg:inline-block btn btn-orange btn-shadow lg:ml-8 xl:ml-16"
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
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease-out;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
}
</style>
