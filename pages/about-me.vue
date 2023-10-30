<template>
  <div>
    <Header1 />
    <v-container class="mt-5">
      <v-row>
        <v-container>
          <v-row>
            <h1 class="mt-5">
              Hey there👋, I'm Cham!
            </h1>
            <br>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-img :src="require('@/assets/images/about-me/1.png')" height="100%"></v-img>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('@/assets/images/about-me/2.png')" height="100%"></v-img>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('@/assets/images/about-me/3.png')" height="100%"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <p>
              I'm a creative technologist with almost 10 years of experience in craftings solutions for
              energy and agriculture. I worked as a researcher in various projects in University of the Philippines
              Diliman and more recently in a Filipina-led Petronas venture startup, Iraya Energies.
            </p>
            <p>
              2020 Asian Development Banks’ (ADB) World’s Statistics Day Data Visualization and Storytelling prizewinner
              with here work entitled Trees of Innovation (cmmdr.studio/trees-of-innovation). I'm also one of the
              finalists in ADB’s Visualizing Climate Change and Resilience Challenge last year with my interactive
              visualization work entitled Flowers and Tracks (Flowers and Tracks: A visual and cartographic exploration).
            </p>
            <p>
              I'm passionate about data and how design and technology can transform it into actionable insights, a
              usable product, a data story, a visualization, an art piece, and many more. I believe that design
              thinking provides an effective framework of providing human-centered solutions to the simplest yet wickedest
              of
              problems.
            </p>
            <p>
              Co-founder of GeoladiesPH, leading community pushing to make space for women in mapping in the Philippines.
              A 2022 Humanitarian OpenStreetmap & Open Mapping Hub APAC’s She Leads and She Inspires Grant recipient.
            </p>
            <p>
              Currently, I'm the project lead at Ausome Maps Philippines (ausomemaps.org), an initiative to map on
              OpenStreetMap
              all the schools with SPED classes, physical, speech, and occupational therapy clinics and other institutions
              geared towards the development of differently abled Filipinos.
            </p>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
    <br>
    <v-container>
      <v-btn-toggle v-model="toggle" color="black" variant="text" class="mb-10">
        <v-btn :active="activeCategory == 'dataViz'" @click="activeCategory = 'dataViz'"> Data Viz </v-btn>
        <v-btn :active="activeCategory == 'product'" @click="activeCategory = 'product'"> Product </v-btn>
        <v-btn :active="activeCategory == 'gisDev'" @click="activeCategory = 'gisDev'"> Geospatial Solutions </v-btn>
      </v-btn-toggle>
      <br>
      <h1 class="mt-5">
        Cham, the <i>{{ aboutCategories[activeCategory]['role'] }}!</i>
      </h1>
    </v-container>
    <v-container>

      <v-container>
        <v-row class="pa-2">
          <p>{{ aboutSummary[activeCategory] }}</p>
        </v-row>
      </v-container>
      <v-container>
        <h2>Relevant Works</h2>
        <v-row class="pa-3 mt-3 mb-5" v-for="workItem in aboutWorkItems[activeCategory]" :key="workItem.title">
          <h4 class="p-full-line"><b>{{ workItem.title }}</b></h4>
          <p class="p-full-line"><i>{{ workItem.subtitle }}, {{ workItem.type }}</i></p>
          <!-- <p class="p-full-line">{{ workItem.type }}</p> -->
          <p v-for="workDesc in workItem.desc" :key="workDesc" class="p-full-line">{{ workDesc }}</p>
          <p v-if="workItem.tools_tech != ''" class="p-full-line"><b><i>Tools & tech: {{ workItem.tools_tech }}</i></b>
          </p>
          <p v-if="workItem.award != ''" class="p-full-line"><b>Award: </b>{{ workItem.award }}</p>
        </v-row>
      </v-container>
    </v-container>
    <v-container>
      <v-row>
        <v-container id="education">
          <h2 class="pt-5 mb-6">Education</h2>
          <v-row class="pa-2 pt-3 pb-3">
            <v-row class="pa-2 mb-2 mt-2" v-for="education in aboutEducation" :key="education.degree">
              <h4 class="p-full-line mb-0"><b><i>{{ education.degree }}</i></b></h4>
              <p v-if="education.desc != ''" class="p-full-line mb-0">{{ education.desc }}</p>
              <p class="p-full-line mb-0">{{ education.school }}</p>
            </v-row>
          </v-row>
        </v-container>
        <v-container id="publications">
          <h2 class="pt-5 mb-6">Publications</h2>
          <v-row class="pa-2 pt-3 pb-3">
            <v-row class="pa-2 mb-2 mt-2" v-for="publication in aboutPublication" :key="publication.title">
              <h4 class="p-full-line mb-0"><b><i>{{ publication.title }}</i></b></h4>
              <p class="p-full-line mb-0">{{ publication.authors }}</p>
              <p class="p-full-line mb-0">{{ publication.publication }}</p>
            </v-row>
          </v-row>
        </v-container>
        <!-- <v-container id="speaking">
          <h2 class="pt-5 mb-6">Speaking Engagements</h2>
          <v-row class="pa-2 pt-3 pb-3">
            <v-row class="pa-2 mb-2 mt-2" v-for="education in aboutEducation" :key="education.degree">
              <h4 class="p-full-line mb-0"><b><i>{{ education.degree }}</i></b></h4>
              <p v-if="education.desc != ''" class="p-full-line mb-0">{{ education.desc }}</p>
              <p class="p-full-line mb-0">{{ education.school }}</p>
            </v-row>
          </v-row>
        </v-container> -->
    </v-row>
    </v-container>
    <br>
  </div>
</template>

<script>
import { awards } from "@/data/resume";
import { aboutWorkItems, aboutSummary, aboutEducation, aboutCategories, aboutPublication, aboutSpeaking } from "@/data/about";
export default {
  name: "about-me",
  data() {
    return {
      awards,
      aboutWorkItems,
      aboutSummary,
      aboutEducation,
      activeCategory: "dataViz",
      aboutCategories,
      aboutPublication,
      aboutSpeaking,
      toggle: null,
      items: [
        {
          title: 'Education',
          value: "#education",
        },
        {
          title: 'Publications',
          value: "#publications",
        },
        {
          title: 'Speaking Engagements',
          value: "#speaking",
        },
      ],
    };
  },

  components: {
    Header1: () => import("@/components/header/Header1"),
    Banner1: () => import("@/components/banner/Banner1"),
  },
  mounted() {
    this.activeCategory = 'dataViz';
  },
};
</script>
<style lang="scss" scoped>
.about-me-img {
  max-width: 70%;
}

.p-full-line {
  width: 100%;
}
</style>