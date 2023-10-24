<template>
  <div>
    <Header1 />
    <v-container>
      <v-row class="portfolio-row mb-20 pt-20">
        <h1 class="text-h1" style="margin-bottom: 10px">{{ title }}</h1>
        <!--desc -->
        <!-- <p v-html="desc"></p> -->
        <div style="width: 100%">
          <p>
            Is it to enjoy? Is it to help an organization? Is it to share a
            message or to build your #portfolio while you're improving your
            skills?
          </p>
          <p>
            Data Visualization Society's State of the Industry Survey asked
            about personal visualizations and what motivates you to make them.
          </p>
          <p>
            For me, aside from sharing a message, it's personal enjoyment.
            Nothing beats the things you enjoy doing.
          </p>
        </div>
        <!-- <h2 class="text-h2" style="width:100%">
                <a href="https://www.instagram.com/toallthewomenoftheworld/?hl=en">
                <i class="mdi mdi-instagram"></i>
                </a>
            </h2> -->
        <!-- <iframe width="600" height="600" src="https://www.youtube.com/embed/6UxfMcdxQ5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <panZoom
          :options="{
            minZoom: 1,
            maxZoom: 3,
            bounds: true,
            boundsPadding: 0.1,
          }"
        >
          <img
            src="@/assets/images/work/whydowevisualizedata/horizontal.png"
            class="img-fluid about-me-img"
            style="margin-top: 10px; margin-bottom: 10px; width: 100%"
            alt=""
          />
        </panZoom>

        <horizontal-scroll style="height: 60%">
          <img
            src="@/assets/images/work/whydowevisualizedata/slice1.png"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice2.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice3.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice4.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice5.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice6.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
          <img
            src="@/assets/images/work/whydowevisualizedata/slice7.jpg"
            class="img-fluid about-me-img"
            alt=""
          />
        </horizontal-scroll>

        <!--social -->

        <!--legend -->
        <!-- loop images -->
      </v-row>

      <!-- <v-row class="portfolio-row mt-20 pt-20">
            <h2 class="text-h2" style="margin-top:20px;margin-bottom:10px;width:100%;">Generated cards</h2>
            <v-col v-for="i in 72" :key="i" class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  :src="buildImagePath(i)"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
            </v-card>
          </v-col>
        </v-row> -->
    </v-container>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "WhyDoWeVisualizeData",
  data() {
    return {
      title: "Why do we visualize data?",
      desc: "<p>Awesome women shared their thoughts about #iwd2022, gender bias, and empowering each other.<br>#BreakTheBias, the official hashtag for this year's International Women's Month, is a call for everyone to join hands and work together to shape a world that is safe, inclusive, and free from biases and discrimination. </p>",
      page: "",
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