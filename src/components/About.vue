<template>
  <section id="about">
    <div class="content">
      <!-- Mission statement -->
      <h3 data-aos="fade-up" data-aos-delay="100">
        Embellir le quotidien et émerveiller l’oeil baladeur
      </h3>
      <!-- Mission one liner -->
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
};
</script>

<style lang="scss" scoped>
#about {
  .content {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }

  //Mission statement
  h3 {
    @include nexa-book(2.5rem);
    @extend .gradient-animation-values-text;
    @include animation("bgposition 12s infinite");
  }

  //Mission one liner
  p {
    margin: 50px auto 0 auto;
    line-height: 4rem;
    font-size: $fontsizeTextPC;
  }

  //Media query - PHONE
  @media (max-width: 766px) {
    h3 {
      font-size: 1.7rem;
    }

    p {
      font-size: $fontsizeTextPhone;
      line-height: 3rem;
    }
  }

  //Media query - IPAD
  @media (min-width: 767px) and (max-width: 1024px) {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: $fontsizeTextIpad;
    }
  }
}
</style>

