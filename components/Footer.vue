<template>
  <footer class="bg-white pt-20 pb-20">
    <div class="container mx-auto">
      <!-- Social networks -->
      <social-networks />
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
