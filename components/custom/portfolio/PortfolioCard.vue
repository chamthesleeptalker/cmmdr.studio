<template>
  <!-- <v-card class="portfolio-card overflow-hidden tile">
              
              <v-row justify="center">
                <div @mouseover="overlay = true" @mouseleave="overlay = false" class="portfolio-img">
                <img
                  :src="item.src"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
                <v-fade-transition>
                <v-overlay
                  :absolute="absolute"
                  :value="overlay"
                >
                  <v-btn
                    color="success"
                    
                  >
                    Hide Overlay
                  </v-btn>
                </v-overlay>
                </v-fade-transition>
              </v-row>

            </v-card> -->
             <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="portfolio-card overflow-hidden"
        :to="item.page"
      >
        <v-img :src="item.src"></v-img>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#04010f"
            opacity="0.8"
            light=true
            dark=false
            class="pa-3"
          >
          <v-container>  
            <p class="text-h4 portfolio-card-title">
              {{item.title}}
            </p>
              {{item.desc}}
          </v-container>
          
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "PortfolioCard",
  
  props:{
      item: Object,
  },

  data() {
    return {
        absolute: true,
        overlay: false,
    };
  },
};
</script>

<style lang="scss">
.portfolio-card-title{
  font-size: 1.5rem;
  color:#ffffff !important;
  text-align: center;
}
</style>