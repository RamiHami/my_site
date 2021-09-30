<template>
  <div>
    <button @click="scrollText(0)"></button>
    <div class="animated-text-container">
      <div class="animated-text">
        export default {
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        methods: {
      </div>
      <div class="animated-text" style="margin-left: 10px;">
        scrollText() {
      </div>
      <div class="animated-text" style="margin-left: 15px;">
        let frame = document.querySelector('.animated-text-container')
      </div>
      <div class="animated-text" style="margin-left: 15px;">
        setInterval(() => {
      </div>
      <div class="animated-text" style="margin-left: 20px;">
        frame.scrollBy(0, 10);
      </div>
      <div class="animated-text" style="margin-left: 15px;">
        }, 500)
      </div>
      <div class="animated-text" style="margin-left: 10px;">
        }
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        }
      </div>
      <div class="animated-text">
        }
      </div>
      <div class="animated-text">
        .animated-text-container {
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        height: 200px;
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        overflow: hidden;
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        position: relative;
      </div>
      <div class="animated-text" style="margin-left: 5px;">
        font-size: 1.5rem;
      </div>
      <div class="animated-text">
        }
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    scrollText(counter) {
      let frame = document.querySelector('.animated-text-container');
      const startAnimation = setInterval(() => {
        frame.scrollBy(0, 10);

        if (counter === 2) {
          clearInterval(startAnimation);
          setTimeout(() => {
            this.scrollText(3);
          }, 500)
        }
        if (counter === 9) {       
          counter = 0;
          frame.scrollBy(0, -160);
        }

        counter = counter + 1;
      }, 200)
    }
  }
}
</script>

<style>
.animated-text-container {
  width: 100px;;
  height: 50px;
  overflow: hidden;
  position: relative;
  font-size: 5px;
}
</style>
