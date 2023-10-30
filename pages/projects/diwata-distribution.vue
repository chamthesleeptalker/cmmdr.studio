<template>
  <div>
    <Header1 />
    <v-container>
      <v-row class="portfolio-row mb-20 pt-20">
        <h1 class="text-h1" style="margin-bottom: 10px">{{ title }}</h1>
        <!--desc -->
        <!-- <p v-html="desc"></p> -->
        <v-container style="width: 100%">
          <img
            src="@/assets/images/portfolio/projects/dDist.png"
            class="img-fluid about-me-img"
            alt=""
          />
          <p>
            The Image Request and Distribution Platform was another web-based application that allowed users to request and access images captured by Diwata-1. This was useful for various applications such as disaster management, environmental monitoring, agricultural assessment, and urban planning.
          </p>
          <p>
            I had a great time working on the projects here. Space exploration is a fascinating and promising field, and I was very interested in this domain since I learned about satellite and imagery in our remote sensing class. I gained a lot of valuable skills and knowledge from working with satellite data and web development technologies.
          </p>
          <p>
            It was an amazing experience to be a part of this team. I felt the significance and impact of this project as we witnessed Diwata-1 being launched into space through the International Space Station. I was proud to contribute to the advancement of Philippine space technology and science.
          </p>
          
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
  name: "DiwataDistribution",
  data() {
    return {
        title:"Diwata-1 Distribution",
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