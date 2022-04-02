<template>
  <div>
    <div class="portfolio-component mini-spacer bg-extra-light">
      <v-row class="ma-0 pa-0">
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
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img1.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <!-- <v-card-text>
                <h5 class="font-weight-medium font-18">
                  Branding for Theme Designer
                </h5>
                <p class="font-14 mb-0">Digital Marketing</p>
              </v-card-text> -->
            </v-card>
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden tile">
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img2.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <!-- <v-card-text>
                <h5 class="font-weight-medium font-18">Button Designs Free</h5>
                <p class="font-14 mb-0">Search Engine</p>
              </v-card-text> -->
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
              <!-- <v-card-text>
                <h5 class="font-weight-medium font-18">Branding & Co Agency</h5>
                <p class="font-14 mb-0">Admin templates</p>
              </v-card-text> -->
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  },
  methods: {},
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
</style>
