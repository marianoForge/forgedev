<template>
  <div class="main-wrapper pt-24">
    <!-- Header-->
    <Header />
    <!-- End Header-->
    <Nuxt />
    <!-- Footer-->
    <Footer />
    <!-- End Footer-->
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import AOS from "aos/dist/aos.js";

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    AOS.init();
  },
};
</script>
