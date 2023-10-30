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
          <v-col v-for="item in works.slice(1,)" :key="item.title" class="ma-0 pa-0" cols="12" md="6" lg="4">
            <portfolio-card :item="item"></portfolio-card>
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
import { portfolio } from "@/data/portfolio";

export default {
  name: "Portfolio",
  props: {
    works: Array,
  },
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
