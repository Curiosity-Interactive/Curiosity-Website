<template>
  <section v-for="projectsItem in projectsItems" v-bind:key="projectsItem">
    <div class="videoContainer">
      <video
        autoplay
        loop
        muted
        :src="projectsItem.videoUrl"
        type="video/mp4"
      ></video>
    </div>
    <div class="info">
      <h2>{{ projectsItem.projectName }}</h2>
      <i class="far fa-eye"></i>
    </div>
    <a href="#contact"><i class="fas fa-angle-down arrow"></i></a>
  </section>
</template>

<script>
import video from "../assets/pensees_enfouies.mp4";

export default {
  name: "Projects",
  data() {
    return {
      projectsItems: [
        { id: 1, videoUrl: video, projectName: "pensées enfouies" },
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
  @include nexafont(3.5rem);

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
    i {
      font-size: 3rem;
    }
  }
}

@media (max-width: 766px) {
  section {
    font-size: 2.5rem;
  }
}
</style>