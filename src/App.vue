<template>
  <div id="app">
    <Menu />
    <Header />
    <Mission />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";
import Mission from "./components/Mission.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Menu,
    Header,
    Mission,
  },
  methods: {},
};
</script>

<style>
@font-face {
  font-family: "Nexa";
  src: local("Nexa"), url(./font/NexaBook.otf) format("opentype");
}

@font-face {
  font-family: "Lachata";
  src: local("Lachata"), url(./font/La-chata-normal.ttf) format("truetype");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.4;
  overflow-x: hidden;
  font-family: "Nexa", Helvetica, Arial;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(238deg, #333399, #ff6699, #006699);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 12s ease infinite;
  -moz-animation: AnimationName 12s ease infinite;
  animation: AnimationName 12s ease infinite;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 35%;
  }
  50% {
    background-position: 100% 66%;
  }
  100% {
    background-position: 0% 35%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 35%;
  }
  50% {
    background-position: 100% 66%;
  }
  100% {
    background-position: 0% 35%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 35%;
  }
  50% {
    background-position: 100% 66%;
  }
  100% {
    background-position: 0% 35%;
  }
}
</style>
