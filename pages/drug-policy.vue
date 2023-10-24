<template>
  <div>
    <Header1 />
    <v-container>
      <v-row class="portfolio-row mb-20 pt-20">
        <h1 class="text-h1" style="margin-bottom: 10px">{{ title }}</h1>
        <!--desc -->
        <!-- <p v-html="desc"></p> -->
        <v-container style="width: 100%">
          <p>
            For this one, I worked with a research team from UP Manila. 
          </p>
          <p>
            Their research is on the characterization of drug policies for the countries in the Western Pacific Region. The Western Pacific Region includes Austrailia and the Pacific, Souteast Asia, and East Asia.
          </p>
          <p>
            Below you can find the characterization for Australia and the Pacific.
          </p>
        </v-container>
        <!-- <horizontal-scroll style="height: 60%"> -->
          <img
            src="@/assets/images/work/drugpolicy/AuP-Amphetamine_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Cannabis_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Cocaine_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Ecstasy_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Opiates_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Opioids_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/drugpolicy/AuP-Prescription_Opioids_WDataOnly.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
        <!-- </horizontal-scroll> -->

        <!--social -->

        <!--legend -->
        <!-- loop images -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "DrugPolicy",
  data() {
    return {
        title:"Drug Prevalence in Policies of the Western Pacific Region",
        desc:"",
        page:""
    };
  },
  methods: {
    buildImagePath: function (i) {
      return require("@/assets/images/work/toallthewomenoftheworld/dataPortrait_" +
        (i - 1) +
        "_processed.jpg");
    },
  },
  components: {
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
    HorizontalScroll,
  },
};
</script>
<style lang="scss" scoped>
.portfolio-card {
  border-radius: 0px !important;
  box-shadow: none !important;
}

.portfolio-row {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
</style>