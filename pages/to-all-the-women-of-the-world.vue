<template>
  <div>
      <Header1 />
      <v-container>
          <v-row class="portfolio-row mb-20 pt-20">
            
            <h1 class="text-h1" style="margin-bottom:10px;">{{title}}</h1>
            <!--desc -->
            <p v-html="desc"></p>
            <h2 class="text-h2" style="width:100%">
                <a href="https://www.instagram.com/toallthewomenoftheworld/?hl=en">
                <i class="mdi mdi-instagram"></i>
                </a>
            </h2>

            <h2 class="text-h2" style="margin-top:20px;margin-bottom:10px;">Decoding the design</h2>
            <img
                src="@/assets/images/work/toallthewomenoftheworld/visual_alphabet.jpg"
                class="img-fluid about-me-img"
                alt="about-me"
            />
            <!--social -->
            
            <!--legend -->
            <!-- loop images -->
          </v-row>
              
          <v-row class="portfolio-row mt-20 pt-20">
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
        </v-row>
      </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ToAllTheWomenOfTheWorld",
  data() {
    return {
        title:"To all the Women of the World: A Data Portrait Project",
        desc:"<p>Awesome women shared their thoughts about #iwd2022, gender bias, and empowering each other.<br>#BreakTheBias, the official hashtag for this year's International Women's Month, is a call for everyone to join hands and work together to shape a world that is safe, inclusive, and free from biases and discrimination. </p>",
        page:""
    };
  },
  methods:{
      buildImagePath: function(i){
          return require('@/assets/images/work/toallthewomenoftheworld/dataPortrait_'+(i-1)+'_processed.jpg');
      }
  },
  components: {
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
  },
};
</script>
<style lang="scss" scoped>
.portfolio-card {
  border-radius:0px !important;
  box-shadow:none !important;
}

.portfolio-row{
    margin-top:20px;
    margin-bottom:20px;
    width:100%;
}
</style>