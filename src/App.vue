<script setup>
	import { RouterView } from "vue-router";
	import NarBarVue from "./utils/NarBar.vue";
</script>

<template>
	<header>
		<NarBarVue />
	</header>
	<RouterView />
</template>
