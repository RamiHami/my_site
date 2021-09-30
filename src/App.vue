<template>
  <div id="app">
    <div class="app-container">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@font-face {
  font-family: BlenderProBook;
  src: url('./assets/fonts/Blender-Pro-Book.otf');
}

html, body {
  height: 100%;
  overflow: hidden;
  color: white;
  font-family: BlenderProBook, sans-serif;
  font-size: 1.25em;
  background: black;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  justify-content: center;
  height: 100%;
  background: linear-gradient(175deg, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 0.5) 60%);
}

.app-container {
  width: 100%;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .8s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
