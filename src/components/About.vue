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
        <div data-aos="fade-up" data-aos-delay="300" class="grid-item-left">
          <p>
            Inscrit dans notre ADN, travailler en équipe et co-créer nous
            permettent d'explorer l’art numérique et d'innover pour créer des
            œuvres multimédias interactives <span>intuitives et ludiques</span>.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="grid-item-right">
          <p>
            Chez Curiosity, nous voulons mettre
            <span>l’humain au cœur des processus</span> de création en
            valorisant un volet d’accessibilité universelle afin que tous
            puissent en profiter.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="grid-item-left">
          <p>
            Nous souhaitons grandir dans l’inclusion en favorisant la
            collaboration à son meilleur. Nous voulons relever des défis, mais
            par dessus tout, <span>avoir du plaisir</span> du concept à la
            livraison.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="grid-item-right">
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
import video from "../assets/about.mp4";

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
  background: $dark-color;
  color: $light-color;
}
.statement {
  display: flex;
  flex-direction: column;


  .container {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }

  h3 {
    width: 100%;
    @include nexa-book(2.5rem);
    @extend .gradient-animation-values-text;
    @include animation("bgposition 12s infinite");
  }

  p {
    width: 100%;
    margin: 50px auto 0 auto;
    line-height: 4rem;
    font-size: $fontsizeTextPC;
  }
}

//Vision
.vision {
  background: $dark-color;
  color: $light-color;
  padding: 100px 0;
  height: auto;

  h1 {
    @include nexa-book($fontsizeTitlePC);
    color: $light-color;
  }

  .container {
    width: 70%;

    .grid-container {
      width: 100%;
      text-align: center;

      .grid-item-left {
        float: left;
        width: 50%;
        clear: both;
        margin: 20vh 0;
      }

      .grid-item-right {
        float: right;
        width: 50%;
        clear: both;
      }

      p {
        font-size: $fontsizeDescriptionPC;
        line-height: 2;
        padding: 40px;
        color: $light-color;
        border: 2px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d);

        span {
          @include nexa-book($fontsizeDescriptionPC);
          @extend .gradient-animation-values-text;
          @include animation("bgposition 5s infinite");
        }
      }
    }
  }
}

//Media query - PHONE
@media (max-width: 766px) {
  #about {
    //Mission statement
    .statement .container {
      h3 {
        font-size: 1.7rem;
      }

      p {
        font-size: $fontsizeDescriptionPhone;
        line-height: 3rem;
      }
    }
  }
  .vision {
    h1 {
      font-size: $fontsizeTitlePhone;
      margin-bottom: 50px;
    }
    .container .grid-container {
      .grid-item-left,
      .grid-item-right {
        width: 100%;
        display: block;
        p {
          font-size: $fontsizeDescriptionPhone;

          span {
            @include nexa-book($fontsizeDescriptionPhone);
          }
        }
      }

      .grid-item-left {
        margin: 5vh 0;
      }

      .grid-item-right {
        margin: 0;
      }
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1024px) {
  //Mission statement
  #about {
    .statement .container {
      h3 {
        font-size: 1.7rem;
      }

      p {
        font-size: $fontsizeTextIpad;
        line-height: 3rem;
      }
    }
  }
  .vision {
    h1 {
      font-size: $fontsizeTitleIpad;
      margin-bottom: 30px;
    }
    .container .grid-container {
      .grid-item-left,
      .grid-item-right {
        width: 100%;
        display: block;

        p {
          font-size: $fontsizeTextIpad;

          span {
            @include nexa-book($fontsizeTextIpad);
          }
        }
      }

      .grid-item-left {
        margin: 10vh 0;
      }

      .grid-item-right {
        margin: 0;
      }
    }
  }
}
</style>

