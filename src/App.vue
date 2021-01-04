<template>
  <div id="app">
    <Menu/>
    <Header id="header"/>
    <About id="about"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Menu,
    Header,
    About,
    Projects,
    Contact
  },
  methods: {},
};
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Nexa";
  src: local("Nexa"), url(./font/NexaBook.otf) format("opentype");
}

@font-face {
  font-family: "Lachata";
  src: local("Lachata"), url(./font/La-chata-normal.ttf) format("truetype");
}

body {
  overflow-x: hidden;
  @include nexafont(1rem);
}

#app {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;

  &-track {
    background: $dark-color;
  }
}

::-webkit-scrollbar-thumb {
  @extend .gradient-animation-values-shape;

  &:hover {
    background: #555;
  }
}
</style>

