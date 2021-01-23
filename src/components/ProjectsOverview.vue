<template>
  <div id="project">
    <section v-for="(projectsItem, index) in projectsItems" :key="index">
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          :src="projectsItem.videoUrl"
          type="video/mp4"
        ></video>
      </div>
      <div class="info">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {{ projectsItem.projectName }}
        </h2>
        <div data-aos="fade-up" data-aos-delay="100">
          <p>Vous êtes curieux?</p>
          <router-link
            :to="{
              name: 'project',
              params: {
                specProjectId: projectsItem.projectUrl,
                specProjectName: projectsItem.projectName,
                specProjectDescription: projectsItem.projectDescription,
                specProjectVimeoUrl: projectsItem.projectVimeoUrl,
                specProjectClientName: projectsItem.projectClientName,
                specProjectClientYear: projectsItem.projectClientYear,
                specProjectMembers: projectsItem.projectMembers,
                specProjectTechnologies: projectsItem.projectTechnologies,
                specProjectImages: projectsItem.projectImages,
              },
            }"
            data-aos="fade-up"
            data-aos-delay="50"
            class="far fa-eye eye"
          ></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import videoPenseesEnfouiesCover from "../assets/projects/pensees_enfouies/pensees_enfouies-video.mp4";

export default {
  name: "ProjectsOverview",
  data() {
    return {
      projectsItems: [
        {
          videoUrl: videoPenseesEnfouiesCover,
          projectUrl: "pensees-enfouies",
          projectName: "Pensées Enfouies",
          projectDescription:
            "L’Oeuvre des ­­Pensées enfouies est une installation interactive, visuelle et sonore qui explore les idées qui traversent l’esprit créatif. Elle nous plonge dans la tête d’un écrivain inconnu, qui depuis le premier jour du confinement, s’exerce à l’écriture de poèmes touchant à la vie quotidienne. Un recueil de poésie moderne et nouveau genre, qui implique l’utilisateur dans la découverte de l’autre. Une incursion dans les pensées de l’autre, une connexion à ses émotions, une réflexion sur soi .",
          projectVimeoUrl:
            "https://player.vimeo.com/video/498800064?title=0&byline=0&portrait=0",
          projectClientName: "Mapp MTL, 5e Édition",
          projectClientYear: "2020 - Never Apart",
          projectMembers: [
            "Productrice créative - Camille Renaud",
            "Concepteur & poète - Christophe Godon",
            "Développeur interactif - Olivier Maurice",
          ],
          projectTechnologies: ["Touch Designer", "Max MSP", "Leap Motion"],
          projectImages: [
            "pensees_enfouies/photos/image0.jpg",
            "pensees_enfouies/photos/image1.jpg",
            "pensees_enfouies/photos/image2.jpg",
            "pensees_enfouies/photos/image3.jpg",
            "pensees_enfouies/photos/image4.jpg",
            "pensees_enfouies/photos/image5.jpg",
            "pensees_enfouies/photos/image6.jpg",
            "pensees_enfouies/photos/image7.jpg",
            "pensees_enfouies/photos/image8.jpg",
          ],
        },
      ],
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
  background: $dark-color;
  color: $light-color;
  text-align: center;
  @include nexa-book(2.5rem);

  .video-container {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }

  .info {
    position: absolute;

    div {
      p {
        @include nexa-light(1.7rem);
      }
      h2 {
        text-transform: capitalize;
      }
      .eye {
        cursor: pointer;
        color: $light-color;
        text-decoration: none;
        font-size: $fontsizeTextPC;
        transition: 0.5s ease-in-out;

        &:hover {
          transform: rotate(180deg);
        }
      }
    }
  }
}

@media (max-width: 766px) {
  section {
    font-size: 2.5rem;
  }
}
</style>