<template>
  <div id="projectSpecific">
    <div class="container">
      <div class="projectVideo">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            :src="$route.params.specProjectVimeoUrl"
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
      <div class="project-wrap">
        <div class="title" data-aos="fade-up" data-aos-delay="100">
          <h1>{{ $route.params.specProjectName }}</h1>
        </div>
        <div class="columns" data-aos="fade-up" data-aos-delay="200">
          <div class="left">
            <div class="block client">
              <h2>Client</h2>
              <span
                >{{ $route.params.specProjectClientName }}<br />{{
                  $route.params.specProjectClientYear
                }}</span
              >
              <hr />
            </div>
            <div class="block team">
              <h2>Équipe</h2>
              <span
                class="teamMember"
                v-for="member in $route.params.specProjectMembers"
                :key="member"
                >{{ member }}</span
              >
              <hr />
            </div>
            <div class="block technologies">
              <h2>Technologies</h2>
              <span
                v-for="technology in $route.params.specProjectTechnologies"
                :key="technology"
                >{{ technology }}</span
              >
            </div>
            <hr />
          </div>
          <div class="right">
            <h2>Description</h2>
            <div class="description">
              <p>{{ $route.params.specProjectDescription }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="images">
        <img
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="image in $route.params.specProjectImages"
          :key="image"
          :src="require('../assets/projects/' + image)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
#projectSpecific {
  margin-top: 50px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  color: $dark-color;
  background: $light-color;

  .container {
    margin: 0 auto;

    .images {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      padding: 0 5px;
      margin-bottom: 7px;
      overflow: hidden;

      img {
        max-width: 50%;
        height: auto;
        padding: 5px;
      }
    }

    .project-wrap {
      width: 80%;
      margin: 50px auto;
      line-height: 1.5;

      h2 {
        @include nexa-book(1rem);
        margin: 20px 0;
      }

      .block {
        margin-bottom: 30px;
      }

      .title h1 {
        width: 100%;
        @extend .gradient-animation-values-text;
        @include animation("bgposition 12s infinite");
        @include nexa-book($fontsizeTextPC);
      }

      .columns {
        width: 100%;
        display: flex;
        margin-top: 50px;

        .right {
          width: 100%;

          .description {
            font-size: 1.5rem;
            line-height: 2;
          }
        }

        hr {
          width: 70%;
          margin: 40px 0 10px 0;
        }
        .left {
          width: 100%;

          .team {
            .teamMember {
              display: block;
            }
          }
          .technologies {
            width: 80%;
            span {
              @extend .gradient-animation-values-shape;
              @include animation("bgposition 12s infinite");
              color: $light-color;
              padding: 5px 10px 0px 10px;
              margin: 0px 15px 10px 0;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  #projectSpecific {
    .container {
      .images {
        img {
          max-width: 100%;
        }
      }
      .project-wrap {
        text-align: center;
        .columns {
          display: block;

          hr {
            width: 100%;
          }

          .left {
            .technologies {
              width: 100%;
            }
          }
          .right {
            .description {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 766px) {
  #projectSpecific {
    .container {
      .project-wrap {
        .columns {
          .right {
            .description {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>>

