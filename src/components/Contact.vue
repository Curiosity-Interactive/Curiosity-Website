<template>
  <section id="contact">
    <!-- <h1 class="zoneTitle"><span>à propos</span></h1> -->
    <div class="video-container">
      <video autoplay loop muted :src="contactVideo" type="video/mp4"></video>
    </div>
    <div data-aos="fade-up" data-aos-delay="200" class="container">
      <h2>
        Vous êtes curieux d'en savoir plus ?
      </h2>
      <a data-aos="flip-up" data-aos-delay="400" class="courriel" :href="email"
        >hello@curiosityinteractive.com</a
      >
      <div class="socialMedia">
        <a target="_blank" :href="facebook"><i class="fab fa-facebook"></i></a>
        <a target="_blank" :href="vimeo"><i class="fab fa-vimeo-v"></i></a>
        <a target="_blank" :href="instagram"><i class="fab fa-instagram"></i></a>
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
      facebook: "https://www.facebook.com/CuriosityInteractive",
      vimeo: "https://vimeo.com/user130876201",
      instagram: "https://www.instagram.com/curiosityinteractive/?hl=en"
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

  .video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }

  .container {
    width: 80%;
    text-align: center;

    h2 {
    
      font-size: 2.5rem;
      color: $light-color;
    }

    a {
      margin: 50px 0 0 0;
      display: inline-block;
      font-size: 1.7rem;
      text-decoration: none;
      padding: 0 20px;
      color: $light-color;
    }

    .courriel {
      padding: 20px 25px 15px 25px;
      border: solid $light-color 2px;

      background: linear-gradient(to left, transparent 50%, black 50%) right;
      background-size: 200%;
      transition: 0.5s ease-in-out;

      &:hover {
        background-position: left;
        border-color: $dark-color;
      }
    }

    .socialMedia {
  
      color: white;
      

      a i {
        font-size: $fontsizeTextPC;
        transition: 0.3s ease-in-out;

        &:hover {
          transform: scale(1.3)
        } 
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

