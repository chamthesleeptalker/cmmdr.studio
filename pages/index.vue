<template>
  <div>
    <Header1 />
    <Banner2 />
    <Feature3 />
    <!-- <PortfolioText /> -->
    <Portfolio />
    <!-- <Blog />
    <ContactText />
    <Contact /> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
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
    Header1: () => import("@/components/custom/header/Header1"),
    Banner2: () => import("@/components/custom/banner/Banner2"),
    Feature3: () => import("@/components/custom/features/Feature3"),
    FormBanner1: () => import("@/components/custom/form-banner/FormBanner1"),
    PortfolioText: () => import("@/components/custom/portfolio/PortfolioText"),
    Portfolio: () => import("@/components/custom/portfolio/Portfolio"),
    Blog: () => import("@/components/custom/blogs/Blog"),
    ContactText: () => import("@/components/custom/contact/ContactText"),
    Contact: () => import("@/components/custom/contact/Contact"),
  },
};
</script>
