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
            One of the most remarkable projects that I have been a part of was PHL-Microsat, which paved the way for the establishment of the Philippine Space Agency. The PHL-Microsat project was a collaborative effort between the Philippines and Japan to develop and launch the first Filipino-made microsatellite, Diwata-1, into orbit. 
          </p>
          <p>
            I worked on two platforms for the PHL-Microsat project: the Satellite Tracker and the Image Request and Distribution. The Satellite Tracker was a web-based application that displayed the semi-realtime position and trajectory of Diwata-1. This was essential for ground operations and image capture activities, as it showed when and where Diwata-1 could communicate with the ground station and take images of specific areas.
          </p>
          <img
            src="@/assets/images/portfolio/projects/dTracker.png"
            class="img-fluid about-me-img"
            alt=""
          />
        </v-container>
        <!-- <horizontal-scroll style="height: 60%"> -->
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
  name: "DiwataTracker",
  data() {
    return {
        title:"Diwata-1 Tracker",
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