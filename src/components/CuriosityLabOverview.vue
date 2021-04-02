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
      <div class="eyeClick" data-aos="flip-up" data-aos-delay="300">
        <router-link
          :to="{
            name: 'curiosity-lab',
          }"
          ><i class="icon-eye-open eye"></i
        ></router-link>
      </div>
    </div>
  </section>
</template>

<script>
//Assets
import video from "../assets/home_curiosity-lab.mp4";

export default {
  name: "CuriosityLabOverview",
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
    width: 80%;

    .eyeClick {
      margin-top: 5vh;
    }

    h2 {
      @include nexa-book($fontsizeTitlePC);
    
    }
  }
}

@media (max-width: 390px) {
  section .container {
    h2 {
      font-size: $fontsizeTitleMiniPhone;
    }
  }
}

@media (min-width: 391px) and (max-width: 766px) {
  section .container {
    h2 {
      font-size: $fontsizeTitlePhone;
    }
  }
}

@media (min-width: 767px) and (max-width: 1023px) {
  section .container {
    h2 {
      font-size: $fontsizeTitleIpad;
    }
  }
}
</style>

