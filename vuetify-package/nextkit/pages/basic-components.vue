<template>
  <div>
    <BannerTwo />
    <AllComponents />
    <ComingSoon />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Basic Components",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    BannerTwo: () => import("@/components/lp-banner/BannerTwo"),
    ComingSoon: () => import("@/components/coming-soon/ComingSoon"),
    AllComponents: () => import("@/components/basic/AllComponents"),
  },
};
</script>
