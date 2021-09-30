<template>
  <div class="animation-frame">
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <div class="pixel hide-pixel"></div>
    <button @click="startAnimation()">CLICK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    startSparking() {
      const pixels = document.querySelectorAll('.pixel');
      let duration = 0;

      const startSparking = setInterval(() => {
        this.squareSpark(pixels)
        duration = duration + 1;

        if (duration === 4) {
          clearInterval(startSparking);
          this.startAnimation();
        }
      }, 300)
    },

    startAnimation() {
      let duration = 0;
      const startRotation = setInterval(() => {
        this.rotatePixels();
        duration = duration + 1;

        if (duration === 4) {
          clearInterval(startRotation);
          setTimeout(() => {
            this.startSparking();
          }, 500)
        }
      }, 660)
    },

    rotatePixels() {
      const pixels = document.querySelectorAll('.pixel');
      // console.log(pixels)
      setTimeout(() => {
        this.showElements(pixels, 0,5,10,15)
      }, 110);
      setTimeout(() => {
        this.showElements(pixels, 1,5,10,14)
      }, 220);
      setTimeout(() => {
        this.showElements(pixels, 2,6,9,13)
      }, 330);
      setTimeout(() => {
        this.showElements(pixels, 3,6,9,12)
      }, 440);
      setTimeout(() => {
        this.showElements(pixels, 8,9,6,7)
      }, 550);
      setTimeout(() => {
        this.showElements(pixels, 4,5,10,11)
      }, 660);
    },

    showElements(elems, first, second, third, fours) {
      elems[first].classList.remove('hide-pixel');
      elems[second].classList.remove('hide-pixel');
      elems[third].classList.remove('hide-pixel');
      elems[fours].classList.remove('hide-pixel');

      setTimeout(() => {
        elems[first].classList.add('hide-pixel');
        elems[second].classList.add('hide-pixel');
        elems[third].classList.add('hide-pixel');
        elems[fours].classList.add('hide-pixel');
      }, 100)
    },

    squareSpark(elems){
      elems.forEach(e => {
        e.classList.remove('hide-pixel');
      });
      setTimeout(() => {
        elems.forEach(e => {
          e.classList.add('hide-pixel');
        });
      }, 200)
    }
  }
}
</script>

<style>
.animation-frame {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 15px);
}

.pixel {
  width: 15px;
  height: 15px;
  background: red;
  transition-duration: 0.2s;
}

.hide-pixel {
  background: none;
}
</style>