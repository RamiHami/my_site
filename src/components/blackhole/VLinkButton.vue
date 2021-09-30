<template>
  
    <div class="button-container">
      <div class="button-rectangle"></div>
      <a href="" @click="doIt()" class="link">        
        <div class="button-inner-container">
          <img v-bind:src="require(`../assets/icons/${buttonIco}`)" alt="">
          <p>{{buttonTitle.toUpperCase()}}</p>
        </div>
      </a>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    ico: String
  },
  data() {
    return {
      buttonTitle: this.title,
      buttonIco: this.ico
    }
  },
  methods: {
    doIt() {
      console.log(this.buttonTitle)
    }
  }
}
</script>

<style>
.link {
  text-decoration: none;
  color: #25ffff;
  padding-left: 10px;
  width: 100%;
  display: block;
  transition: 0.32s;
  height: 100%;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 62px;
  border: 2px solid rgba(204, 29, 29, 0.4);
  transition: 0.3s;
}
.button-container:hover {

  border: 2px solid rgba(191, 0, 0, 0.8);
  box-shadow: 1px 3px 20px 3px rgba(191, 0, 0, 0.3);
}
.button-inner-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.button-rectangle {
  width: 5%;
  height: 100%;
  background: rgba(204, 29, 29, 0.3);
  border-right: 2px solid rgba(204, 29, 29, 0.4);
}
.button-inner-container p {
  transition: 0.3s;
  padding: 10px;
}
.button-container:hover p {
  text-shadow: 1px 1px 7px #25ffff, 0 0 1em #25ffff;
}
.button-container img {
  transition: 0.3s;
}
.button-container:hover img {
  filter: drop-shadow(5px 0 rgba(37,255,255,0.5));
}
</style>