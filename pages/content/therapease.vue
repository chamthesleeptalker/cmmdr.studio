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
            As Ausome Maps’ journey comes to a close, our focus in the past few months is how might we continue and amplify the impact that Ausome Maps has started for the years to come. The core of our project is map out therapy centers aside from tagging special education schools. Our constant problem for these datasets is maintaining credibility of information and the mechanism for updating. Looping this in with the bigger problem when it comes to accessibility of information, we decided to develop TherapEase.
          </p>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/Ausome%20Maps%20-%20Session%20Image.png"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
        </v-row>
          <p>
            TherapEase is not only a platform but a venture that aims to help Filipino families with kids in the spectrum or with developmental delay.
          </p>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/therapEase%20poster.png"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            Ausome Maps’ TherapEase is one of the 3 Philippine ventures in the US-ASEAN Science, Technology, and Innovation Cooperation (US-ASEAN STIC) Conference’s Pitch Competition.
          </p>

          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/20230906_085047.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            As part of this program, we went through a 4-week virtual incubator that helped us develop our pitch for the Pitch Competition in Jakarta. This program is led by Ken Mulligan from the Arizona State University (ASU) and organized with the help of Ms. Dung Le and Ms. Thao Prahn also from ASU.
          </p>
          <v-row class="pa-10">
          <img
          src="https://github.com/chamthesleeptalker/osm-diary-assets-therapease/blob/main/BAZ_2923.JPG?raw=true"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            Through the US-ASEAN’s STIC incubator, we learned about what makes a startup, how to make value proposition, doing a competitive analysis, creating a business model canvas, and putting it all together in a concise but impactful pitch deck for the competition and any other fund raising that we might do in the future.
          </p>
          <v-row class="pa-10">
          <img
          src="https://github.com/chamthesleeptalker/osm-diary-assets-therapease/blob/main/20230906_155646.jpg?raw=true"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/20230906_100231.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <v-row class="pa-10">
          <img
          src="https://github.com/chamthesleeptalker/osm-diary-assets-therapease/blob/main/IMG_0985.JPG?raw=true"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            Competing in Jakarta with 35 other ventures from the 11 member-countries of the ASEAN, we made our first official pitch. Through our 5-minute pitch, I felt an immense gratitude for everyone who has been a part of Ausome Maps and for Open Mapping Hub’s She Leads and She Inspires program and grant which allowed us to create the Ausome Maps and be in the position to pitch TherapEase.
          </p>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/371928318_256605000614521_7464233281396276792_n.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>TherapEase did not get the seed funding from this competition. But I was grateful for the opportunity and honestly, I learned a lot through the sessions (Ken really pushed us to always do great and always with enthusiasm) and the participants of the conference.</p>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/20230905_191507.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <v-row class="pa-10">
          <img
          src="https://raw.githubusercontent.com/chamthesleeptalker/osm-diary-assets-therapease/main/20230905_201114.jpg"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            During this competition in Jakarta, we are preparing to qualify for another program.
          </p>
          <v-row class="pa-10">
          <img
          src="https://github.com/chamthesleeptalker/osm-diary-assets-therapease/blob/main/BAZ_2343.JPG?raw=true"
            class="img-fluid about-me-img mx-auto"
            alt=""
            cover
          />
          </v-row>
          <p>
            We are happy to share that TherapEase will be a part of a startup accelerator program based in the Philippines. We are truly excited for this opportunity, and we hope to develop TherapEase into the venture that we envisioned it to be continuing Ausome Maps’ impact.

P.S. Thanks to the conference organizer for the great photos!
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
  name: "TherapEase",
  data() {
    return {
        title:"Continuing Ausome Maps’ Journey with TherapEase",
        date:"September 2023"
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