<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-6/12 px-2 mb-4">
      <input type="text" :placeholder="$t('form.yourName')" class="w-full bg-white p-3" />
    </div>
    <div class="w-full lg:w-6/12 px-2 mb-4">
      <input type="email" :placeholder="$t('form.yourEmail')" class="w-full bg-white p-3" />
    </div>
    <div class="w-full lg:w-6/12 px-2 mb-4">
      <input type="phone" :placeholder="$t('form.yourPhone')" class="w-full bg-white p-3" />
    </div>
    <div class="w-full lg:w-6/12 px-2 mb-4">
      <input type="text" :placeholder="$t('form.subject')" class="w-full bg-white p-3" />
    </div>
    <div class="w-full px-2 mb-4">
      <textarea :placeholder="$t('form.message')" class="w-full bg-white p-3" rows="5"></textarea>
    </div>
    <div class="w-full flex flex-wrap items-center">
      <div class="w-full lg:w-9/12 px-2">
        <p class="text-white">{{ $t('form.error') }}</p>
      </div>
      <div class="w-full lg:w-3/12 px-2">
        <a
          href="#quote"
          class="block w-full mt-4 lg:mt-0 text-center lg:inline-block btn btn-orange btn-shadow"
        >{{ $t("form.submit") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

