<template>
  <div class="about-me-container">
    <div class="about-me-wrapper">

    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
.about-me-container {
  overflow: hidden;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
}
.about-me-container::-webkit-scrollbar {
  width: 10px;
}
.about-me-container::-webkit-scrollbar-track {
  background: black;
}
.about-me-container::-webkit-scrollbar-thumb {
  background-color: rgb(255 103 103 / 80%);
}
.about-me-wrapper {
  width: 1080px;
  /* border: 1px outset red; */
}
</style>