<template>
	<div class="centreMultiFous">
		<div class="text">
			<div class="name">Fiat 500</div>
			<div class="infoPrincipale">EZ-34FR-22</div>
			<div class="line">
				<div class="status">
					<div class="icone"></div>
					<div class="statusText">Louée</div>
				</div>
				<div class="pointRidicule"></div>
				<div class="infoSecondaire">RASmocket</div>
			</div>
		</div>
		<img src="" alt="" />
	</div>
</template>

<script>
	// Ceci est une carte, pas un centre multi fous, ne plongez pas dans le pièce, ni dans le piège de la pièce !!!
	export default {
		name: "",
		props: ["name", "infoPrincipale", "status", "infoSecondaire"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.centreMultiFous {
		background-color: rgb(206, 206, 206);
		display: flex;
		padding: 15px 20px;
		border-radius: 6px;
	}
	.text {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		background-color: black;
	}
</style>
