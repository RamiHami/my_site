<template>
  <div class="lines-container">
    <div class="line-frame">
      <div class="flex space-around" v-if="this.frame_1">
        <div class="ip-data">$_DATA$</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">4</div>
        <div class="ip-num">2</div>
        <div class="ip-num">0</div>
        <div class="ip-num">5</div>
      </div>
      <div class="flex justify-center" v-else>
        <div class="ip-data">$_CRASH</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">0</div>
        <div class="ip-num">0</div>
      </div>
    </div>
    <div class="line-frame">
      <div class="flex space-around" v-if="this.frame_2">
        <div class="ip-data">$_DATA$</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">5</div>
        <div class="ip-num">0</div>
        <div class="ip-num">4</div>
        <div class="ip-num">3</div>
      </div>
      <div class="flex justify-center" v-else>
        <div class="ip-data">$_CRASH</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">0</div>
        <div class="ip-num">0</div>
      </div>
    </div>
    <div class="line-frame">
      <div class="flex space-around" v-if="this.frame_3">
        <div class="ip-data">$_DATA$</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">3</div>
        <div class="ip-num">5</div>
        <div class="ip-num">0</div>
        <div class="ip-num">1</div>
      </div>
      <div class="flex justify-center" v-else>
        <div class="ip-data">$_CRASH</div>
        <div class="ip-num">0</div>
        <span>.</span>
        <div class="ip-num">0</div>
        <div class="ip-num">0</div>
      </div>
    </div>
    <button @click="doIt()">CLICK</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      frame_1: true,
      frame_2: true,
      frame_3: true
    }
  },
  methods: {
    
    doIt() {
      let frames = ['frame_1', 'frame_2', 'frame_3'];
      setInterval(() => {
        let randomInt = Math.floor(Math.random() * (2 + 1));
        this.animateFrames(frames[randomInt]);
      }, 1500);
    },
    animateFrames(frame) {
      switch(frame) {
        case "frame_1":
          this.frame_1 = this.frame_1 ? false : true;
          break
        case "frame_2":
          this.frame_2 = this.frame_2 ? false : true;
          break
        case "frame_3":
          this.frame_3 = this.frame_3 ? false : true;
          break
      }
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.space-around {
  justify-content: space-around;
}

.lines-container {
  width: 280px;;
}

.ip-data {
  padding-right: 10px;
}

.flex span {
  padding-left: 10px;
  padding-right: 10px;
}

.ip-num {
  padding-left: 5px;
  padding-right: 5px;
}
</style>