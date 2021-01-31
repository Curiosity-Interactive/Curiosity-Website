<template>
  <div id="curiosityLabSpecific">
    <div class="container">
      <h1>Curiosity Lab</h1>
      <p>
        Entre deux projets, notre volonté est de propulser le potentiel des
        artistes en mettant à leur disposition des ressources, de l’aide pour
        réfléchir et trouver des concepts, du support en gestion et en leur
        donnant un contexte de création et une plateforme pour promouvoir leur
        travail.
      </p>
      <div>
        <a class="courriel" :href="email">Venez nous jaser!</a>
      </div>
    </div>

    <div class="container-lab">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        v-for="image in images"
        :key="image"
        class="project-lab"
      >
        <div class="project-item-lab">
          <div class="image">
            <img :src="require('../assets/lab/' + image.src)" />
          </div>
          <div class="caption">
            <div>{{ image.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  data() {
    return {
      email: "mailto:name@hello@curiosityinteractive.com",
      images: [
        { src: "lab_transition.jpg", title: "Transition" },
        { src: "lab_sound-sensitive.jpg", title: "Sound Sensitive" },
        { src: "lab_eye.jpg", title: "Eye" },
        { src: "lab_form-distorsion.jpg", title: "Form Distorsion" },
      ],
    };
  },

  //Scroll to Top when page is created
  created: function () {
    this.backToTop();
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
#curiosityLabSpecific {
  margin-top: 50px;
  position: relative;
  width: 100%;
  color: $dark-color;
  background: $light-color;

  .container {
    padding: 90px 0;
    width: 70%;
    margin: 0 auto;
    text-align: center;

    h1 {
      @include nexa-book($fontsizeTitlePC);
      @extend .gradient-animation-values-text;
      @include animation("bgposition 12s infinite");
    }

    p {
      margin-top: 35px;
      line-height: 3rem;
      font-size: $fontsizeTextPC;
    }

    a {
      margin-top: 40px;
      display: inline-block;
      font-size: $fontsizeTextPC;
      text-decoration: none;
      color: $dark-color;
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
        color: $light-color;
      }
    }
  }

  .container-lab {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 500px 500px;
    grid-gap: 10px;
    grid-auto-flow: dense;
    padding-bottom: 10px;

    .project-lab {
      .project-item-lab {
        width: 100%;
        height: 100%;
        position: relative;

        &:hover .image img {
          transform: scale(1.2);
        }

        &:hover .caption {
          opacity: 1;
          animation: move-down 0.3s linear;
          padding: 1em;
          width: 100%;
          text-align: center;
        }

        .image {
          width: 100%;
          height: 100%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            cursor: pointer;
            transition: 0.5s ease-in-out;
          }
        }

        .caption {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $light-color;
          @include nexa-book($fontsizeTextPC);
          pointer-events: none;
          z-index: 4;
          -webkit-backdrop-filter: blur(10px) saturate(1.8);
          backdrop-filter: blur(10px) saturate(1.8);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      h1 {
        font-size: $fontsizeTitleIpad;
      }

      p {
        font-size: $fontsizeTextIpad;
      }

      a {
        font-size: $fontsizeTextIpad;
      }
    }
    .container-lab {
      grid-template-columns: repeat(2, 1fr);
      .project-lab {
        .project-item-lab {
          .caption {
            font-size: $fontsizeTextIpad;
          }
        }
      }
    }
  }

  @media screen and (max-width: 766px) {
    .container {
      h1 {
        font-size: $fontsizeTitlePhone;
      }

      p {
        font-size: $fontsizeTextPhone;
      }

      a {
        font-size: $fontsizeTextPhone;
      }
    }
    .container-lab {
      grid-auto-rows: 400px 300px;
      grid-template-columns: repeat(1, 1fr);
      .project-lab {
        .project-item-lab {
          .caption {
            font-size: $fontsizeTextPhone;
          }
        }
      }
    }
  }

  @keyframes move-down {
    0% {
      top: 10%;
    }
    50% {
      top: 35%;
    }
    100% {
      top: 50%;
    }
  }
}
</style>