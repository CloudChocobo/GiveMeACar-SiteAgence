<template>
	<div class="bouton">{{ texte }}</div>
</template>

<script>
	export default {
		name: "Bouton",
		props: ["texte"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.bouton {
		background-color: #7d54f2;
		padding: 5px 10px;
		border-radius: 6px;
		width: max-content;
		color: white;
		transition: 0.2s;
		cursor: pointer;
		user-select: none;
	}
	.bouton:hover {
		filter: brightness(1.2);
	}
	.bouton:active {
		transform: scale(0.9);
	}
</style>
