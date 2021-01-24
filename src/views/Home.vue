<template>
  <div classe="home">
    <!-- Components -->
    <Header />
    <About />
    <ProjectsOverview />
    <CuriosityLabOverview />
    <Contact />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import CuriosityLabOverview from "@/components/CuriosityLabOverview.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Header,
    About,
    ProjectsOverview,
    CuriosityLabOverview,
    Contact
  }
};
</script>

