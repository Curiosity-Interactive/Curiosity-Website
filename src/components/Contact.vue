<template>
  <section id="contact">
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
    <footer>
      <span
        >Tous droits réservés © Curiosity Interactive - {{ currentYear }}</span
      >
    </footer>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      email: "mailto:hello@curiosityinteractive.com",
      facebook: "https://www.facebook.com/CuriosityInteractive",
      vimeo: "https://vimeo.com/user130876201",
      instagram: "https://www.instagram.com/curiosityinteractive/?hl=en",
    };
  },
};
</script>

<style lang="scss" scoped>
#contact {
  @extend .gradient-animation-values-shape;
  @include animation("bgposition 15s infinite");
}
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
      border: solid 1px;
      border: 1px solid;
      border-image-slice: 1;
      border-width: 5px;
      border-color: white;

      background: linear-gradient(to left, transparent 50%, white 50%) right;
      background-size: 200%;
      transition: 0.5s ease-in-out;

      &:hover {
        background-position: left;
        color: black;
      }
    }

    //Social Medias
    .socialMedia {
      a {
        font-size: $fontsizeTitlePC;
        opacity: 0.5;
        padding: 0 40px;
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
  section {
    footer span {
      font-size: 0.6rem;
    }
    .container {
      h3 {
        font-size: $fontsizeTitleMiniPhone;
      }

      .socialMedia {
        a {
          padding: 0 30px;
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
}

//Media query - PHONE
@media (min-width: 391px) and (max-width: 766px) {
  section .container {
    h3 {
      font-size: $fontsizeTitlePhone;
    }

    .socialMedia {
      a {
        padding: 0 30px;
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

