<template>
	<Page>
		<div class="content">Stock</div>
		<CentreMultiFous></CentreMultiFous>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import CentreMultiFous from "../components/CentreMultiFous.vue";
	export default {
		name: "Client",
		components: {Page, CentreMultiFous},
	};
</script>

<style scoped></style>
