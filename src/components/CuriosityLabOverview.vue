<template>
  <section id="curiosity-lab-overview">
    <!-- Video background -->
    <div class="video-container">
      <video
        autoplay
        loop
        muted
        :src="curiosityLabVideo"
        type="video/mp4"
      ></video>
    </div>
    <div class="container">
      <!-- Title -->
      <h2 data-aos="fade-up" data-aos-delay="200">Curiosity Lab</h2>
      <!-- Eye -->
      <p data-aos="flip-up" data-aos-delay="300" class="far fa-eye eye"></p>
    </div>
  </section>
</template>

<script>
//Assets
import video from "../assets/curiosity-lab.mp4";

export default {
  name: "Curiosity-Lab",
  data() {
    return {
      curiosityLabVideo: video,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  .container {
    width: auto;

    h2 {
      @include nexa-book($fontsizeTitlePC);
      padding: 15px;
    }
  }
}
//Media query - PHONE
@media (max-width: 766px) {
  section .container {
    h2 {
      font-size: $fontsizeTitlePhone;
    }
  }
}

//Media query - IPAD
@media (min-width: 767px) and (max-width: 1024px) {
  section .container {
    h2 {
      font-size: $fontsizeTitleIpad;
    }
  }
}
</style>

