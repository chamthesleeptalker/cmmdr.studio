<template>
  <div>
    <Header1 />
    <v-container>
      <!-- -----------------------------------------------
            Start Coming Soon
        ----------------------------------------------- -->
      <v-row v-for="projectType in projectTypes" :key="projectType" class="mb-10 mt-5">
        <v-row>
          <v-col cols="12" sm="12" md="12" class="d-flex align-center">
            <div>
              <h1 class="text-h1">
                {{ portfolio[projectType]['title'] }}
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-container class="portfolio-row pt-20 mb-10">
          <v-row v-for="item in portfolio[projectType]['works']" :key="item.title" class="ma-0 pa-0">
            <v-col cols="4" md="4" lg="4">
              <portfolio-card :item="item"></portfolio-card>
            </v-col>
            <v-col cols="8" md="8" lg="8">
              <h2 style="text-decoration:none;"><n-link class="nav-link" style="text-decoration:none;" nuxt
                  :to="item.page">{{ item.title }}</n-link></h2>
              <p><i>{{ item.date }}</i></p>
              <br>
              <h4>{{ item.desc }}</h4>
              <br>
              <p v-if="projectType=='dataViz'">Data source: {{ item.data }}</p>
              <p v-else>{{ item.data }}</p>
            </v-col>

          </v-row>
        </v-container>
        <br>
      </v-row>
      <!-- -----------------------------------------------
            End Coming Soon
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
import { portfolio } from "@/data/portfolio";

export default {
  name: "Work",
  data() {
    return {
      portfolio,
      reveal: false,
      projectTypes:['dataViz','product','gisDev'],
    };
  },
  components: {
    PortfolioCard: () => import("@/components/portfolio/PortfolioCard"),
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
  },
  methods: {},
  mounted() {
  }
};
</script>
<style lang="scss">
.portfolio-component {
  padding: 0px;
  margin: 0px;
}

.portfolio-card {
  border-radius: 0px !important;
  box-shadow: none !important;
}

.portfolio-row {
  width: 100%;
}
</style>
