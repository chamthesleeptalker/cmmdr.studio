<template>
  <div>
    <div class="portfolio-component mini-spacer bg-extra-light">
      <v-row class="portfolio-row ma-0 pa-0">
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="portfolio-row ma-0 pa-0">
          <v-col v-for="item in portfolio" :key="item.src" class="ma-0 pa-0" cols="12" md="6" lg="4">
            <portfolio-card :item="item"></portfolio-card>
            <!-- <v-card @click="reveal = !reveal" class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  :src="item.src"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-expand-transition>
                <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      Origin
                    </p>
                    <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn
                      text
                      color="teal accent-4"
                      @click="reveal = !reveal"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card> -->
          </v-col>
          <!-- <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img2.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Button Designs Free</h5>
                <p class="font-14 mb-0">Search Engine</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img3.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Branding & Co Agency</h5>
                <p class="font-14 mb-0">Admin templates</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img4.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Branding & Co Agency</h5>
                <p class="font-14 mb-0">Admin templates</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img5.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Branding & Co Agency</h5>
                <p class="font-14 mb-0">Admin templates</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img6.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Branding & Co Agency</h5>
                <p class="font-14 mb-0">Admin templates</p>
              </v-card-text>
            </v-card>
          </v-col> -->
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-row>
    </div>
  </div>
</template>
<script>
import { portfolio } from "./config/portfolioData";

export default {
  name: "Portfolio",
  data() {
    return {
      portfolio,
      reveal: false,
    };
  },
  components: {
    PortfolioCard: () => import("@/components/portfolio/PortfolioCard")
  },
  methods: {},
  mounted(){
    console.log(this.portfolio);
  }
};
</script>
<style lang="scss">
.portfolio-component {
  padding:0px;
  margin:0px;
}

.portfolio-card {
  border-radius:0px !important;
  box-shadow:none !important;
}

.portfolio-row{
  width:100%;
}
</style>
