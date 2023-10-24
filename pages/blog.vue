<template>
  <div>
      <Header1 />
      <ComingSoon />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "blog",
  data() {
    return {};
  },

  components: {
    Header1: () => import("@/components/header/Header1"),
    ComingSoon: () => import("@/components/coming-soon/ComingSoon"),
  },
};
</script>