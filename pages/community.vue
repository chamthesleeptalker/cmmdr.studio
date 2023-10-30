<template>
<div>
  <Header1 />
  <Banner1 />
  <Banner2 />
  <Feature1 />
  <Feature2 />
  <Feature3 />
  <Blog />

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
    };
  },
  components: {
    PortfolioCard: () => import("@/components/portfolio/PortfolioCard"),
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
    Banner2: () => import("@/components/banner/Banner2"),
    Blog: () => import("@/components/blogs/Blog"),
    Feature1: () => import("@/components/features/Feature1"),
    Feature2: () => import("@/components/features/Feature1"),
    Feature3: () => import("@/components/features/Feature2"),
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
