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
        <router-link
          :to="{
            name: 'project',
            params: {
              projectId: projectsItem.projectName,
            },
          }"
          class="far fa-eye eye"
        ></router-link>
      </div>
      <i class="fas fa-angle-down arrow"></i>
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
          projectName: "pensees-enfouies",
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
  @include nexafont($fontsizeTitlePC);

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

@media (max-width: 766px) {
  section {
    font-size: 2.5rem;
  }
}
</style>