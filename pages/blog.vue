<template>
  <div>
      <Header1 />
      <Feature3 :feature="featuredBlog"/>
      <Blog :blogs="blogList" />
  </div>
</template>

<script>
import { blogs } from "@/data/blog";

import { mapGetters } from "vuex";
export default {
  name: "blog",
  data() {
    return {
      blogs,
      featuredBlog:{},
      blogList:[],
    };
  },

  components: {
    Header1: () => import("@/components/header/Header1"),
    Feature3: () => import("@/components/features/Feature3"),
    Blog: () => import("@/components/blogs/Blog"),
  },

  mounted() {
    this.featuredBlog={
        chip1:"Community",
        chip2:"Latest",
        title: this.blogs[0].title,
        shortDesc: this.blogs[0].desc,
        to: this.blogs[0].page,
        img: this.blogs[0].src,
      };

    this.blogList = blogs.slice(1,);
  },
};
</script>