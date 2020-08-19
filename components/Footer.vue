<template>
  <footer class="bg-white pt-20 pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full">
          <h2 class="text-blue text-center mb-4 lg:mb-7">Let’s get in touch</h2>
        </div>
        <div class="w-full lg:w-4/12"></div>
      </div>
      <!-- Social networks -->
      <social-networks />
      <!-- end Social networks -->
    </div>
  </footer>
</template>

<script>
import SocialNetworks from "~/components/Social-Networks.vue";

export default {
  components: {
    SocialNetworks,
  },
};
</script>
