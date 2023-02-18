<template>
  <div>
      <Header1 />
      <v-container class="justify-center" style="text-align:center;">
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
    Header1: () => import("@/components/custom/header/Header1"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
  },
};
</script>
<style lang="scss" scoped>
.about-me-img{
  max-width:70%;
}
</style>