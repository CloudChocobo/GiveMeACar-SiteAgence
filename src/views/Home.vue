<template>
	<Page>
		<div class="content">Home</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "Home",
		components: {Page},
	};
</script>

<style scoped>
	.content {
		padding: 20px;
		flex: 1 0 auto;
	}
</style>
