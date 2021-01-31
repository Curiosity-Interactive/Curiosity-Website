<template>
  <div id="projectSpecific">
    <div class="container">
      <!-- Video background vimeo -->

      <div class="projectVideo">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <!-- Project Vimeo URL -->
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

      <!-- Project Text Info -->
      <div class="project-wrap">
        <div class="title" data-aos="fade-up" data-aos-delay="100">
          <!-- Project Name -->
          <h1>{{ $route.params.specProjectName }}</h1>
        </div>
        <div class="columns" data-aos="fade-up" data-aos-delay="200">
          <div class="left">
            <div class="block client">
              <!-- Project Client Name + Year -->
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
              <!-- Project Team Members -->
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
              <!-- Project Technologies -->
              <span
                v-for="technology in $route.params.specProjectTechnologies"
                :key="technology"
                >{{ technology }}</span
              >
            </div>
            <hr />
          </div>
          <div class="right">
            <!-- Project Description -->
            <h2>Description</h2>
            <div class="description">
              <p>{{ $route.params.specProjectDescription }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Project Images -->
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
    <!-- Back to Top -->
    <div class="backToTop">
      <a @click="backToTop"><i class="fas fa-chevron-up"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  //Scroll to Top when page is created
  created: function () {
    this.backToTop();
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
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

  //Back to Top
  .backToTop {
    margin: 50px 0;
    text-align: center;

    a {
      text-decoration: none;
      cursor: pointer;

      i {
        font-size: 2rem;
        color: $dark-color;
        transition: 0.3s ease-in-out;
        @extend .gradient-animation-values-text;
        @include animation("bgposition 12s infinite");

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
  .container {
    margin: 0 auto;

    //Project Images
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

      //Sub-Titles
      h2 {
        @include nexa-book(1rem);
        margin: 20px 0;
      }

      .block {
        margin-bottom: 40px;
      }

      //Project Title
      .title h1 {
        width: 100%;
        @extend .gradient-animation-values-text;
        @include animation("bgposition 12s infinite");
        @include nexa-book($fontsizeTextPC);
      }

      .columns {
        width: 100%;
        display: flex;
        margin-top: 40px;

        .right {
          width: 100%;

          .description {
            font-size: $fontsizeDescriptionPC;
            line-height: 2;
          }
        }

        hr {
          width: 70%;
          margin: 40px 0 10px 0;
        }
        .left {
          width: 100%;

          //Project Team Members
          .team {
            .teamMember {
              display: block;
            }
          }

          //Project Technologies
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
              font-size: $fontsizeDescriptionIpad;
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
              font-size: $fontsizeDescriptionPhone;
            }
          }
        }
      }
    }
  }
}
</style>>

