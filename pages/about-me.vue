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
      <!-- <img
        src="@/assets/images/about-me/3.png"
        class="img-fluid about-me-img"
        alt="about-me"
      /> -->
      </v-container>
      <!-- <Banner1 /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "about-me",
  data() {
    return {};
  },

  components: {
    Header1: () => import("@/components/custom/header/Header1"),
    // ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
  },
};
</script>
<style lang="scss" scoped>
.about-me-img{
  max-width:70%;
}
</style>