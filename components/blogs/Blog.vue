<template>
  <div>
    <div class="blog-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Blog Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Recent Blogs</h2>
              <p>
                Check out these events, reviews, experiments, features, and so on that I want to share with you and the community! 
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Blog
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
          <v-col v-for="blog in blogs" :key="blog.title" cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <a :to="blog.page">
                  <v-img
                    :src="blog.src"
                    alt="blog"
                    class="blog-img"
                    cover
                  />
                </a>
                <div class="date-badge bg-info-grediant">
                  {{blog.date[0]}} <span>{{blog.date[1]}}</span>
                </div>
              </div>
              <div>
                <p
                :to="blog.page"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                  >{{blog.title}}</p
                >
                <p class="mt-10 mb-10">
                  {{blog.desc}}
                </p>
                <v-btn
                  :to="blog.page"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Read <i class="mdi mdi-arrow-right"></i>
              </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  props:{
    blogs: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.blog-img {
  height:250px;
}
</style>
