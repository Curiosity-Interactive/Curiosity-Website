<template>
  <div id="projectSpecific">
    <h1>Project Specific</h1>
    <p>Project ID is {{ $route.params.projectId }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#projectSpecific {
  width: 100%;
  height: 200vh;
}
</style>>

