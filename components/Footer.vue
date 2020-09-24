<template>
  <footer class="bg-white pt-20 pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full">
          <h3 class="text-primary font-bold text-center mb-16 lg:mb-7">
            {{ $t("footer.title-footer") }}
          </h3>
        </div>
      </div>
      <!-- Footer Nav -->
      <footer-nav />
      <!-- end Footer Nav-->
      <!-- Social networks -->
      <social-networks />
      <!-- end Social networks -->
      <div class="text-center">
        <p class="font-thin">201, Dev Arc, SG Road, Ahmedabad</p>
        <p class="font-thin">380015, Gujarat, India</p>
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
    FooterNav,
  },
};
</script>
