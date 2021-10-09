<template>
  <div class="resume-container">
    <div class="resume-wrapper">
      <div class="resume-person-content">
        <div class="resume-person-photo">
          <img src="../assets/img/my-photo.jpg" alt="">
        </div>
        <div class="resume-person-information">
          <div class="resume-person-name">
            <h2>Рамиль Хамидуллин</h2>
            <p>Мужчина, 26 лет, дата рождения 27 июня 1995</p>
          </div>
          <div class="resume-person-contacts">
            <div class="resume-person-city">
              Город: Казань
            </div>
            <div class="resume-person-social-networks">
              <a href="https://vk.com/r_ramil" target="_blank">
                <img src="../assets/icons/vk.svg" alt="" >
              </a>
              <a href="https://t.me/ramihami" target="_blank">
                <img src="../assets/icons/telegram.svg" alt="" class="normalize-svg">
              </a>
              <a href="https://github.com/RamiHami" target="_blank">
                <img src="../assets/icons/git.svg" alt="" class="normalize-svg">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="resume-hardskills">
        <div class="resume-hardskills-header">
          <h3 class="text-center">Junior frontend developer</h3>
          <div class="resume-hardskills-header-content">
            <p>Занятость: полная занятость</p>
            <p>График работы: полный день</p> 
            <p>Лоялен к удаленной работе</p>
          </div>
        </div>
        <div class="resume-hardskills-main">
          <div class="resume-work-experiens">
            <h3 class="text-center">Опыт работы</h3>
            <div class="work-experiens-wrapper">
              <div class="work-experiens-container-left">
                <p>
                  Июль 2019 - <br>
                  февраль 2020 <br>
                  <span>8 месяцев</span>
                </p>
              </div>
              <div class="work-experiens-container-right">
                <p>ООО "ЛИОДОРО"</p>
                <p>Python developer <br> Разработка и поддержка программных модулей для телеметрии.</p>
              </div>
            </div>
          </div>
          <div class="resume-hardskills-skills">
            <h3 class="text-center">
              Ключевые навыки
            </h3>
            <div class="hardskills-wrapper">
              <div 
                class="hardskill-card"
                v-for="(item, index) in hardSkills"
                v-bind:key="index"
              >
                {{item}}
              </div>
            </div>
          </div>
          <div class="resume-about-me">
            <h3 class="text-center">
              Коротко обо мне
            </h3>
            <p>
              Целеустремленный, сосредоточенный, исполнительный, открыт для новых знаний, тактичный.
            </p>
          </div>
          <router-link to="/main_page" style="text-decoration: none">
            <v-link-button
              v-bind="{
                'title': 'BACKSPACE назад',
                'textAlign': 'margin: 0 auto'
              }"
            /> 
          </router-link>           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLinkButton from '../components/VLinkButton.vue'

export default {
  components: {
    VLinkButton
  },
  data() {
    return {
      hardSkills: [
        "HTML5", "CSS", "JavaScript", "ES6",
        "MySQL", "Vue.js", "Vue components",
        "Vuex", "Vue router", "Python"
      ]
    }
  },
  methods: {
    createListener(e) {
      if (e.key === "Backspace" || e.keyCode === 8) {
        this.$router.push('/main_page');
      }
    }
	},
	mounted() {
    window.addEventListener('keyup', this.createListener);
	},
  beforeDestroy() {
    window.removeEventListener('keyup', this.createListener);
  }
}
</script>

<style scoped>
.resume-container {
  overflow: hidden;
  width: 100%;
  height: 89%;
  overflow-y: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
}
.resume-container::-webkit-scrollbar {
  width: 10px;
}
.resume-container::-webkit-scrollbar-track {
  opacity: 0;
}
.resume-container::-webkit-scrollbar-thumb {
  background-color: rgb(255 103 103 / 80%);
}
.resume-wrapper {
  width: 1080px;
  height: 100%;
}
.resume-person-photo {
  margin-right: 15px;
}
.resume-person-photo img {
  width: 250px;
}
.resume-person-name h2 {
  color: rgb(255 103 103 / 80%);
  text-shadow: 1px 0 1px rgb(185 93 93 / 80%);
}
.resume-person-social-networks {
  display: flex;
  align-items: center;
  margin-top: 35px;
}
.resume-person-social-networks a {
  margin-right: 20px; 
}
.resume-person-content {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgb(255 103 103 / 80%);
  padding-top: 15px;
  padding-bottom: 40px;
  /* flex-wrap: wrap; */
}
.resume-person-information {
  width: 70%;
}
.resume-hardskills h3 {
  color: rgb(255 103 103 / 80%);
  text-shadow: 1px 0 1px rgb(185 93 93 / 80%);
}
.resume-hardskills-header-content {
  display: flex;
  justify-content: space-between;
}
.work-experiens-wrapper {
  display: flex;
  justify-content: space-between;
}
.text-center {
  text-align: center;
}
.resume-about-me {
  padding-bottom: 50px;
}
.normalize-svg {
  width: 44px;
}
.hardskills-wrapper {
  display: flex;
  justify-content: space-between;
}
.hardskill-card {
  border: 2px solid rgb(255 103 103 / 80%);
  max-width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 15px;
  margin-bottom: 15px;
}
@media (width: 768px) {
  .resume-wrapper {
    width: 720px;
  }
  .resume-person-content {
    flex-wrap: nowrap;
  }
  .hardskills-wrapper {
    flex-wrap: wrap;
    justify-content: start;
  }
}
@media (width: 717px) {
  .resume-wrapper {
    width: 700px;
  }
  .resume-person-content {
    flex-wrap: nowrap;
  }
  .hardskills-wrapper {
    flex-wrap: wrap;
    justify-content: start;
  }
}
@media (max-width: 540px){
  .resume-person-photo {
    margin: 0 auto;
  }
  .resume-wrapper {
    width: 280px;
  }
  .resume-person-content {
    margin-left: 15px;
    flex-wrap: wrap;
  }
  .resume-person-social-networks {
    display: flex;
    justify-content: space-between;
  }
  .resume-person-social-networks a {
    margin: 0;
  }
  .resume-hardskills-header-content {
    flex-wrap: wrap;
    justify-content: center;
  }
  .work-experiens-wrapper {
    font-size: 0.9rem;
    justify-content: center;
    padding-left: 10px;
  }
  .work-experiens-container-right {
    padding-left: 10px;
  }
  .hardskills-wrapper {
    padding-left: 15px;
    width: 270px;
    flex-wrap: wrap;
    justify-content: start;
  }
  .resume-about-me p {
    margin-left: 15px;
  }
}
</style>