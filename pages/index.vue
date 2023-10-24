<template>
  <div>
    <Header1 />
    <Banner2 />
    <Feature3 />
    <!-- <PortfolioText /> -->
    <Portfolio />
    <!-- <Blog /> -->
    <!-- <ContactText /> -->
    <!-- <Contact /> -->
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
    Header1: () => import("@/components/header/Header1"),
    Banner2: () => import("@/components/banner/Banner2"),
    Feature3: () => import("@/components/features/Feature3"),
    FormBanner1: () => import("@/components/form-banner/FormBanner1"),
    PortfolioText: () => import("@/components/portfolio/PortfolioText"),
    Portfolio: () => import("@/components/portfolio/Portfolio"),
    Blog: () => import("@/components/blogs/Blog"),
    ContactText: () => import("@/components/contact/ContactText"),
    Contact: () => import("@/components/contact/Contact"),
  },
};
</script>
