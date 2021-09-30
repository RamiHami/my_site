<template>
  <div>
    <div class="rolling-square-container">
      <div class="angles flex space-between">
        <div class="angle-top-left"></div>
        <div class="angle-top-right"></div>
      </div>
      <div class="point" style="margin: 0 auto">
        <div class="big-square">
          <div class="mini-square">

          </div>
        </div>
      </div>
      <div class="angles flex space-between">
        <div class="angle-bot-left"></div>
        <div class="angle-bot-right"></div>
      </div>
      
    </div>
    <button @click="doIt()">CLICK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // squareRotated: false,
      // angleRotated: '135deg',
      // angleNormal: '0deg'
      rotateAngle: 0,
      miniSquareAngle: 45
    }
  },
  methods: {
    // не доделано
    doIt() {
      const bigSquare = document.
        querySelector('.rolling-square-container');
      this.rotateSquare(bigSquare);
    },
    rotateSquare(elem) { //, startAngle
      elem.style.transition = '0.3s';
      
      let angle = this.rotateAngle + 45;
      this.rotateAngle = angle;
      
      elem.style.transform = `rotateZ(${angle}deg)`;
      if (this.rotateAngle === 315) {
        this.rotateAngle = 0;
        elem.style.transition = '0s';
        elem.style.transform = 'rotateZ(0deg)'
      }
    },
  }
}
</script>

<style>
.rolling-square-container {
  width: 50px;
  height: 50px;
}
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.point {
  width: 35px;
  height: 35px;
}
.angle-top-left {
  width: 5px;
  height: 5px;
  border-top: 2px solid red;
  border-left: 2px solid red;
}
.angle-top-right {
  width: 5px;
  height: 5px;
  border-top: 2px solid red;
  border-right: 2px solid red;
}
.angle-bot-left {
  width: 5px;
  height: 5px;
  border-bottom: 2px solid red;
  border-left: 2px solid red;
}
.angle-bot-right {
  width: 5px;
  height: 5px;
  border-bottom: 2px solid red;
  border-right: 2px solid red;
}
.point {
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.big-square {
  border: 6px solid red;
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
}
.mini-square {
  background: red;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}
</style>