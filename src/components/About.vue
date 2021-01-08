<template>
  <section>
    <h2 data-aos="fade-up" data-aos-delay="200">
      <span>Curiosity Interactive</span> offre des services de production
      d’expériences multi-sensorielles interactives alliant technologies et
      créations multimédias pour des fins de marketing, de design architectural
      et de visibilité numérique dans l’espace publique.
    </h2>
    <a href="#" v-scroll-to="'#project'"
      ><i class="fas fa-angle-down arrow"></i
    ></a>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
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
  background-color: $dark-color;
  color: $light-color;

  h2 {
    width: 70%;
    text-align: center;
    line-height: 4rem;
    font-size: $fontsizeTextPC;

    span {
      @extend .gradient-animation-values-text;
      @include animation("bgposition 12s infinite");
    }
  }

  @media (max-width: 766px) {
    h2 {
      font-size: $fontsizeTextPhone;
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    h2 {
      font-size: $fontsizeTextIpad;
    }
  }
}
</style>>

