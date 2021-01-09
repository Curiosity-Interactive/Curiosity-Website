<template>
  <div classe="home">
    <Header />
    <About />
    <ProjectsOverview />
    <Contact />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    About,
    ProjectsOverview,
    Contact
  },
  methods: {},
};
</script>

<style lang="scss">
</style>

