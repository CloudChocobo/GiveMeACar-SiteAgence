<template>
	<div class="centreMultiFous">
		<div class="text">
			<div class="name">{{ name }}</div>
			<div class="infoPrincipale">{{ infoPrincipale }}</div>
			<div class="line">
				<div class="status">
					<div
						class="icone"
						:class="{
							// :class= créer une classe dynamique
							//classe: condition
							vieux_laid: statut == 'louée',
							raide: statut == 'maintenance',
							yeah_lô: statut == 'vente',
						}"
					></div>
					<div class="statusText">{{ statut }}</div>
				</div>
				<div class="pointRidicule"></div>
				<div class="infoSecondaire">{{ infoSecondaire }}</div>
			</div>
		</div>
		<img :src="lienverslimage" alt="Photo de pompier sexy nu" />
	</div>
</template>

<script>
	// Ceci est une carte, pas un centre multi fous, ne plongez pas dans le pièce, ni dans le piège de la pièce !!!
	export default {
		name: "",
		props: ["name", "infoPrincipale", "statut", "infoSecondaire", "lienverslimage"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.centreMultiFous {
		background-color: #f6f6f6;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
	}
	.text {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.line {
		display: flex;
		gap: 7px;
		align-items: center;
		justify-content: center;
		align-items: center;
		width: max-content;
	}
	.pointRidicule {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background-color: #91919f;
	}
	.status {
		display: flex;
		gap: 5px;
		justify-content: center;
		align-items: center;
	}
	img {
		background-color: rgb(206, 206, 206);
		height: 75px;
		width: 75px;
		border-radius: 6px;
	}
	.icone {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 3px solid rgb(13, 219, 82);
	}
	.icone.vieux_laid {
		border-color: #7d54f2;
	}
	.icone.raide {
		border-color: rgb(212, 44, 72);
	}
	.icone.yeah_lô {
		border-color: yellow;
	}
</style>
