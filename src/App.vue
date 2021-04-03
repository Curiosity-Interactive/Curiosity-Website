<template>
  <div id="nav">
    <!-- Logo miniature in header -->
    <router-link
      @click="backToTop"
      :to="{
        name: 'home',
      }"
      ><img :src="companyMiniLogo"
    /></router-link>

    <!-- Menu -->
    <label>
      <!-- Hamburger -->
      <input id="checkbox" type="checkbox" />
      <span class="menu">
        <span class="hamburger"></span>
      </span>
      <ul>
        <!-- Language -->
        <!-- <router-link
          :to="{
            name: 'home',
          }"
          ><li class="language">english</li></router-link
        > -->
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
            hash: '#projects',
          }"
          ><li>projets</li></router-link
        >
        <!-- Curiosity Lab -->
        <router-link
          @click="goLab"
          :to="{
            name: 'curiosity-lab',
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
      isActive: false,
    };
  },
  methods: {
    //Close Menu when item clicked
    goHome() {
      this.$router.push("/");
      document.getElementById("checkbox").checked = false;
    },
    goLab() {
      document.getElementById("checkbox").checked = false;
    },
    backToTop() {
      window.scrollTo(0, 0);
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");

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
  color: $light-color;
  background:$dark-color;
  -webkit-text-fill-color: $light-color;
 
}

//Footer
footer {
  background: $dark-color;
  color: $light-color;
  height: 50px;
  text-align: center;
  padding-top: 10px;

  span {
    font-size: 0.7rem;
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
    top: 12px;
    left: 15px;
    z-index: 200;
    opacity: 0.9;
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
      transition: 0.1s ease-in-out;

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
      width: 100%;
      line-height: 5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.1s ease-in-out;
      list-style: none;
      text-align: center;
      visibility: hidden;
      margin-top: 20px;

      //Links style and animation
      a {
        @include lachata(4rem);
        margin-bottom: 0.2em;
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
      // .language {
      //   font-size: 1rem;
      //   padding-bottom: 10px;
      // }
    }
  }

  //Media query - PHONE
  @media (max-width: 390px) {
    ul {
      line-height: 2.5rem !important;
    }
    a {
      font-size: 2rem !important;
    }
  }

  @media (min-width: 391px) and (max-width: 766px) {
    ul {
      line-height: 3.5rem !important;
    }
    a {
      font-size: 3rem !important;
    }
  }

  //Media query - IPAD
  @media (min-width: 767px) and (max-width: 1023px) {
    ul {
      line-height: 4.5rem !important;
    }
    a {
      font-size: 3.5rem !important;
    }
  }
}
</style>

