<template>
  <div id="nav">
    <label>
      <input id="checkbox" type="checkbox" />
      <span class="menu">
        <span class="hamburger"></span>
      </span>
      <ul>
        <router-link
          :to="{
            name: 'home',
          }"
          ><li class="language">english</li></router-link
        >
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#about',
          }"
          ><li>à propos</li></router-link
        >
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#project',
          }"
          ><li>projet</li></router-link
        >
        <router-link
          @click="goHome"
          :to="{
            name: 'home',
            hash: '#curiosity-lab',
          }"
          ><li>curiosity lab</li></router-link
        >
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
  <router-view />
</template>

<script>
export default {
  methods: {
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

body {
  overflow-x: hidden;
  @include nexa-light(1rem);
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

::selection {
  color: rgb(255, 82, 82);
  background: rgb(91, 91, 255);
}

.parent {
  position: relative;

  .active-menu {
    position: fixed;
    color: $light-color;
    right: 33px;
    top: 55px;
    z-index: 3;
    transform: rotate(270deg);
    white-space: nowrap;
    text-align: left;
    transform-origin: right;
    text-transform: uppercase;
    @extend .gradient-animation-values-text;
    @include animation("bgposition 10s infinite");
  }
}

label {
  .menu {
    position: fixed;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    border-radius: 50% 50% 50% 50%;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .logo-img {
    position: fixed;
    top: 0;
    right: 0;
    width: 75px;
    display: block;
    z-index: 3;

    path {
      fill: white;
    }
  }
  .hamburger {
    @extend .gradient-animation-values-shape;
    @include animation("bgposition 10s infinite");
    position: absolute;
    top: 135px;
    left: 50px;
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
      width: 100%;
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
  input:checked + .menu{
    box-shadow: 0 0 0 100vw $dark-color, 0 0 0 100vh $dark-color;
    border-radius: 0;
    background: $dark-color;

    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }

      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

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
    .language {
      font-size: 1rem;
      padding-bottom: 10px;
    }
  }

  .router-link-exact-active {
    color: $light-color;
  }

  @media (max-width: 766px) {
    ul a {
      font-size: $fontsizeTitlePhone;
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    ul a {
      font-size: $fontsizeTitleIpad;
    }
  }
}
</style>

