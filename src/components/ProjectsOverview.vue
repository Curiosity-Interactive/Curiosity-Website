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
      <div data-aos="fade-up" data-aos-delay="200" class="info">
        <h2>{{ projectsItem.projectName }}</h2>
        <div>
          <p>Vous êtes curieux? Cliquez sur l'oeil</p>
          <router-link
            :to="{
              name: 'project',
              params: {
                specProjectId: projectsItem.projectUrl,
                specProjectName: projectsItem.projectName,
                specProjectDescription: projectsItem.projectDescription,
              },
            }"
            class="far fa-eye eye"
          ></router-link>
        </div>
      </div>
      <i class="fas fa-angle-down arrow"></i>
      <h1 class="zoneTitle"><span>projet</span></h1>
    </section>
  </div>
</template>

<script>
import videoPenseesEnfouiesCover from "../assets/pensees_enfouies.mp4";

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
            "L’Oeuvre des ­­«Pensées enfouies» est une installation interactive, visuelle et sonore qui explore les idées qui traversent l’esprit créatif. Elle nous plonge dans la tête d’un écrivain inconnu, qui depuis le premier jour du confinement, s’exerce à l’écriture de poèmes touchant à la vie quotidienne. Un recueil de poésie moderne et nouveau genre, qui implique l’utilisateur dans la découverte de l’autre. Une incursion dans les pensées de l’autre, une connexion à ses émotions, une réflexion sur soi .",
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
  @include nexa-book($fontsizeTitlePC);

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
        @include nexa-light(1rem);
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