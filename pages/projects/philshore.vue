<template>
  <div>
    <Header1 />
    <v-container>
      <v-row class="portfolio-row mb-20 pt-20">
        <h1 class="text-h1" style="margin-bottom: 10px">{{ title }}</h1>
        <!--desc -->
        <!-- <p v-html="desc"></p> -->
        <v-container style="width: 100%">
          <p>Project PhilSHORE identified the potential sites for tidal current energy in the Philippines using Geographic Information Systems (GIS).</p>
          <p>Tidal current energy is a form of energy that arises from the difference in water levels between landmasses. This energy is abundant in channels and straits, which are common in the Philippine archipelago. </p>
          <img
            src="@/assets/images/portfolio/projects/PhilSHORE.png"
            class="img-fluid about-me-img"
            alt=""
          />
          <p>This project assessed these sites for tidal current energy conversion and produced resource and suitability maps with physical, environmental, and socio-economic factors. The project created a webGIS-based MSP tool for site analysis.</p>
          <p>I worked on developing the webGIS platform.</p>
          <p>PhilSHORE tool is a web-based GIS application that helps stakeholders assess the potential and suitability of ocean energy sites. It offers data access to resource, site suitability, and device layers, as well as a raster calculation function that can create customized energy assessment maps using weighted overlay analysis. The tool is designed for the government, academe, and private institutions interested in ocean renewable energy.</p>
          <p>I joined this team right before graduating, as I had worked as a student assistant in the department for some project. My web development skills as a student assistant attracted their attention. This project also sparked my interest in energy, which motivated me to pursue further study on it.</p>
          <p>Part of my role is to be on top of stakeholder engagement, interface design, and development specialist, I had the chance to join some of our nationwide fieldworks that took me to different places. Being a geomatics engineer by education, I embraced these opportunities and even trained myself in swimming and open-water survival.</p>
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
  name: "PhilSHORE",
  data() {
    return {
        title:"PhilSHORE",
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