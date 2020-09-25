<template>
  <div class="main-content">
    <!-- SLIDER / MAIN IMAGE -->
    <section class="section--slider__wrapper lg:mb-40" id="index">
      <div class="container mx-auto px-4">
        <div class="flex mb-4">
          <div class="w-full md:w-6/12">
            <!-- SLIDER -->
            <Slider />
            <!-- END SLIDER -->
          </div>
          <div class="w-6/12">
            <img
              src="~/assets/images/forge-main-image.svg"
              alt="We Create Solutions - Forge"
              class="md:w-4/12 w-full relative md:absolute right-0"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- END SLIDER / MAIN IMAGE -->
    <!-- CLIENTS -->
    <section class="section--clients__wrapper lg:mb-40" id="clients">
      <div class="container mx-auto px-4">
        <h3 class="mb-10 text-white text-center font-bold" data-aos="fade-up">
          {{ $t("index.title-clients") }}
        </h3>
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
    <!--  SOLUTIONS -->
    <section class="section--solutions__wrapper lg:mb-40" id="solutions">
      <div class="container mx-auto px-4">
        <!-- Solutions 01 -->
        <div class="flex items-center">
          <div
            class="w-full mb-6 lg:w-3/6 px-10 text-center solution--wrapper yellow"
            data-aos="fade-right"
          >
            <img
              src="~/assets/images/service-01.svg"
              class="mx-auto w-10/12 shadow-svg"
              alt="Solutions 01"
            />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white font-bold" data-aos="fade-left">
              We help brands
              <span class="text-secondary">build</span> websites that
              communicate clearly, stand out, and
              <span class="text-secondary">sell more.</span>
            </h3>
          </div>
        </div>
        <!-- End Solutions 01 -->
        <!-- Solutions 02 -->
        <div class="flex items-center lg:flex-row-reverse">
          <div
            class="w-full mb-6 lg:w-3/6 px-10 text-center solution--wrapper dark-grey"
            data-aos="fade-left"
          >
            <img
              src="~/assets/images/service-iphone-01.svg"
              class="mx-auto shadow-svg"
              alt="Solutions 02"
            />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white font-bold" data-aos="fade-right">
              We help brands
              <span class="text-secondary">grow</span> sales and
              <span class="text-secondary">conversion</span> rates with data
              driven, user centered design.
            </h3>
          </div>
        </div>
        <!-- End Solutions 02 -->
        <!-- Solutions 03 -->
        <div class="flex items-center">
          <div
            class="w-full mb-6 lg:w-3/6 px-10 text-center solution--wrapper secondary"
            data-aos="fade-right"
          >
            <img
              src="~/assets/images/service-macbook-01.svg"
              class="mx-auto shadow-svg"
              alt="Solutions 03"
            />
          </div>
          <div class="w-full mb-6 lg:w-3/6 px-6">
            <h3 class="text-white font-bold" data-aos="fade-left">
              We help brands
              <span class="text-secondary font-bold">build</span> websites that
              communicate clearly, stand out, and
              <span class="text-secondary">sell more.</span>
            </h3>
          </div>
        </div>
        <!-- End Solutions 03 -->
      </div>
    </section>
    <!-- END SOLUTIONS -->
    <!-- SERVICES -->
    <section class="section--clients__wrapper lg:mb-40" id="clients">
      <div class="container mx-auto px-4">
        <h3 class="mb-20 text-white text-center font-bold" data-aos="fade-up">
          {{ $t("index.title-services") }}
        </h3>
        <div class="flex flex-wrap items-center">
          <UXDesign />
          <WebDev />
          <Mobile />
          <Backend />
          <DevOps />
          <QA />
        </div>
      </div>
    </section>
    <!-- END SERVICES -->
    <!-- TIME -->
    <section class="section--timezone__wrapper lg:mb-40" id="timezone">
      <div class="container mx-auto px-4">
        <h3 class="mb-16 text-white text-center font-bold" data-aos="fade-up">
          {{ $t("index.title-timezone") }}
        </h3>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-10/12 mx-auto">
            <div class="flex flex-wrap">
              <!-- USA TIME -->
              <div class="w-full lg:w-4/12 mb-6 text-center">
                <Clock
                  time="10:30:00"
                  color="red"
                  data-aos="fade-right"
                  class="mb-6"
                />
                <h4 class="text-white font-bold">USA</h4>
                <p class="text-white font-thin">
                  499, N. Canon Drive, Suite 215
                </p>
                <p class="text-white font-thin">Beverly Hills CA 90210 USA</p>
              </div>
              <!-- ARGENTINA TIME -->
              <div class="w-full lg:w-4/12 mb-6 text-center">
                <Clock color="orange" data-aos="fade-up" class="mb-6" />
                <h4 class="text-white font-bold">ARGENTINA</h4>
                <p class="text-white font-thin">
                  499, N. Canon Drive, Suite 215
                </p>
                <p class="text-white font-thin">Beverly Hills CA 90210 USA</p>
              </div>
              <!-- COSTA RICA -->
              <div class="w-full lg:w-4/12 mb-6 text-center">
                <Clock color="yellow" data-aos="fade-left" class="mb-6" />
                <h4 class="text-white font-bold">COSTA RICA</h4>
                <p class="text-white font-thin">
                  499, N. Canon Drive, Suite 215
                </p>
                <p class="text-white font-thin">Beverly Hills CA 90210 USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END TIME -->
    <!-- FORM -->
    <section class="section--clients__wrapper lg:mb-40" id="quote">
      <div class="container mx-auto px-4">
        <h3 class="mb-10 text-white text-center font-bold" data-aos="fade-up">
          {{ $t("index.title-form") }}
        </h3>
        <div class="w-full lg:w-7/12 mx-auto">
          <Form data-aos="fade-up" />
        </div>
      </div>
    </section>
    <!-- END FORM -->
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
import Clock from "~/components/Clock.vue";
import Form from "~/components/Form.vue";
import UXDesign from "~/components/forgeServices/UXDesign.vue";
import WebDev from "~/components/forgeServices/WebDevelopment.vue";
import Mobile from "~/components/forgeServices/Mobile.vue";
import Backend from "~/components/forgeServices/Backend.vue";
import DevOps from "~/components/forgeServices/DevOps.vue";
import QA from "~/components/forgeServices/QA.vue";
export default {
  components: {
    Slider,
    Clock,
    Form,
    UXDesign,
    WebDev,
    Mobile,
    Backend,
    DevOps,
    QA,
  },
  head() {
    return { title: this.$t("index.title") };
  },
  transition: "page",
};
</script>
