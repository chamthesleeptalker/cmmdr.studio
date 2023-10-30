<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="portfolio-card overflow-hidden" :to="item.page">
        <v-img :src="item.src"></v-img>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#04010f" opacity="0.8" :light="true" :dark="false" class="pa-3">
            <v-container>
              <p class="text-h4 portfolio-card-title">
                {{ item.title }}
              </p>
            </v-container>

          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "PortfolioCard",

  props: {
    item: Object,
  },

  data() {
    return {
      absolute: true,
      overlay: false,
      darkB: false,
      lightB: true
    };
  },
};
</script>

<style lang="scss">
.portfolio-card-title {
  font-size: 1.5rem;
  color: #ffffff !important;
  text-align: center;
}
</style>