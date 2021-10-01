<template>
  <div 
    class="button-container" 
    v-bind:style="buttonWidth"
  >
    <a v-bind:href="buttonLink" target="_blank">
      <div class="button-border">
        <div class="button-background">
          <div class="rectangle"></div>
          <img v-bind:src="require(`../assets/icons/${buttonIco}`)" alt="" v-if="buttonIco">
          <p>{{buttonTitle.toUpperCase()}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    ico: String,
    width: String,
    link: String,
    routerLink: String
  },
  data() {
    return {
      buttonTitle: this.title,
      buttonIco: this.ico,
      buttonWidth: this.width ? this.width : 'width: 250px',
      buttonLink: this.link ? this.link : '#',
      // buttonRouterLink: this.routerLink
    }
  },
  // methods: {
  //   goTo() {
  //     if (this.buttonRouterLink) {
  //       this.$router.push('/about_me');
  //     }
  //   }
  // }
}
</script>

<style>
.button-container {
  width: 250px;
  height: 65px;
  margin: 10px;
  transition: 0.3s;
}
.button-container:hover {
  filter: drop-shadow(1px 1px 10px rgb(255 103 103 / 50%));
}
.button-container:hover img {
  filter: drop-shadow(5px 0 rgba(37,255,255,0.5));
}
.button-container:hover .rectangle{
  border-right: 2px solid rgb(255 103 103 / 80%);
}
@media (max-width: 870px) {
  .button-container {
    width: 250px!important;
  }
}
.button-container a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #25ffff;
  font-size: 1rem;
}
.button-border {
  width: 100%;
  height: 100%;
  background: rgb(255 103 103 / 80%);
  transition: 0.3s;
  clip-path: polygon(
    0% 100%, 0% 0%, 19% 0%, 21% 7%, 100% 7%, 100% 78%, 94% 100%
  );
}
.button-border:hover {
  background: rgb(255 103 103 / 100%);
}
.button-background {
  display: flex;
  position: relative;
  top: 2px;
  left: 2px;
  width: 98.5%;
  height: 94%;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  clip-path: polygon(
    0% 100%, 0% 0%, 18% 0%, 20% 7%, 100% 7%, 100% 78%, 94% 100%
  )
}
.button-background img {
  margin: 10px;
  transition: 0.3s;
  width: 34px;
}
.rectangle {
  width: 10px;
  height: 100%;
  background: rgba(204, 29, 29, 0.3);
  border-right: 2px solid rgb(255 103 103 / 80%);
  transition: 0.3s;
}
.button-background p{
  transition: 0.3s;
}
.button-background:hover p {
  text-shadow: 1px 1px 7px #25ffff, 0 0 1em #25ffff;
}
</style>

