<template>
  <section>
    <h2>
      Curiosity offre des services de production d’expériences
      multi-sensorielles interactives alliant technologies et créations
      multimédias pour des fins de marketing, de design architectural et de
      visibilité numérique dans l’espace publique.
    </h2>
  </section>
</template>

<script>
export default {
  name: "Mission",
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

  h1 {
    position: absolute;
    top: 20px;
    left: 25px;
    @include lachata(1.5rem);
    @extend .gradient-animation-values-text;
    @include animation("bgposition 10s infinite");
  }

  h2 {
    width: 80%;
    text-align: center;
    line-height: 4rem;
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      font-size: 2em;
    }
  }
}
</style>>

