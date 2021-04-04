<template>
  <header>
    <!-- Company logo -->
    <img
      data-aos="fade-up"
      data-aos-delay="500"
      :src="companyLogo"
      alt="Curiosity Interactive"
    />
    <!-- Video background -->
    <div class="video-container">
      <video autoplay loop muted :src="headerVideo" type="video/mp4"></video>
    </div>
  </header>
</template>

<script>
//Assets
import image from "../assets/curiosity-logo_white.png";
import video from "../assets/home_header.mp4";

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
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: $dark-color;
  margin-top: 50px;

  //Company Logo
  img {
    margin-top: 50px;
    z-index: 1;
    opacity: 0.8;
    width: 600px;
  }
}

@media (max-width: 390px) {
  header img {
    width: 250px;
  }
}

@media (min-width: 391px) and (max-width: 766px) {
  header img {
    width: 300px;
  }
}

@media (min-width: 767px) and (max-width: 1023px) {
  header img {
    width: 500px;
  }
}
</style>>

