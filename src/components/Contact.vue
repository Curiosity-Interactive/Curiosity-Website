<template>
  <section id="contact">
    <!-- Video background -->
    <div class="video-container">
      <video autoplay loop muted :src="contactVideo" type="video/mp4"></video>
    </div>
    <div class="container">
      <!-- One liner -->
      <h3 data-aos="fade-up" data-aos-delay="200">
        Vous êtes curieux d'en savoir plus ?
      </h3>
      <!-- Email -->
      <div data-aos="flip-up" data-aos-delay="300">
        <a class="courriel" :href="email">hello@curiosityinteractive.com</a>
      </div>
      <!-- Social Media -->
      <div class="socialMedia" data-aos="fade-up" data-aos-delay="300">
        <a target="_blank" :href="facebook"><i class="icon-facebook"></i></a>
        <a target="_blank" :href="vimeo"><i class="icon-play-sign"></i></a>
        <a target="_blank" :href="instagram"><i class="icon-instagram"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
//Assets
import video from "../assets/home_contact.mp4";

export default {
  name: "Contact",
  data() {
    return {
      contactVideo: video,
      email: "mailto:hello@curiosityinteractive.com",
      facebook: "https://www.facebook.com/CuriosityInteractive",
      vimeo: "https://vimeo.com/user130876201",
      instagram: "https://www.instagram.com/curiosityinteractive/?hl=en",
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  .container {
    width: 80%;
    text-align: center;

    //Title
    h3 {
      @include nexa-book($fontsizeTitlePC);
      color: $light-color;
    }

    //Email
    a {
      margin: 50px 0 15px 0;
      display: inline-block;
      font-size: $fontsizeTextPC;
      text-decoration: none;
      color: $light-color;
    }

    .courriel {
      padding: 20px 25px 15px 25px;
      border: solid 2px;
      border: 2px solid;
      border-image-slice: 1;
      border-width: 5px;
      border-color: white;

      background: linear-gradient(to left, transparent 50%, black 50%) right;
      background-size: 200%;
      transition: 0.5s ease-in-out;

      &:hover {
        background-position: left;
      }
    }

    //Social Medias
    .socialMedia {
      a {
        font-size: $fontsizeTitlePC;
        opacity: 0.5;
        margin-left: 50px;
        margin-right: 50px;
        transition: all 0.3s ease-in-out;

        &:hover {
          opacity: 1;
          color: $light-color;
          transform: scale(1.3);
        }
      }
    }
  }
}

//Media query - PHONE
@media (max-width: 390px) {
  section .container {
    h3 {
      font-size: $fontsizeTitleMiniPhone;
    }

    .socialMedia {
      a {
        margin-left: 30px;
        margin-right: 30px;
      }
    }

    .courriel {
      width: 100%;
      font-size: 0.8rem;
    }

    a i {
      font-size: $fontsizeTitleMiniPhone;
    }
  }
}

//Media query - PHONE
@media (min-width: 391px) and (max-width: 766px) {
  section .container {
    h3 {
      font-size: $fontsizeTitlePhone;
    }

    .socialMedia {
      a {
        margin-left: 30px;
        margin-right: 30px;
      }
    }

    .courriel {
      font-size: $fontsizeDescriptionPhone;
    }

    .socialMedia a i {
      font-size: $fontsizeTitlePhone;
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1023px) {
  section .container {
    h3 {
      font-size: $fontsizeTitleIpad;
    }

    .socialMedia a i {
      font-size: $fontsizeTitleIpad;
    }
  }
}
</style>

