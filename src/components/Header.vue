<template>
  <header>
    <img data-aos="fade-up" :src="companyLogo" alt="Curiosity Interactive" />
    <div class="video-container">
      <video autoplay loop muted :src="headerVideo" type="video/mp4"></video>
    </div>
    <a href="#" v-scroll-to="'#about'"><i class="fas fa-angle-down arrow"></i></a>
  </header>
</template>

<script>
import image from "../assets/curiosity-logo.png";
import video from "../assets/header.mp4";

export default {
  name: "Header",
  data() {
    return {
      companyLogo: image,
      headerVideo: video,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

header img {
  color: $light-color;
  z-index: 1;
  opacity: 0.8;
  width: 40%;
}

.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}

@media (max-width: 766px) {
  header img {
    width: 60%;
  }
}

@media (min-width: 767px) and (max-width: 1024px) {
  header img {
    width: 60%;
  }
}
</style>>

