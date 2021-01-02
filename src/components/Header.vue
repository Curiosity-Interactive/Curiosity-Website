<template>
  <header>
    <img
      src="../assets/curiosity-logo.png"
      alt="Curiosity Interactive Management"
    />
    <div class="video-container">
      <video
        autoplay
        loop
        muted
        src="../videos/header.mp4"
        type="video/mp4"
      ></video>
    </div>
    <i class="fas fa-angle-down"></i>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      companyName: "CURIOSITY",
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

header img {
  color: white;
  z-index: 1;
  opacity: 0.8;
  width: 40%;
}

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

i {
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 3%;
  z-index: 2;
  font-size: 2rem;
  background: linear-gradient(238deg, #333399, #ff6699, #006699);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-animation: AnimationName 12s ease infinite;
  -moz-animation: AnimationName 12s ease infinite;
  animation: AnimationName 12s ease infinite;
  background-size: 200% auto;
  x-transition: all 1s ease-in-out;
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
</style>>

