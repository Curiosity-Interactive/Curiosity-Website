<template>
  <section>
  
    <div class="video-container">
      <video autoplay loop muted :src="contactVideo" type="video/mp4"></video>
    </div>
    <div data-aos="fade-up" class="container">
      <h2>
        Vous avez un projet ? <br />
        Vous avez des idées ? <br />
        Vous êtes curieux d'en savoir plus ?
      </h2>
      <a data-aos="flip-up" class="courriel" :href="email">hello@curiosityinteractive.com</a>
      <div class="socialMedia">
        <a href=""><i class="fab fa-facebook"></i></a>
        <a href=""><i class="fab fa-vimeo-v"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
import video from "../assets/contact.mp4";

export default {
  name: "Contact",
  data() {
    return {
      contactVideo: video,
      email: "mailto:name@hello@curiosityinteractive.com",
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h1 {
    position: absolute;
    top: 20px;
    left: 25px;
    @include lachata($fontsizeTitlePC);
    @extend .gradient-animation-values-text;
    @include animation("bgposition 10s infinite");
  }

  .video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .container {
    width: 80%;
    text-align: center;

    h2 {
      line-height: 4rem;
      font-size: $fontsizeTextPC;
      color: $light-color;
    }

    a {
      margin: 50px 0 25px 0;
      display: inline-block;
      font-size: $fontsizeTextPC;
      text-decoration: none;
      padding: 0 20px;
      color: $light-color;
    }

    .courriel {
      padding: 20px 25px 15px 25px;
      border: solid $light-color 2px;
    }

    .socialMedia {
      @extend .gradient-animation-values-text;
      @include animation("bgposition 12s infinite");

      i {
        font-size: $fontsizeTextPC;
      }
    }
  }

  @media (max-width: 766px) {
    .container {
      h2 {
        font-size: $fontsizeTextPhone;
      }

      .courriel {
        font-size: $fontsizeTextPhone;
      }

      .socialMedia i {
        font-size: $fontsizeTextPhone;
      }
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    .container {
      h2 {
        font-size: $fontsizeTextIpad;
      }

      .socialMedia i {
        font-size: $fontsizeTextIpad;
      }
    }
  }
}
</style>>

