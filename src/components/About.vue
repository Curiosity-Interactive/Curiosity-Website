<template>
  <section id="about">
    <div class="statement">
      <div class="container">
        <!-- Mission statement -->
        <h3 data-aos="fade-up" data-aos-delay="100">
          Embellir le quotidien et émerveiller l'esprit baladeur
        </h3>
        <!-- Mission one liner -->
        <p data-aos="fade-up" data-aos-delay="200">
          <span>Curiosity Interactive</span> est un studio de création
          multimédia offrant des services de production d’expériences
          interactives immersives pour des fins de marketing, de design
          architectural et de visibilité numérique dans l’espace public.
        </p>
      </div>
    </div>
  </section>
  <section class="vision">
    <div class="video-container">
      <video autoplay loop muted :src="aboutVideo" type="video/mp4"></video>
    </div>
    <div class="container">
      <h1 data-aos="fade-up" data-aos-delay="100">Notre vision</h1>

      <div class="grid-container">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="grid-item-left first-item"
        >
          <p>
            Inscrit dans notre ADN, travailler en équipe et co-créer nous
            permettent d'explorer l’art numérique et d'innover pour créer des
            œuvres multimédias interactives <span>intuitives et ludiques</span>.
          </p>
        </div>
        z
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="grid-item-right second-item"
        >
          <p>
            Chez Curiosity, nous voulons mettre
            <span>l’humain au cœur des processus</span> de création en
            valorisant un volet d’accessibilité universelle afin que tous
            puissent en profiter.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="grid-item-left third-item"
        >
          <p>
            Nous souhaitons grandir dans l’inclusion en
            <span>favorisant la collaboration</span> du concept à la livraison.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="grid-item-right fourth-item"
        >
          <p>
            Notre volonté est de <span>revitaliser les espaces</span> en leur
            donnant un nouveau souffle, aux moyens de l’art et de
            l'expérientiel.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import video from "../assets/home_about.mp4";

export default {
  name: "About",
  data() {
    return {
      aboutVideo: video,
    };
  },
};
</script>

<style lang="scss" scoped>
//Mission statement
#about {
  background: $light-color;
  color: $dark-color;
}
.statement {
  display: flex;
  flex-direction: column;

  .container {
    width: 80%;
    text-align: left;
    margin: 0 auto;
    height: auto;
  }

  h3 {
    @include nexa-book($fontsizeTitlePC);
    @extend .gradient-animation-values-text;
    @include animation("bgposition 12s infinite");
  }

  p {
    margin: 50px auto 0 auto;
    line-height: 2;
    font-size: $fontsizeTextPC;
  }
}

//Vision
.vision {
  background: $dark-color;
  color: $light-color;
  padding: 15vh 0;
  height: auto;

  h1 {
    @include nexa-book($fontsizeTitlePC);
    color: $light-color;
    text-align: left;
  }

  .container {
    width: 80%;

    .grid-container {
      width: 100%;
      text-align: left;

      .first-item {
        margin-top: 15vh;
        margin-bottom: 25vh;
      }

      .second-item,
      .third-item {
        margin-bottom: 25vh;
      }

      .grid-item-left {
        float: left;
        width: 50%;
        clear: both;
      }

      .grid-item-right {
        float: right;
        width: 50%;
        clear: both;
      }

      p {
        font-size: $fontsizeTextPC;
        line-height: 2;
        padding: 40px;
        color: $light-color;
        border: 2px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d);

        span {
          @include nexa-book($fontsizeTextPC);
          @extend .gradient-animation-values-text;
          @include animation("bgposition 5s infinite");
        }
      }
    }
  }
}

@media (max-width: 390px) {
  #about {
    //Mission statement
    .statement {
      padding: 10vh 0;
    }
    .container {
      h3 {
        font-size: $fontsizeTitleMiniPhone;
      }

      p {
        font-size: $fontsizeTextMiniPhone;
      }
    }
  }
  .vision {
    h1 {
      font-size: $fontsizeTitleMiniPhone;
    }
    .container .grid-container {
      .first-item {
        margin-top: 10vh;
        margin-bottom: 50px;
      }

      .second-item,
      .third-item {
        margin-bottom: 50px;
      }
      .grid-item-left,
      .grid-item-right {
        width: 100%;
        display: block;
        p {
          font-size: $fontsizeTextMiniPhone;
          padding: 20px;

          span {
            @include nexa-book($fontsizeTextMiniPhone);
          }
        }
      }
    }
  }
}

//Media query - PHONE
@media (min-width: 391px) and (max-width: 766px) {
  #about {
    //Mission statement
    .statement {
      padding: 10vh 0;
    }
    .container {
      h3 {
        font-size: $fontsizeTitlePhone;
      }

      p {
        font-size: $fontsizeTextPhone;
      }
    }
  }
  .vision {
    h1 {
      font-size: $fontsizeTitlePhone;
    }
    .container {
      .grid-container {
        .first-item {
          margin-top: 10vh;
          margin-bottom: 10vh;
        }
        .second-item,
        .third-item {
          margin-bottom: 10vh;
        }

        .grid-item-left,
        .grid-item-right {
          width: 100%;
          display: block;
          p {
            font-size: $fontsizeTextPhone;
            padding: 25px;

            span {
              @include nexa-book($fontsizeTextPhone);
            }
          }
        }
      }
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1023px) {
  //Mission statement
  #about {
    .statement .container {
      h3 {
        font-size: $fontsizeTitleIpad;
      }

      p {
        font-size: $fontsizeTextIpad;
      }
    }
  }
  .vision {
    h1 {
      font-size: $fontsizeTitleIpad;
    }
    .container .grid-container {
      .grid-item-left,
      .grid-item-right {
        width: 70%;
        display: block;

        p {
          font-size: $fontsizeTextIpad;

          span {
            @include nexa-book($fontsizeTextIpad);
          }
        }
      }
    }
  }
}
</style>

