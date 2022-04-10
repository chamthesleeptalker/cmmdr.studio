<template>
  <div>
      <Header1 />
      <v-container>
          <v-row class="portfolio-row mb-20 pt-20">
            
            <h1 class="text-h1" style="margin-bottom:10px;">{{title}}</h1>
            <!--desc -->
            <!-- <p v-html="desc"></p> -->
            <v-container style="width:100%">
              <p>Last October, I took a shot and joined Asian Development Bank (ADB) Data Storytelling and Visualization Challenge in celebration of World Statistics Day.</p>
              <p>At first, my aim was to submit for the data visualization category. But at the last minute, I put together a data story as well.</p>
              <p>The focus of this visualization and story both entitled: Trees of Innovation, was to depict the number of full-time researchers each country hired and related it to the R&D expenditure percentage of their GDP.</p>
              <p>As defined by the data, the trees varied in height and the number of branches. For the fruits, the data defined the size, number, and color of the fruits.  </p>
            </v-container>
            <!-- <h2 class="text-h2" style="width:100%">
                <a href="https://www.instagram.com/toallthewomenoftheworld/?hl=en">
                <i class="mdi mdi-instagram"></i>
                </a>
            </h2> -->
                <!-- <iframe width="600" height="600" src="https://www.youtube.com/embed/6UxfMcdxQ5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                
            <panZoom :options="{minZoom: 1, maxZoom: 3, bounds: true, boundsPadding: 0.1}">
                <img
                src="@/assets/images/work/treesofinnovation/treesofinnovation_horizontal.png"
                class="img-fluid about-me-img"
                style="margin-top:10px;margin-bottom:10px;width:100%;cursor:pointer;"
                alt=""
            />
            </panZoom> 

 <horizontal-scroll style="height: 60%">
          <img
            src="@/assets/images/work/treesofinnovation/p1.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p2.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p3.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <!-- <img
            src="@/assets/images/work/treesofinnovation/p4.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          /> -->
          <img
            src="@/assets/images/work/treesofinnovation/p5.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p6.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p7.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
                 <img
            src="@/assets/images/work/treesofinnovation/p8.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p9.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
            alt=""
          />
          <img
            src="@/assets/images/work/treesofinnovation/p10.jpg"
            class="img-fluid about-me-img"
            style="height:600px;width:auto;"
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
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  name: "TreesOfInnovation",
  data() {
    return {
        title:"Trees of Innovation",
        desc:"",
        page:""
    };
  },
  methods:{
      buildImagePath: function(i){
          return require('@/assets/images/work/toallthewomenoftheworld/dataPortrait_'+(i-1)+'_processed.jpg');
      }
  },
  components: {
    Header1: () => import("@/components/custom/header/Header1"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
    HorizontalScroll,
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