<template>
  <section>
    <h1>MISSION</h1>
    <h2>
      Nous sommes un jeune studio qui se spécialise dans les arts multimédias
      interactifs. Mettant de l'avant les engins en temps réels, nous visons à
      créer des expériences interactives qui permettent au public d'agir au
      coeur de même de l'histoire.
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
}
</style>>

