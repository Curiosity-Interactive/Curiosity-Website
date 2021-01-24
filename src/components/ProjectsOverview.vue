<template>
  <section id="project">
    <!-- For loop to display the projects -->
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
        <!-- Project Title -->
        <h2 data-aos="fade-up" data-aos-delay="100">
          {{ projectsItem.projectName }}
        </h2>
        <!-- Eye -->
        <div data-aos="flip-up" data-aos-delay="300">
          <router-link
            :to="{
              name: 'project',
              //Parameters for each project are sent to ProjectSpecific.vue
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
            class="far fa-eye eye"
          ></router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
//Assets
import videoPenseesEnfouiesCover from "../assets/projects/pensees_enfouies/pensees_enfouies-video.mp4";

export default {
  name: "ProjectsOverview",
  data() {
    return {
      projectsItems: [
        //PENSÉES ENFOUIES
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
        //INSERT PROJECT BY COPYING PREVIOUS PROJECT AND CHANGE VALUES
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#project {
  .info {
    h2 {
      @include nexa-book($fontsizeTitlePC);
    }
  }
}

//Media query - PHONE
@media (max-width: 766px) {
  #project {
    .info {
      h2 {
        font-size: $fontsizeTitlePhone;
      }
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1024px) {
  #project {
    .info {
      h2 {
        font-size: $fontsizeTitleIpad;
      }
    }
  }
}
</style>