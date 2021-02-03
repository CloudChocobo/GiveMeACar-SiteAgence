<template>
	<div class="page">
		<BarreTop></BarreTop>
		<main>
			<NavLeft></NavLeft>
			<div class="pageContent">
				<slot></slot>
			</div>
		</main>
	</div>
</template>

<script>
	import BarreTop from "@/components/BarreTop.vue";
	import NavLeft from "@/components/NavLeft.vue";
	export default {
		name: "",
		props: [],
		components: {BarreTop, NavLeft},
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main {
		display: flex;
		flex-grow: 1;
	}
	.pageContent {
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
</style>
