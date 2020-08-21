<template>
  <footer class="bg-white pt-20 pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full">
          <h2 class="text-blue text-center mb-12 lg:mb-7">Let’s get in touch</h2>
        </div>
        <div class="w-full lg:w-4/12"></div>
      </div>
      <!-- Footer Nav -->
      <footer-nav />
      <!-- end Footer Nav-->
      <!-- Social networks -->
      <social-networks />
      <!-- end Social networks -->
      <div class="text-center mt-8">
        <p>201, Dev Arc, SG Road, Ahmedabad</p>
        <p>380015, Gujarat, India</p>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialNetworks from "~/components/Social-Networks.vue";
import FooterNav from "~/components/Footer-Nav.vue";
export default {
  components: {
    SocialNetworks,
    FooterNav
  }
};
</script>
