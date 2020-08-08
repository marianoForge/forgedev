<template>
  <div class="main-container">
    <div class="info-box-container">
      <h2 v-if="error.statusCode === 404" v-html="$t('error.404')"></h2>
      <h2 v-else>Error</h2>
      <div class="info-box-wrapper text-center">
        <h3 v-if="error.statusCode === 404" v-html="$t('error.404-title')"></h3>
        <h4 v-if="error.statusCode === 404" v-html="$t('error.404-description')"></h4>
        <h3 v-else v-html="$t('error.all-error')"></h3>
        <nuxt-link to="/">{{ $t('error.error-btn') }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  transitions: "page",
};
</script>