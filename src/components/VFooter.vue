<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <div class="footer-left-wrapper">
        <v-link-button 
          v-bind="{
            'ico': 'telegram.svg',
            'title': 'telegram',
            'width': 'width: 350px',
            'link': telegramLink
          }"
        ></v-link-button>
      </div>
      <div class="footer-right-wrapper">
        <v-link-button 
          v-bind="{
            'ico': 'git.svg',
            'title': 'Github',
            'width': 'width: 350px',
            'link': gitLink
          }"
        ></v-link-button>
      </div>
    </div>
  </div>
</template>

<script>
// import RollingSquare from './BaseAnimationRollingSquare.vue'
import VLinkButton from './VLinkButton.vue'

export default {
  components: {
    VLinkButton
  },
  data() {
    return {
      gitLink: 'https://github.com/RamiHami/my_site',
      telegramLink: 'https://t.me/ramihami'
    }
  }
}
</script>

<style>
.footer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40%;
}
.footer-wrapper {
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
.footer-left-wrapper {
  display: flex;
  width: 50%;
}
.footer-right-wrapper {
  width: 50%;
  display: flex;
  justify-content: right;
}
@media (max-width: 870px) {
  .footer-container {
    align-items: center;
  }
  .footer-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }
  .footer-left-wrapper {
    width: 350px;
    justify-content: center;
  }
  .footer-right-wrapper {
    width: 350px;
    justify-content: center;
  }
}

</style>