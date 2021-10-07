<template>
  <div class="main-page">
    <v-header></v-header>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import VHeader from '../components/VHeader.vue'

export default {
	name: 'MainPage',
	components: {
    VHeader,
	},
}
</script>

<style>
.main-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>