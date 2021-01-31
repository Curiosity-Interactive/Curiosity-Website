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
        <a target="_blank" :href="facebook"><i class="fab fa-facebook"></i></a>
        <a target="_blank" :href="vimeo"><i class="fab fa-vimeo-v"></i></a>
        <a target="_blank" :href="instagram"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
//Assets
import video from "../assets/contact.mp4";

export default {
  name: "Contact",
  data() {
    return {
      contactVideo: video,
      email: "mailto:name@hello@curiosityinteractive.com",
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
    width: 70%;

    //Title
    h3 {
      @include nexa-book(2.5rem);
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
      border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
      background: linear-gradient(to left, transparent 50%, black 50%) right;
      background-size: 201%;
      transition: 0.5s ease-in-out;

      &:hover {
        background-position: left;
      }
    }

    //Social Medias
    .socialMedia {
      a {
        padding: 0 20px;

        i {
          transition: 0.3s ease-in-out;

          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
  }
}

//Media query - PHONE
@media (max-width: 766px) {
  section .container {
    width:95%;
    h3 {
      font-size: 1.7rem;
      width: 70%;
      margin: 0 auto;
    }

    .courriel {
      font-size: $fontsizeTextPhone;
    }

    .socialMedia a i {
      font-size: 1.7rem;
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1024px) {
  section .container {
    h3 {
      font-size: 2rem;
    }

    .socialMedia a i {
      font-size: 2rem;
    }
  }
}
</style>

