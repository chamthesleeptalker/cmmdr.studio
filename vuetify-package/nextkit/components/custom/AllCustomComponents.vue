<template>
  <div>
    <!-- -----------------------------------------------
    Header
    ----------------------------------------------- -->
    <HeaderText />
    <Header1 />
    <Header2 />
    <!-- -----------------------------------------------
    ./ Header
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Banner
    ----------------------------------------------- -->
    <BannerText />
    <Banner1 />
    <Banner2 />
    <!-- -----------------------------------------------
    ./ Banner
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Form Banner
    ----------------------------------------------- -->
    <FormBannerText />
    <FormBanner1 />
    <!-- -----------------------------------------------
    ./ Form Banner
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Features
    ----------------------------------------------- -->
    <FeatureText />
    <Feature1 />
    <Feature2 />
    <Feature3 />
    <!-- -----------------------------------------------
    ./ Features
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Portfolio
    ----------------------------------------------- -->
    <PortfolioText />
    <Portfolio />
    <!-- -----------------------------------------------
    ./ Portfolio
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Pricing
    ----------------------------------------------- -->
    <PricingText />
    <Pricing />
    <!-- -----------------------------------------------
    ./ Pricing
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Team
    ----------------------------------------------- -->
    <TeamText />
    <Team />
    <!-- -----------------------------------------------
    ./ Team
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Testimonial
    ----------------------------------------------- -->
    <TestimonialText />
    <Testimonial />
    <!-- -----------------------------------------------
    ./ Testimonial
    ----------------------------------------------- -->
    <Blog />
    <!-- -----------------------------------------------
    C2a
    ----------------------------------------------- -->
    <C2aText />
    <C2a1 />
    <C2a2 />
    <!-- -----------------------------------------------
    ./ C2a
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Contact Text
    ----------------------------------------------- -->
    <ContactText />
    <Contact />
    <!-- -----------------------------------------------
    ./ Contact Text
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "AllCustomComponents",

  data() {
    return {};
  },
  components: {
    HeaderText: () => import("@/components/header/HeaderText"),
    BannerText: () => import("@/components/banner/BannerText"),
    FeatureText: () => import("@/components/features/FeatureText"),
    PricingText: () => import("@/components/pricing/PricingText"),
    TeamText: () => import("@/components/team/TeamText"),
    ContactText: () => import("@/components/contact/ContactText"),
    TestimonialText: () =>
      import("@/components/testimonial/TestimonialText"),
    C2aText: () => import("@/components/c2a/C2aText"),
    PortfolioText: () => import("@/components/portfolio/PortfolioText"),
    FormBannerText: () =>
      import("@/components/form-banner/FormBannerText"),
    Header1: () => import("@/components/header/Header1"),
    Header2: () => import("@/components/header/Header2"),
    Banner1: () => import("@/components/banner/Banner1"),
    Banner2: () => import("@/components/banner/Banner2"),
    Feature1: () => import("@/components/features/Feature1"),
    Feature2: () => import("@/components/features/Feature2"),
    Feature3: () => import("@/components/features/Feature3"),
    FormBanner1: () => import("@/components/form-banner/FormBanner1"),
    Portfolio: () => import("@/components/portfolio/Portfolio"),
    Pricing: () => import("@/components/pricing/Pricing"),
    Team: () => import("@/components/team/Team"),
    Testimonial: () => import("@/components/testimonial/Testimonial"),
    Blog: () => import("@/components/blogs/Blog"),
    C2a1: () => import("@/components/c2a/C2a1"),
    C2a2: () => import("@/components/c2a/C2a2"),
    Contact: () => import("@/components/contact/Contact"),
  },
};
</script>
