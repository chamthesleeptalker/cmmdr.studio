<template>
  <div>
    <Header1 />
    <Banner2 />
    <Feature3 :feature="featureDataViz" />
    <!-- <PortfolioText /> -->
    <Portfolio :works="portfolio['dataViz']['works']" />

    <Feature3 :feature="featureProjects"/>

    <Portfolio :works="productGisDev" />

    <!-- <Blog /> -->
    <!-- <ContactText /> -->
    <!-- <Contact /> -->
  </div>
</template>

<script>
import { portfolio } from "@/data/portfolio";

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
    return {
      portfolio,
      productGisDev:[],
      featureDataViz:{
        chip1:"Data Portrait",
        chip2:"Latest",
        title:"Flowers and Tracks: A visual and cartographic exploration",
        shortDesc:`A visual comparison of typhoon tracks and with the beautiful sakura`,
        to:"/flowers-and-tracks",
        img:require('@/assets/images/features/3/feat-img.png'),
      },
      featureProjects:{
        chip1:"Product",
        chip2:"App Development",
        title:"ElasticDocs, AI-powered Intuitive Knowledge Container",
        shortDesc:"ElasticDocs is Iraya's flagship products that optimizes an organization's knowledge investment by making it searchable and usable than ever.",
        to:"/projects/elasticdocs-iraya",
        img:"https://www.irayaenergies.com/wp-content/uploads/2022/02/brochure.png",
      }
    };
  },
  components: {
    Header1: () => import("@/components/header/Header1"),
    Banner2: () => import("@/components/banner/Banner2"),
    Banner1: () => import("@/components/banner/Banner1"),
    Feature3: () => import("@/components/features/Feature3"),
    Feature2: () => import("@/components/features/Feature2"),
    FormBanner1: () => import("@/components/form-banner/FormBanner1"),
    PortfolioText: () => import("@/components/portfolio/PortfolioText"),
    Portfolio: () => import("@/components/portfolio/Portfolio"),
    Blog: () => import("@/components/blogs/Blog"),
    ContactText: () => import("@/components/contact/ContactText"),
    Contact: () => import("@/components/contact/Contact"),
  },
  mounted() {
    let productWorks = this.portfolio['product']['works'];
    let gisDevWorks = this.portfolio['gisDev']['works'];
    this.productGisDev = productWorks.concat(gisDevWorks);
  },
};
</script>
