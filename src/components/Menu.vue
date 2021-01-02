<template>
  <label>
    <input type="checkbox" />
    <span class="menu">
      <span class="hamburger"></span>
    </span>
    <ul>
      <li>
        <a href="#">Projets</a>
      </li>
      <li>
        <a href="#">Mission</a>
      </li>
      <li>
        <a href="#">curiosity lab</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a class="language" href="#">english</a>
      </li>
    </ul>
  </label>
</template>

<script></script>

<style lang="scss" scoped>
$menuColor: #000000;
$text-color: white;

label {
  .menu {
    position: fixed;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    background: black;
    border-radius: 50% 50% 50% 50%;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
  .hamburger {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 4px;
    display: block;
    transform-origin: center;
    transition: 0.2s ease-in-out;
    background: linear-gradient(238deg, #333399, #ff6699, #006699);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 12s ease infinite;
    -moz-animation: AnimationName 12s ease infinite;
    animation: AnimationName 12s ease infinite;

    &:after,
    &:before {
      transition: 0.2s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(238deg, #333399, #ff6699, #006699);
      background-size: 600% 600%;

      -webkit-animation: AnimationName 12s ease infinite;
      -moz-animation: AnimationName 12s ease infinite;
      animation: AnimationName 12s ease infinite;
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
    box-shadow: 0 0 0 100vw $menuColor, 0 0 0 100vh $menuColor;
    border-radius: 0;
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
      font-family: "Lachata", Helvetica, sans-serif;
      margin-bottom: 0.5em;
      font-size: 4rem;
      display: block;
      color: $text-color;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      user-select: none;
      opacity: 0.3;
      transition: opacity 0.5s ease-out;
      transition: font-size 0.3s ease-out;
    }

    .language {
      font-size: 1rem;
    }

    .language:hover {
      font-size: 2rem;
    }

    a:hover {
      opacity: 1;
      font-size: 5rem;
      background: linear-gradient(238deg, #333399, #ff6699, #006699);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      -webkit-animation: AnimationName 12s ease infinite;
      -moz-animation: AnimationName 12s ease infinite;
      animation: AnimationName 12s ease infinite;
      background-size: 200% auto;
    }
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

  @media only screen and (max-width: 1024px) {
    ul a {
      font-size: 2.5rem;
      margin-bottom: 1em;
    }

    ul a:hover {
      font-size: 3.5rem;
    }
  }
}
</style>