<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Learning Vuetify </v-list-item-title>
          <v-list-item-subtitle> Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      class="app-header position-relative navbar-light header1"
      flat
    >
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
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Home </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/about-me"> About Me </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/work"> Work </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/advocacies"> Advocacies </n-link>
            </li>
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
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
    <!-- <v-app-bar color="grey-lighten-2" name="app-bar">

    </v-app-bar>

    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100">

      </div>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>

    <v-footer app name="footer">
      <v-btn class="mx-auto" variant="text">
        Get data
      </v-btn>
    </v-footer> -->
  </v-layout>
</template>

<script>
export default {
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>

<style></style>
