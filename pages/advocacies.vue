<template>
<div>
  <Header1 />
    <v-container>
      <!-- -----------------------------------------------
            Start Coming Soon
        ----------------------------------------------- -->
      <v-row>
        <v-col cols="12" sm="12" md="12" class="d-flex align-center">
          <div>
            <h1 class="text-h1">
              Advocacies
            </h1>
          </div>
        </v-col>
      </v-row>
      <v-container class="portfolio-row ma-0 pt-20">
          <v-row v-for="item in portfolio" :key="item.src" class="ma-0 pa-0">
            <v-col cols="4" md="4" lg="4">
                <portfolio-card :item="item"></portfolio-card>
            </v-col>
            <v-col cols="8" md="8" lg="8">
              <h2 style="text-decoration:none;"><n-link class="nav-link" style="text-decoration:none;" nuxt :to="item.page">{{item.title}}</n-link></h2>
              <p><i>{{item.date}}</i></p>
              <br>
              <h4>{{item.desc}}</h4>
              <br>
              <p>Data source: {{item.data}}</p>
            </v-col>
            
          </v-row>
      </v-container>
      <!-- -----------------------------------------------
            End Coming Soon
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
import { portfolio } from "@/components/portfolio/config/portfolioData";

export default {
  name: "Work",
  data() {
    return {
      portfolio,
      reveal: false,
    };
  },
  components: {
    PortfolioCard: () => import("@/components/portfolio/PortfolioCard"),
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
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
