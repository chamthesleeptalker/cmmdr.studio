<template>
  <div>
      <Header1 />
      <v-container class="justify-center" style="text-align:center;">
        <div class="btn-groups">
            <v-btn :active="true"> Data Viz </v-btn>
            <v-btn depressed> Product </v-btn>
            <v-btn depressed> Research & Digital Solutions </v-btn>
        </div>
      <img
        src="@/assets/images/about-me/1.png"
        class="img-fluid about-me-img"
        alt="about-me"
      />
      <img
        src="@/assets/images/about-me/2.png"
        class="img-fluid about-me-img"
        alt="about-me"
      />
      <br>
      <v-row >
        <v-col v-for="award in awards" :key="award.name" class="ma-0 pa-0" cols="12" md="6" lg="4">
          {{award.name}}
        </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<script>
import { awards } from "@/data/resume";
export default {
  name: "about-me",
  data() {
    return {
      awards
    };
  },

  components: {
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
  },
};
</script>
<style lang="scss" scoped>
.about-me-img{
  max-width:70%;
}
</style>