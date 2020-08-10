<template>
  <div class="container mx-auto px-4">
    <span v-html="$t('index.title')"></span>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t("index.title") };
  },
  transition: "page",
};
</script>
