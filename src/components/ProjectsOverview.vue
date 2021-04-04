<template>
  <section id="projects">
    <!-- For loop to display the projects -->
    <section v-for="(projectsItem, index) in projectData" :key="index">
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          :src="require('../assets/projects/' + projectsItem.videoBGLoc)"
          type="video/mp4"
        ></video>
      </div>
      <div class="info">
        <!-- Project Title -->
        <h2 data-aos="fade-up" data-aos-delay="100">
          {{ projectsItem.projectName }}
        </h2>
        <!-- Eye -->
        <div class="eyeClick" data-aos="flip-up" data-aos-delay="300">
          <router-link
            :to="{
              name: 'projects',
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
            ><i class="icon-eye-open eye"></i
          ></router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    projectData() {
      return this.$store.state.projectsItems;
    },
  },
};
</script>

<style lang="scss" scoped>
#projects {
  .info {
    width: 80%;
  }
  .eyeClick {
    margin-top: 5vh;
  }
  h2 {
    @include nexa-book($fontsizeTitlePC);
  }
}

@media (max-width: 390px) {
  #projects {
    .info {
      h2 {
        font-size: $fontsizeTitleMiniPhone;
      }
    }
  }
}

@media (min-width: 391px) and (max-width: 766px) {
  #projects {
    .info {
      h2 {
        font-size: $fontsizeTitlePhone;
      }
    }
  }
}

@media (min-width: 767px) and (max-width: 1023px) {
  #projects {
    .info {
      h2 {
        font-size: $fontsizeTitleIpad;
      }
    }
  }
}
</style>