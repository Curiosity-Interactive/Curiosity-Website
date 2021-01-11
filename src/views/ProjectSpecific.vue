<template>
  <div id="projectSpecific">
    <div class="container">
      <div class="projectVideo">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/498800064?title=0&byline=0&portrait=0"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="projectDescription">
        <div class="mainInfo">
          <h1>{{ $route.params.specProjectName }}</h1>
          <div class="client">
            <h2 class="">Client</h2>
            <span class="bold"
              >2020 - Never Apart <br />Mapp MTL, 5e Édition</span
            >
          </div>
          <div class="team">
            <h2>Équipe</h2>
            <span class="teamMember"
              ><span>Productrice créative - </span
              ><span>Camille Renaud</span></span
            >
            <span class="teamMember"
              ><span>Concepteur & poète - </span
              ><span>Christophe Godon</span></span
            >
            <span class="teamMember"
              ><span>Développeur interactif - </span
              ><span>Olivier Maurice</span></span
            >
          </div>
        </div>
        <div class="description">
          <p>{{ $route.params.specProjectDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#projectSpecific {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  color: $dark-color;
  background: $light-color;

  .container {
    margin: 0 auto;

    .projectDescription {
      width: 80%;
      height: auto;
      margin: 100px auto;
      display: flex;
      line-height: 1.5;

      .mainInfo {
        width: 50%;
        display: flex;
        flex-direction: column;

        h1 {
          font-size: $fontsizeTextPC;
          @extend .gradient-animation-values-text;
          @include animation("bgposition 12s infinite");
          @include nexa-book($fontsizeTextPC);
          margin-bottom: 40px;
        }

        .bold {
          @include nexa-book(1em);
        }

        .team {
          margin-top: 20px;
          .teamMember {
            @include nexa-light(1rem);
            display: block;
            padding-bottom: 5px;

            span {
              display: inline-block;
            }
          }
        }
      }

      p {
        width: 100%;
        line-height: 2;
        font-size: 1.5rem;
      }
    }
  }
}

@media (min-width: 767px) and (max-width: 1024px) {
  p {
    font-size: 1.25rem !important;
    line-height: 2 !important;
  }
}

@media (max-width: 766px) {
  .projectDescription {
    display: block !important;
    text-align: center;

    .mainInfo {
      width: 100% !important;
    }

    .description {
      margin-top: 40px !important;
      font-size: $fontsizeTextPhone !important;
    }
  }
}
</style>>

