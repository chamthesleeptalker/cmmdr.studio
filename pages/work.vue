<template>
  <div>
      <Header1 />
      <ComingSoon />
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
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
  },
};
</script>