<template>
  <section id="about">
    <div class="content">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Embellir le quotidien et émerveiller l’oeil baladeur
      </h2>
      <p data-aos="fade-up" data-aos-delay="200">
        <span>Curiosity Interactive</span> est un studio de création multimédia
        offrant des services de production d’expériences interactives immersives
        pour des fins de marketing, de design architectural et de visibilité
        numérique dans l’espace public.
      </p>
    </div>
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
  overflow: hidden;
  background-color: $dark-color;
  color: $light-color;

  .content {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  h2 {
    @include nexa-book(2.5rem);
    margin-bottom: 50px;
    @extend .gradient-animation-values-text;
    @include animation("bgposition 12s infinite");
  }
  p {
    margin: 0 auto;
    line-height: 3rem;
    font-size: 1.7rem;
  }

  @media (max-width: 766px) {
    
    h2 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
}
</style>>

