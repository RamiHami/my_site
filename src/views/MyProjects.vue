<template>
  <div class="my-projects-container"></div>
</template>

<script>
export default {
  data() {
    return {
      elems: 0
    }
  },
  beforeCreate() {
    console.log(this.elems);
  }
}
</script>

<style scoped>

</style>