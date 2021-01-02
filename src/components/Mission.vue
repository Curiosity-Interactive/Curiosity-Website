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
  overflow: hidden;

  h1 {
    position: absolute;
    top: 2%;
    left: 2%;
    font-family: "Lachata", Helvetica, sans-serif;
    font-size: 1em;
    background: linear-gradient(238deg, #333399, #ff6699, #006699);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-animation: AnimationName 12s ease infinite;
    -moz-animation: AnimationName 12s ease infinite;
    animation: AnimationName 12s ease infinite;
    background-size: 200% auto;
  }

  h2 {
    width: 80%;
    text-align: center;
    line-height: 4rem;
    font-size: 2.5rem;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 35%;
    }
    50% {
      background-position: 100% 66%;
    }
    100% {
      background-position: 0% 35%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 35%;
    }
    50% {
      background-position: 100% 66%;
    }
    100% {
      background-position: 0% 35%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 35%;
    }
    50% {
      background-position: 100% 66%;
    }
    100% {
      background-position: 0% 35%;
    }
  }
}
</style>>

