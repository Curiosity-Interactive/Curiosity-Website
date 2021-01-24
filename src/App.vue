<template>
  <div id="nav">
    <!-- Logo miniature in header -->
    <img :src="companyMiniLogo" />
    <!-- Menu -->
    <label>
      <!-- Hamburger -->
      <input id="checkbox" type="checkbox" />
      <span class="menu">
        <span class="hamburger"></span>
      </span>
      <ul>
        <!-- Language -->
        <router-link
          :to="{
            name: 'home',
          }"
          ><li class="language">english</li></router-link
        >
        <!-- Home -->
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#about',
          }"
          ><li>à propos</li></router-link
        >
        <!-- Project -->
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#project',
          }"
          ><li>projet</li></router-link
        >
        <!-- Curiosity Lab -->
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#curiosity-lab',
          }"
          ><li>curiosity lab</li></router-link
        >
        <!-- Contact -->
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#contact',
          }"
          ><li>contact</li></router-link
        >
      </ul>
    </label>
  </div>
  <!-- View Home page -->
  <router-view />
  <!-- Footer -->
  <footer>
    <span
      >Tous droits réservés © Curiosity Interactive - {{ currentYear }}</span
    >
  </footer>
</template>

<script>
//Mini logo
import image from "./assets/curiosity-logo-mini.png";

export default {
  data() {
    return {
      companyMiniLogo: image,
      //Get current year for footer
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    //Close Menu when item clicked
    goHome() {
      this.$router.push("/");
      document.getElementById("checkbox").checked = false;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  @include nexa-light(1rem);
  background: $dark-color;
}

//Fonts
@font-face {
  font-family: "Nexa-book";
  src: local("Nexa-book"), url(./font/NexaBook.otf) format("opentype");
}

@font-face {
  font-family: "Nexa-light";
  src: local("Nexa-light"), url(./font/NexaLight.otf) format("opentype");
}

@font-face {
  font-family: "Lachata";
  src: local("Lachata"), url(./font/La-chata-normal.ttf) format("truetype");
}

//Scroll bar
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

//Text selection color change
::selection {
  color: rgb(255, 82, 82);
  background: rgb(91, 91, 255);
}

//Footer
footer {
  background: $dark-color;
  color: $light-color;
  padding: 20px 0;
  text-align: center;

  span {
    font-size: 1rem;
    opacity: 0.5;
  }
}

//Menu
#nav {
  //Company logo
  img {
    width: 25px;
    height: auto;
    position: fixed;
    top: 10px;
    left: 15px;
    z-index: 200;
  }

  //Header black
  label {
    .menu {
      position: fixed;
      left: 0;
      top: 0;
      background: $dark-color;
      z-index: 100;
      width: 100%;
      height: 50px;
      transition: 0.2s ease-in-out;
      cursor: pointer;
    }

    //Hamburger
    .hamburger {
      @extend .gradient-animation-values-shape;
      @include animation("bgposition 10s infinite");
      position: absolute;
      top: 23px;
      right: 15px;
      width: 30px;
      height: 4px;
      display: block;
      transform-origin: center;
      transition: 0.2s ease-in-out;

      &:after,
      &:before {
        @extend .gradient-animation-values-shape;
        @include animation("bgposition 12s infinite");
        transition: 0.2s ease-in-out;
        content: "";
        position: absolute;
        display: block;
        width: 20px;
        height: 100%;
      }
      &:before {
        top: -10px;
      }
      &:after {
        bottom: -10px;
      }
    }
    input {
      display: none;
    }

    //Hamburger animation
    input:checked + .menu {
      box-shadow: 0 0 0 100vw $dark-color, 0 0 0 100vh $dark-color;
      border-radius: 0;
      background: $dark-color;
      width: 100%;

      .hamburger {
        transform: rotate(45deg);

        &:after {
          transform: rotate(90deg);
          width: 30px;
          bottom: 0;
        }

        &:before {
          transform: rotate(90deg);
          width: 30px;
          top: 0;
        }
      }
    }

    //When Hamburger clicked, display menu
    input:checked + .menu + ul {
      opacity: 1;
      visibility: visible;
    }

    ul {
      z-index: 200;
      line-height: 4rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.25s 0s ease-in-out;
      list-style: none;
      text-align: center;
      visibility: hidden;

      //Links style and animation
      a {
        @include lachata($fontsizeTitlePC);
        margin-bottom: 0.5em;
        display: block;
        color: $light-color;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        user-select: none;
        opacity: 0.3;
        transition: opacity 0.5s ease-in-out;
        transition: transform 0.2s ease-in-out;
      }

      a:hover {
        opacity: 1;
        transform: scale(1.2);
        @extend .gradient-animation-values-text;
        @include animation("bgposition 12s infinite");
      }

      //Specific size for language
      .language {
        font-size: 1rem;
        padding-bottom: 10px;
      }
    }
  }

  //Media query - PHONE
  @media (max-width: 766px) {
    a {
      font-size: 2rem !important;
    }
  }

  //Media query - IPAD
  @media (min-width: 767px) and (max-width: 1024px) {
    a {
      font-size: 2.5rem !important;
    }
  }
}
</style>

