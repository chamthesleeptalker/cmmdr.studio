<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app class="app-header position-relative navbar-light header1" flat>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <!-- <div class="logo">
          <NLink to="/">
            <v-img
              :src="require('@/assets/images/logos/purple-logo.png')"
              alt="logo"
            />
          </NLink>
        </div> -->

        <!-- <v-spacer></v-spacer> -->
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div class="navigation" v-bind:class="[isActive ? 'd-block' : '']" @click="isActive = !isActive">
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Home </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/about-me"> About Me </n-link>
            </li>
            <li class="nav-item" text>
              <n-link id="menu-activator" class="nav-link" nuxt to="/how-do-i-make"> My process </n-link>
              <v-menu id="menu-my-process" activator="#menu-activator" open-on-hover location="end bottom" origin="top end">
                <v-list>
                  <v-list-item  text>
                    <n-link nuxt to="/how-do-i-make#how-might-we" style="text-decoration: none;">Design thinking</n-link>
                  </v-list-item>
                  <v-list-item text>
                    <n-link nuxt to="/how-do-i-make#craft-data-viz-story" style="text-decoration: none;">Crafting impactful data viz & story</n-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/work"> Projects </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/blog"> Blog </n-link>
            </li>
            <!-- <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/community"> Community </n-link>
            </li> -->
            <!-- <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/community"> Community </n-link>
            </li> -->
            <!-- <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/blog"> Blog </n-link>
            </li> -->
          </ul>
        </div>
        <!-- login-regiter -->
        <!-- <v-btn
          class="d-none d-lg-flex btn-custom-nm ml-5"
          nuxt
          outlined
          color="primary"
          to="/"
          elevation="0"
        >
          Hire Me
        </v-btn> -->
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header1",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass: function (event) {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss">
.blog-img {
  height: 250px;
}

#menu-my-process {
  top: 70px;
}
</style>

