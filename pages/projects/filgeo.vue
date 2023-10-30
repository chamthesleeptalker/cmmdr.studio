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
            I collaborated with Fil Geosolutions on several webgis solutions that were part of their projects. These included the Hydroelectric Powerplant plan for Pasil B and C and the Monitoring platform for the DENR’s National Greening Project.
          </p>
          <p>
            The Pasil B and C Hydroelectric Powerplant was a project that aimed to assess the feasibility and potential of developing a renewable energy source in Pasil, Kalinga. I designed and developed a web-based platform that allowed the ground workers to access and visualize the geospatial layers related to the project, such as topography, hydrology, land use, and infrastructure. The platform was optimized for portability and usability, so that the workers could use it on their tablets or phones in the field.
          </p>
          <v-row class="ma-5">
            <img
            src="@/assets/images/portfolio/projects/filgeo.png"
            class="img-fluid about-me-img"
            alt=""
          />
          </v-row>
          <p>
          The National Greening Project was a project that aimed to monitor and evaluate the progress and impact of the reforestation efforts of the DENR. I created a simple but effective web-based platform that displayed the satellite images and data of the reforestation sites across the country. The platform also provided information on the species planted, survival rate, carbon sequestration, and socio-economic benefits of the project.
          </p>
          <p>
            Working with Fil Geosolutions was my first experience in the private sector, as I had previously worked with universities and government agencies. It was a valuable opportunity for me to discover various applications and challenges for my webgis skills. It also helped me improve my communication skills and teamwork abilities.
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
  name: "FilGeosolutions",
  data() {
    return {
        title:"Fil Geosolutions",
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