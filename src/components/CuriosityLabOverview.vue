<template>
  <section id="curiosity-lab-overview">
    <div class="video-container">
      <video
        autoplay
        loop
        muted
        :src="curiosityLabVideo"
        type="video/mp4"
      ></video>
    </div>
    <div data-aos="fade-up" data-aos-delay="200" class="container">
      <h2>Curiosity Lab</h2>
      <p class="far fa-eye eye"></p>
    </div>
  </section>
</template>

<script>
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: $light-color;
  @include nexa-book(2.5rem);

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

  .container {
    width: auto;
    text-align: center;
    

    p {
      cursor: pointer;
      color: $light-color;
      text-decoration: none;
      transition: 0.5s ease-in-out;
      @extend .gradient-animation-values-shape;
    @include animation("bgposition 12s infinite");
    border-radius: 50%;
    padding : 15px;
    font-size: 3rem;

      &:hover {
        transform: rotate(180deg);
      }
    }
    h2 {
      font-size: 3rem;
      padding: 15px;
    }
  }

  @media (max-width: 766px) {
    .container {
      h2 {
        font-size: $fontsizeTextPhone;
      }
    }

    @media (min-width: 767px) and (max-width: 1024px) {
      .container {
        h2 {
          font-size: $fontsizeTextIpad;
        }
      }
    }
  }
}
</style>

