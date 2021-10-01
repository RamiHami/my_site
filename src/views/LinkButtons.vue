<template>
  <div class="buttons-main-page">
    <div class="buttons-main-page-container">
      <div class="buttons-container">
        <div class="buttons-wrapper">
          <router-link
            v-for="(prop, key) in this.buttons"
            v-bind:key="key"
            v-bind:to="prop.routerLink"
          > 
            <link-button v-bind="prop"/>
          </router-link>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from '../components/VFooter.vue'
import buttonProps from '../js/LinkButtonProps.js'
import LinkButton from '../components/VLinkButton.vue'

export default {
	name: 'MainPage',
	components: {
    LinkButton,
    VFooter
	},
	data() {
		return {
      buttons: buttonProps.buttons
		}
	}, 
}
</script>

<style>
.buttons-main-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.buttons-main-page-container {
	width: 1080px;
	height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.buttons-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.buttons-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30%;
}
@media (max-width: 870px) {
  .buttons-wrapper {
    flex-direction: column;
    align-items: center;
    top: 20%;
  }
  .buttons-main-page-container {
    height: 50%;
  }
}
</style>