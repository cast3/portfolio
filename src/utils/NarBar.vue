<script setup>
	import { RouterLink } from "vue-router";

	const routes = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/about",
			name: "About",
		},
		{
			path: "/contact",
			name: "Contact",
		},
	];
</script>

<template>
	<header>
		<nav>
			<router-link to="/"
				><img
					alt="ALogo"
					class="logo"
					src="@/assets/logo.png"
			/></router-link>
			<router-link
				v-for="route in routes"
				:key="route.name"
				:to="route.path"
				>{{ route.name }}</router-link
			>
		</nav>
	</header>
</template>

<style scoped>
	header {
		position: fixed;
		top: 50px;
		right: 30px;
		z-index: 3;
	}
	header > nav {
		writing-mode: vertical-rl;
		text-orientation: sideways;
		display: flex;
		flex-direction: row;

		justify-content: center;
		align-items: center;
		gap: 20px;

		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	.logo {
		width: clamp(30px, 4vw, 50px);
	}
	header > nav > a {
		color: rgb(255, 255, 255);
		font-size: 1rem;
		font-size: 1.1vw;
		font-family: "Padauk", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
			"Hiragino Sans", Meiryo, sans-serif;
		font-weight: lighter;
		text-align: center;
		align-items: center;
		text-decoration: none;
	}
</style>
