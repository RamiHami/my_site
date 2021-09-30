<template>
	<div class="welcome-page" @click="goToMainPage()">
			<video-background
				:src="require('@/assets/bkg-videos/full_hd.mp4')"
				:poster="require('@/assets/bkg-images/full_hd_image.png')"
				style="height: 100%; width: 100%;"
			>
				<div class="container">
					<div class="wrapper">
						<h1 style="text-align: center;">
						WELCOME TO MY WEBSITE
						</h1>
						<p>
							Спасибо, что зашли на&nbsp;мой сайт. Здесь вы&nbsp;можете визуально ознакомиться со&nbsp;списком моих работ, а&nbsp;так&nbsp;же детальнее узнать о&nbsp;стеке изученных мною технологий.
						</p>
					</div>
				</div>
			</video-background>
	</div>
</template>

<script>
export default {
	name: 'WelcomePage',
	data() {
		return {

		}
	},
	methods: {
		goToMainPage() {
			this.$router.push('/main_page');
		}
	},
	mounted() {
		window.addEventListener('keyup', e => {
			if (e.key === "Space" || e.keyCode === 32) {
				this.goToMainPage();
			}
		});
	}   
}
</script>

<style>
.welcome-page {
	width: 100%;
	height: 100%;
}

.videobg-content {
	display: flex;
	justify-content: center;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  flex-wrap: wrap;
	height: 100%;
	width: 50%;
}

.wrapper {
	padding: 10%;
	border: 2px outset red;
	background: rgba(0, 0, 0, 0.7);
	margin-top: -20%;
}

@media (max-width: 360px) {
  .wrapper {
    font-size: 0.7em;
    height: 50%;
    width: 63%;
    position: absolute;
    left: 8%;
  }
}

@media (max-width: 760px) and (min-width: 370px) {
  .wrapper {
    height: 50%;
    width: 63%;
    position: absolute;
    left: 8%;
    font-size: 0.9em
  }
}
</style>