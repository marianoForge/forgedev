<template>
  <div class="main-wrapper">
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

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
