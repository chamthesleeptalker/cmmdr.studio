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
              :src="require('@/assets/images/features/3/feature-img.jpg')"
              alt="feature"
              class="rounded"
            />
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <v-chip small color="info" text-color="white">
                    Data Portrait
                  </v-chip>
                  <v-chip small color="success" text-color="white">
                    Latest
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    To all the WOMEN of the world
                  </h3>
                  <p>
                    Awesome women shared their thoughts about #iwd2022, gender bias, and empowering each other.
                  </p>
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/"
                    elevation="0"
                  >
                  <n-link class="nav-link" style="text-decoration:none;color:white;" nuxt to="/to-all-the-women-of-the-world"> <span>Explore this project</span> <i class="mdi mdi-arrow-right"></i> </n-link>
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
