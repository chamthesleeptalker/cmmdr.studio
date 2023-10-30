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
            Last May, we were invited to join MapaTalks Vol.1 at the De La Salle University. We are joined with 15-20 mappers sharing about their projects and learning more about mapping.
          </p>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/20230527_140515.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/DJI_0350.JPG"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <p>
          Here we shared about what the inspiration behind the Ausome Maps projects, what we want to achieve and what more needs to be done.
        </p>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/DJI_0357.JPG"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <p>
          We learned about some technologies that we want to incorporate with the platform that we are building and some insights on some to sustain the impact that we have started with Ausome Maps. Shoutout to Aimon, Mikko and Honey for the great insights.
        </p>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/DJI_0347.JPG"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/DJI_0356.JPG"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <p>
          We are thankful for the opportunity to share our project with the students and the greater mapping community at DLSU.
        </p>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/20230527_171649.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/main/346658535_597716782323415_1781950237273907419_n.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
        <p>
          P.S. It was very refreshing to join an in-person event! Another bonus was meeting GeoLadiesPH there ❤️❤️ I missed you ladies!
        </p>
        <v-row class="pa-10">
          <img
          src="https://github.com/chamthesleeptalker/osm-diary-assets-mapatalksv1/blob/main/geoladies.png?raw=true"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
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
  name: "MapaTalksV1",
  data() {
    return {
        title:"Making the Maps Ausome at DLSU-Taft",
        date:"May 2023"
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
.about-me-img{
  width:60%;
  padding-top:1em;
  padding-bottom: 1em;
  border-radius: 50px;
}
</style>