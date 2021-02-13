<template>
  <header>
    <!-- Company logo -->
    <img data-aos="fade-up" data-aos-delay="500" :src="companyLogo" alt="Curiosity Interactive" />
    <!-- Video background -->
    <div class="video-container">
      <video autoplay loop muted :src="headerVideo" type="video/mp4"></video>
    </div>
  </header>
</template>

<script>
//Assets
import image from "../assets/curiosity-logo.png";
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
    color: $light-color;
    z-index: 1;
    opacity: 0.8;
    width: 40%;
  }
}

//Media query - PHONE
@media (max-width: 766px) {
  header img {
    width: 70%;
    margin-top: 0;
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1024px) {
  header img {
    width: 60%;
  }
}
</style>>

