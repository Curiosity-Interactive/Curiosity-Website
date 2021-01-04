<template>
  <label>
    <input type="checkbox" />
    <span class="menu">
      <span class="hamburger"></span>
    </span>
    <ul>
      <li v-for="item in items" v-bind:key="item">
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </label>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "projets", url: "#projects" },
        { id: 2, name: "à propos", url: "#about" },
        { id: 3, name: "curiosity lab", url: "#curiositylab" },
        { id: 4, name: "contact", url: "#contact" },
        { id: 5, name: "english", url: "#english" }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
  input:checked + .menu {
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
      @include lachata(3.5rem);
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

    .language {
      font-size: 1rem;
    }

    a:hover {
      opacity: 1;
      transform: scale(1.2);
      @extend .gradient-animation-values-text;
      @include animation("bgposition 12s infinite");
    }
  }

  @media (max-width: 766px) {
    ul a {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    ul a {
      font-size: 3rem;
    }
  }
}
</style>