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
            Since 2015, Crowd2Map Tanzania has been fighting forced female
            genital mutilation (FGM) through better maps by launching mapping
            projects to be worked on by both remote mappers all over the world
            and field mappers through MAPS.ME - #1 Travel Maps
          </p>
          <p>
            FGM is a practice that continues to endanger the lives of girls and
            women in Tanzania. Nowadays, still, 30% - 60% of girls and women
            ages 15 to 49 still go through FGM.
          </p>
          <p>
            Last May, I joined Viz for Social Good's challenge to communicate
            the impact and achievements that Crowd2Map has had through engaging
            data #visualizations
          </p>
        </v-container>
        <horizontal-scroll style="height: 60%">
          <img
            src="@/assets/images/work/crowd2maptanzania/p1.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p2.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p3.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p4.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p5.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p6.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p7.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p8.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p9.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
          <img
            src="@/assets/images/work/crowd2maptanzania/p10.png"
            class="img-fluid about-me-img"
            style="height: 600px; width: auto"
            alt=""
          />
        </horizontal-scroll>

        <!--social -->

        <!--legend -->
        <!-- loop images -->
      </v-row>
      <v-row>
          <v-container style="width: 100%">
          
          <p>
            I was inspired by the beauty and the elegance of flowers. And how
            each girl is akin to a flower 🏵️🌸🌼🌻🌺
          </p>
          <p>
            In order to visualize each of Crowd2Map's achievements, I used
            computationally generated flowers and borrowed some concepts from
            algorithmic botany such as phyllotactic patterns. I also got to work
            on circle-packing algorithms to create the illustration on the first
            and second pages.
          </p>
          <p>
            By mapping data parameters to various flower properties such as
            size, number of petals, petal shape, etc., I was able to generate
            different floral patterns.
          </p>
          <p>
            We can observe volunteer distribution, mapping progress for specific
            features, and the percentage of tasks that are yet to be validated.
          </p>
        </v-container>
        <img
          src="@/assets/images/work/crowd2maptanzania/full.png"
          class="img-fluid about-me-img"
          alt=""
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "Crowd2mapTanzania",
  data() {
    return {
      title: "Crowd2Map Tanzania",
      desc: "",
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