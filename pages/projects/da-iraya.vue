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
            My journey at Iraya Energies began as an independent consultant working on a better platform for searching journal contents. As a startup, Iraya Energies offered me diverse and dynamic roles in the past five years. I have been involved in software design and development, user experience and interface design, product design, innovation, and management.
          </p>
          <p>
            As a founding team member of Iraya Energies, I had the privilege to lead the business and interact with the clients and stakeholders in the industry.
          </p>
          <p>
            One of the most rewarding aspects of working at Iraya was witnessing the customers’ reactions and feedbacks when they used our products at conferences and exhibits. This helped me understand the customer’s pain points from their perspective and improve our technical and product solutions.
          </p>
        </v-container>
        <!-- <horizontal-scroll style="height: 60%"> -->
          <img
          src="@/assets/images/portfolio/projects/da.png"
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
  name: "DataAtelier",
  data() {
    return {
        title:"Data Atelier",
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