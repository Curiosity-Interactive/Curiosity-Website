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
        :class="[image.gridH, image.gridV]"
      >
        <div class="project-item-lab">
          <router-link
            :to="{
              name: 'curiosity-lab-projects',
              //Parameters for each project are sent to CuriosityLabProjects.vue
              params: {
                specProjectId: image.projectUrl,
                specProjectName: image.title,
                specProjectDescription: image.description,
                specProjectYear: image.year,
                specProjectTechnologies: image.technologies,
                specProjectCreators: image.creators,
                specProjectVimeoUrl: image.video,
                specProjectImages: image.projectImages,
              },
            }"
          >
            <div class="image">
              <img :src="require('../assets/lab/' + image.src)" />
            </div>
          </router-link>

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
        // Transition
        {
          projectUrl: "transition",
          src: "transition/lab_transition.jpg",
          title: "Transition",
          gridH: "h-5",
          gridV: "v-2",
          description:
            "Première exploration du logiciel Unreal. Création d'un environnement dans les montagnes, textures dynamiques et gestion d'un cycle soleil 24h, en accéléré. Ce paysage d'une nature immaculée nous transporte hors de nos quatre murs en ces temps de pandémie, histoire de nous faire rêver à notre prochain voyage.",
          year: "Septembre, 2020",
          technologies: ["Unreal", "Gaea", "Quixel Mixel", "Megascan"],
          creators: ["Olivier Maurice"],
          video:
            "https://player.vimeo.com/video/509308940?title=0&byline=0&portrait=0",
          projectImages: [
            "transition/images/image0.jpg",
            "transition/images/image1.jpg",
            "transition/images/image2.jpg",
            "transition/images/image3.jpg",
            "transition/images/image4.jpg",
          ],
        },

        // Sound-Sensitive
        {
          projectUrl: "sound-sensitive",
          src: "sound-sensitive/lab_sound-sensitive.jpg",
          title: "Sound Sensitive",
          gridH: "h-2",
          gridV: "v-2",
          description:
            "Exploration de la réaction visuelle par le son avec Touch Designer. Nous souhaitions créer de manière aléatoire une animation générative de notre logo. Merci à l'artiste Old Disciple pour la chanson Gentle Purp.",
          year: "Mai, 2020",
          technologies: ["Touch Designer"],
          creators: ["Curiosity Interactive"],
          video:
            "https://player.vimeo.com/video/509541254?title=0&byline=0&portrait=0",
          projectImages: [
            "sound-sensitive/images/image0.jpg",
            "sound-sensitive/images/image1.jpg",
            "sound-sensitive/images/image2.jpg",
            "sound-sensitive/images/image3.jpg",
            "sound-sensitive/images/image4.jpg",
          ],
        },

        // Face cachée de la Lune
        {
          projectUrl: "face-cachee-de-la-lune",
          src: "eye/lab_eye.jpg",
          title: "Face cachée de la lune",
          gridH: "h-5",
          gridV: "v-2",
          description:
            "Et si la face cachée de la Lune n'était pas obscure mais en fait une discothèque spatiale? Cette expérience interactive a été notre première expérimentation avec la Leap Motion et l'isolation des articulations des doigts et de la main. Un poing fermé génère des couleurs alors qu'une main ouverte fait apparaître la face visible de la Lune, et la distance de la main affecte l'intensité de la lumière.",
          year: "Juillet, 2020",
          technologies: ["Touch Designer", "Leap Motion"],
          creators: ["Curiosity Interactive"],
          video:
            "https://player.vimeo.com/video/509541991?title=0&byline=0&portrait=0",
          projectImages: [
            "eye/images/image0.jpg",
            "eye/images/image1.jpg",
            "eye/images/image2.jpg",
            "eye/images/image3.jpg",
            "eye/images/image4.jpg",
            "eye/images/image5.jpg",
          ],
        },

        //Noise Art
        {
          projectUrl: "noise-art",
          src: "form-distorsion/lab_form-distorsion.jpg",
          title: "Noise Art",
          gridH: "h-3",
          gridV: "v-2",
          description:
            "Création d'une oeuvre d'art générative inspiré d'un mandala. Cette expérimentation a eu pour but de se familiariser avec le logiciel Touch Designer et entrait dans le cadre exploratoire de l'oeuvre Pensées Enfouies.",
          year: "Juin, 2020",
          technologies: ["Touch Designer"],
          creators: ["Curiosity Interactive"],
          video:
            "https://player.vimeo.com/video/509540115?title=0&byline=0&portrait=0",
          projectImages: [
            "form-distorsion/images/image0.jpg",
            "form-distorsion/images/image1.jpg",
            "form-distorsion/images/image2.jpg",
            "form-distorsion/images/image3.jpg",
            "form-distorsion/images/image4.jpg",
            "form-distorsion/images/image5.jpg",
          ],
        },

        // {
        //   projectUrl: "bixi",
        //   src: "bixi/lab_bixi.jpg",
        //   title: "Bixi",
        //   gridH: "h-2",
        //   gridV: "v-2",
        //   description:
        //     "Avril 2018, nous avons pitché sur l'appel d'offre Bixi du Partenariat du Quartier des Spectacles. Dans le cadre de ce projet, nous devions penser à la création d'une oeuvre physique mêlant technologies et mécanique et pouvant résister au climat hivernal. Le pitch a eu lieu durant le Colloque I.A.rt présenté au pavillon des Sciences SH de l'UQAM. Nous sommes arrivés deuxième sur huit groupes retenus.",
        //   year: "Avril, 2018",
        //   technologies: ["None"],
        //   creators: [
        //     "Curiosity Interactive",
        //     "Frederique Beetz",
        //     "Christophe Godon",
        //     "Nathanaël Lécaudé",
        //     "Chloé Wong",
        //     "Aurore Leloup",
        //   ],
        //   video:
        //     "https://player.vimeo.com/video/509308940?title=0&byline=0&portrait=0",
        //   projectImages: [
        //     "eye/images/image0.jpg",
        //     "eye/images/image1.jpg",
        //     "eye/images/image2.jpg",
        //     "eye/images/image3.jpg",
        //     "eye/images/image4.jpg",
        //     "eye/images/image5.jpg",
        //   ],
        // },
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
    padding: 60px 0;
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
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px 200px;
    grid-gap: 20px;
    grid-auto-flow: dense;
    padding: 0 0 50px 0;

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
          width: 75%;
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 0%;
          transform: translate(0%, -50%);
          color: $dark-color;
          @include nexa-book($fontsizeTextPC);
          pointer-events: none;
          z-index: 4;
          background: $light-color;
          padding: 20px 0 10px 10px;
          text-align: left;
          transition: 0.5s ease-in-out;
        }
      }
    }
    .v-1 {
      grid-column: span 1;
    }

    .v-2 {
      grid-column: span 2;
    }

    .v-3 {
      grid-column: span 3;
    }

    .v-4 {
      grid-column: span 4;
    }

    .v-5 {
      grid-column: span 5;
    }

    .h-1 {
      grid-row: span 1;
    }

    .h-2 {
      grid-row: span 2;
    }

    .h-3 {
      grid-row: span 3;
    }

    .h-4 {
      grid-row: span 4;
    }

    .h-5 {
      grid-row: span 5;
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
      grid-template-columns: repeat(4, 1fr);
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
      grid-auto-rows: 100px 200px;
      grid-template-columns: repeat(1, 1fr);
      .project-lab {
        .project-item-lab {
          .caption {
            font-size: $fontsizeTextPhone;
          }
        }
      }
      .h-1 {
        grid-row: span 2;
      }

      .h-2 {
        grid-row: span 2;
      }

      .h-3 {
        grid-row: span 2;
      }
      .h-3 {
        grid-row: span 2;
      }

      .h-4 {
        grid-row: span 2;
      }

      .h-5 {
        grid-row: span 2;
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