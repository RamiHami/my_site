<template>
  <div class="main-page">
    <v-header></v-header>
    <router-view></router-view>
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
</style>