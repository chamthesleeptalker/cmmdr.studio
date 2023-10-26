<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" lg="10">
            <v-img
              :src="require('@/assets/images/features/3/feat-img.png')"
              alt="feature"
              class="rounded"
            />
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <v-chip small color="info" text-color="white">
                    Data Story
                  </v-chip>
                  <v-chip small color="success" text-color="white">
                    Latest
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    Flowers and Tracks: A visual and cartographic exploration
                  </h3>
                  <p>
                    A visual comparison of typhoon tracks and with the beautiful <i>sakura</i>.
                  </p>
                  <!-- <n-link class="nav-link" style="text-decoration:none;color:white;" nuxt to="/to-all-the-women-of-the-world"></n-link> -->
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/flowers-and-tracks"
                    elevation="0"
                  >
                   <span>Explore this project</span> <i class="mdi mdi-arrow-right"></i> 
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature3",
  data() {
    return {};
  },
  methods: {},
};
</script>
