<template>
  <header class="navbar p-3">
    <nav class="flex items-center justify-between flex-wrap px-3">
      <div class="flex items-center flex-shrink-0 mr-6">
        <logo data-aos="fade-up" />
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleShow"
          class="navbar-toggle flex outline-none"
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
      <transition name="menu">
        <div
          data-aos="fade-left"
          class="w-full flex-grow lg:block lg:flex lg:items-center lg:w-auto header--menu__wrapper"
          :class="{ open: isShowing }"
        >
          <div class="text-md w-full lg:flex-grow lg:text-right header--menu_items lg:space-x-16">
            <a
              href="#index"
              class="block text-center text-white mt-4 hover:text-primary lg:mt-0 lg:inline-block"
            >{{ $t("links.index") }}</a>
            <a
              href="#clients"
              class="block text-center text-white mt-4 hover:text-primary lg:mt-0 lg:inline-block"
            >{{ $t("links.clients") }}</a>
            <a
              href="#solutions"
              class="block text-center text-white mt-4 hover:text-primary lg:mt-0 lg:inline-block"
            >{{ $t("links.solutions") }}</a>
            <a
              href="#services"
              class="block text-center text-white mt-4 hover:text-primary lg:mt-0 lg:inline-block"
            >{{ $t("links.services") }}</a>
            <a
              href="#about-us"
              class="block text-center text-white mt-4 hover:text-primary lg:mt-0 lg:inline-block"
            >{{ $t("links.about") }}</a>
            <a
              href="#quote"
              class="block mt-4 lg:mt-0 text-center lg:inline-block btn btn-orange btn-shadow"
            >{{ $t("links.quote") }}</a>
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
  data: function () {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow: function () {
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
