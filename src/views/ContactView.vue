<script setup>
	import IconMailVue from "../components/icons/IconGeneralPurpuse/IconMail.vue";
	import IconWhatsAppVue from "../components/icons/IconGeneralPurpuse/IconWhatsApp.vue";
</script>

<template>
	<div class="contact_container">
		<div class="contact_left">
			<h1>CONTACTO</h1>
			<span
				>Si tienes alguna pregunta no dudes en contactarme. ¡Y creemos algo
				fantastico! ✨</span
			>

			<a href="mailto:a.castellanos.lizcano@gmail.com">
				<IconMailVue /> a.castellanos.lizcano@gmail.com</a
			>
		</div>
		<div class="contact_right">
			<h1>ESCRIBEME</h1>
			<span
				>A veces solo estamos a un paso de conseguirlo. ¡Trabajemos juntos para
				lograrlo! ✨</span
			>
			<a
				href="https://wa.me/3204090770? text=Hola%20Andres%2C%20me%20gustaria%20trabajar%20contigo%20en%20un%20proyecto%20de%20desarrollo%20web."
				target="_blank"
			>
				<IconWhatsAppVue /> Escribeme un WhatsApp</a
			>
		</div>
	</div>
</template>

<style scoped>
	.contact_container {
		display: flex;
		flex-wrap: wrap-reverse;
		min-height: 100%;
		width: 100%;
		position: fixed;
		font-family: "Oswald", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
			"Hiragino Sans", Meiryo, sans-serif;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-webkit-tap-highlight-color: transparent;
	}
	.contact_left {
		display: flex;
		background-color: rgb(255, 255, 255);
		align-items: center;
		align-content: center;
		justify-content: center;
		width: 100%;
		flex-direction: column;
	}
	.contact_left > h1 {
		color: rgb(0, 0, 0);
		font-size: 5vw;
		font-weight: bold;
		line-height: 0;
	}

	.contact_left > span {
		color: rgb(0, 0, 0);
		font-style: italic;
		font-size: 1.3vw;
	}

	.contact_left > a {
		color: rgb(0, 0, 0);
		font-size: 1.8vw;
		font-weight: bold;
		justify-items: center;
		align-items: center;
		display: flex;
		text-transform: uppercase;
		gap: 10px;

		background: linear-gradient(to bottom, #000000 0%, #ffffff 100%);
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 2px 2px;
		text-decoration: none;
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px transparent;
		transition-duration: 0.3s;
		transition-property: color, background-color, background-size;
	}

	.contact_left > a:hover {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-15px);}}%3C/style%3E%3Cpath fill='none' stroke='%23000000' stroke-width='1' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
		background-size: auto 5px;
	}
	.contact_right {
		background-color: rgb(0, 0, 0);
		align-items: center;
		align-content: center;
		justify-content: center;
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	.contact_right > h1 {
		color: rgb(255, 255, 255);
		font-size: 5vw;
		font-weight: bold;
		line-height: 0;
	}

	.contact_right > span {
		color: rgb(255, 255, 255);
		font-style: italic;
		font-size: 1.3vw;
	}
	.contact_right > a {
		color: rgb(255, 255, 255);
		font-size: 1.8vw;
		font-weight: bold;
		justify-items: center;
		align-items: center;
		text-transform: uppercase;

		display: flex;
		gap: 10px;
		background: linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 2px 2px;
		text-decoration: none;
	}

	.contact_right > a:hover {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-15px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='1' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
		background-size: auto 5px;
	}

	@media screen and (min-width: 1200px) {
		.contact_right,
		.contact_left {
			width: 50%;
			height: 100vh;
		}
	}
</style>
