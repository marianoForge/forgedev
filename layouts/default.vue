<template>
  <div class="main-wrapper">
    <topnav />
    <Nuxt />
    <Socialnetworks />
  </div>
</template>

<script>
import Topnav from "~/components/Top-Nav.vue";
import Socialnetworks from "~/components/Social-Networks.vue";

export default {
  components: {
    Topnav,
    Socialnetworks,
  },
};
</script>
