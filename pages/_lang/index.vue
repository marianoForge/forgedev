<template>
  <div class="main-content">
    <!-- SLIDER / MAIN IMAGE -->
    <section class="section--slider__wrapper lg:mb-40" id="index">
      <div class="container mx-auto px-4">
        <div class="flex mb-4">
          <div class="w-6/12">
            <!-- SLIDER -->
            <Slider />
            <!-- END SLIDER -->
          </div>
          <div class="w-6/12">
            <img src="~/assets/images/forge-main-image.svg" alt="We Create Solutions - Forge" />
          </div>
        </div>
      </div>
    </section>
    <!-- END SLIDER / MAIN IMAGE -->
    <!-- CLIENTS -->
    <section class="section--clients__wrapper lg:mb-40" id="clients">
      <div class="container mx-auto px-4">
        <h3 class="mb-10 text-white text-center" data-aos="fade-up">{{ $t('index.title-clients')}}</h3>
        <div class="flex flex-wrap items-center">
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/intel-white.svg"
              alt="Intel"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/state-farm-white.svg"
              alt="StateFarn"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/univision-white.svg"
              alt="Univision"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/rauxa-white.svg"
              alt="Rauxa"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/express-white.svg"
              alt="Express"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/cracked-white.svg"
              alt="Cracked.com"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/sabino-white.svg"
              alt="Sabino"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/four-points-white.svg"
              alt="Four Points"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/the-mls-white.svg"
              alt="The MLS"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <div class="w-3/6 md:w-1/3 mb-16 lg:w-1/5 px-4">
            <img
              src="~/assets/images/vicentin-white.svg"
              alt="Vicentin - Family Wines"
              class="mx-auto"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- END CLIENTS -->
    <!--  SERVICES -->
    <section class="section--clients__wrapper" id="services">
      <div class="container mx-auto px-4">
        <!-- Service 01 -->
        <div class="flex items-center">
          <div class="w-full mb-6 lg:w-3/6 px-10 text-center">
            <img src="~/assets/images/service-01.svg" alt />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white">
              We help brands
              <span class="text-secondary">build</span> websites that communicate clearly, stand out, and
              <span
                class="text-secondary"
              >sell more.</span>
            </h3>
          </div>
        </div>
        <!-- End Service 01 -->
        <!-- Service 02 -->
        <div class="flex items-center lg:flex-row-reverse">
          <div class="w-full mb-6 lg:w-3/6 px-10 text-center">
            <img src="~/assets/images/service-iphone-01.svg" alt="Services 02" />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white">
              We help brands
              <span class="text-secondary">grow</span> sales and
              <span class="text-secondary">conversion</span> rates with data driven, user centered design.
            </h3>
          </div>
        </div>
        <!-- End Service 02 -->
        <!-- Service 03 -->
        <div class="flex items-center">
          <div class="w-full mb-6 lg:w-3/6 px-10 text-center">
            <img src="~/assets/images/service-macbook-01.svg" alt />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white">
              We help brands
              <span class="text-secondary">build</span> websites that communicate clearly, stand out, and
              <span
                class="text-secondary"
              >sell more.</span>
            </h3>
          </div>
        </div>
        <!-- End Service 03 -->
      </div>
    </section>
    <!-- END SERVICES -->
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
export default {
  components: {
    Slider,
  },
  head() {
    return { title: this.$t("index.title") };
  },
  transition: "page",
};
</script>
