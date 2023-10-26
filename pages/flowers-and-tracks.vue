<template>
  <div>
    <Header1 />
    <v-container>
      <v-row class="portfolio-row mb-20 pt-20">
        <h1 class="text-h1" style="margin-bottom: 10px">{{ title }}</h1>
        <!--desc -->
        <v-container style="width: 100%">
          <p>
            This data story invokes the readers curiosity regarding historical typhoon data in the west pacific region and how
            it has changed over the years because of climate change. It presents a visual comparison of typhoon tracks and
            branches with cherry blossoms.
          </p>
        </v-container>
        <v-container>
          <iframe width="100%" height="664" frameborder="0" src="https://observablehq.com/embed/@chamthesleeptalker/flowers-and-tracks?cells=chart"></iframe>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "FlowersTracks",
  data() {
    return {
        title:"Flowers and Tracks: A visual and cartographic exploration",
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