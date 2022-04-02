<template>
  <div>
      <Header1 />
      <Banner1 />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "work",
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