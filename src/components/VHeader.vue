<template>
    <div class="header-container">
      <div class="header-items-container">
        <div class="header-items">
          <div class="header-item-left">
            <div class="time" v-if="currentTime">
              {{currentTime}}
            </div>
          </div>
          <div class="header-item-right">
            <div class="btc-container" v-if="BTCData">
              <span class="btc">BTC</span> {{BTCData}} USD
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      BTCData: null,
      currentTime: null
    }
  },
  methods: {
    getData() {
      const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
      
      const getItem = fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          return Math.round(data.USD)
        }
      );

      return getItem
    },
    checkStorage() {
      const created = new Date().getDate();

      if (localStorage.getItem('BTC') === null || 
          Number(localStorage.getItem('created')) !== created) {
        this.getData().then((item) => {
          localStorage.setItem('BTC', item);
          localStorage.setItem('created', created);
          this.BTCData = item;
        })
      } else {
        this.BTCData = localStorage.getItem('BTC');
      }
    },
    getTime() {
      const date = new Date();
      const hours = date.getHours() < 10 ? 
        '0' + date.getHours() : date.getHours();
      const minutes = date.getMinutes() < 10 ?
        '0' + date.getMinutes() : date.getMinutes();
      const time = `${hours}:${minutes}`

      return time
    },
    checkTime() {
      this.currentTime = this.getTime()

      setInterval(() => {
        this.currentTime = this.getTime()
      }, 1000)
    }
  },
  created() {
    this.checkStorage();
    this.checkTime();
  }
}
</script>

<style>
.header-container {
  width: 100%;
  padding: 15px;
}
.line {
  border-bottom: 2px solid rgb(255 103 103 / 80%);
  box-shadow: 1px 1px 11px rgba(191, 0, 0, 0.8);
}
.header-items-container {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
}
.header-items {
  width: 100%; 
  display: flex;
  justify-content: space-between;
}
.btc-container {
  display: flex;
  align-items: center;
  color: rgb(255 103 103 / 80%);
  text-shadow: 1px 0 1px rgb(185 93 93 / 80%);
}
.btc {
  color: rgba(255, 255, 0, 0.8);
  font-size: 0.95rem;
  padding: 5px;
  text-shadow: rgba(255, 255, 0, 0.8) 1px 0 1px;
}
.time {
  color: rgb(255 103 103 / 80%);
  text-shadow: 1px 0 1px rgb(185 93 93 / 80%);
}
</style>