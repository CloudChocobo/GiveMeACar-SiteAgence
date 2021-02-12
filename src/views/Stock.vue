<template>
	<Page>
		<div class="content">
			<div class="header">
				<div class="title">Stock</div>
				<Bouton texte="Ajouter caisse 🚗" @click="modalOuvert = true"></Bouton>
			</div>
			<div class="grid">
				<CentreMultiFous
					v-for="voiture in voitures"
					:key="voiture.id"
					:name="voiture.marque + ' ' + voiture.modele"
					:infoPrincipale="voiture.immatriculation"
					:statut="voiture.statut"
					infoSecondaire="zéro pb"
					:lienverslimage="voiture.image"
				></CentreMultiFous>
			</div>
		</div>
		<!-- Two-way sur le capot -->
		<Modal v-if="modalOuvert" v-model:isOuvert="modalOuvert" titre="Création voiture">
			<Inpute
				label="Immat"
				placeholder="Immatriculation du véhicule"
				v-model:valeur="lol"
			></Inpute>
			<Inpute
				label="Marque"
				placeholder="Marque du véhicule"
				v-model:valeur="newVoiture.marque"
			></Inpute>
			<Inpute
				label="Places"
				placeholder="Nombre de places du véhicule"
				v-model:valeur="newVoiture.places"
			></Inpute>
			<Inpute
				label="Puissance Fiscale"
				placeholder="Puissance fiscale du véhicule"
				v-model:valeur="newVoiture.puissanceFiscale"
			></Inpute>

			<Inpute
				label="Statut"
				placeholder="Statut du véhicule"
				v-model:valeur="newVoiture.statut"
			></Inpute>
			<Inpute
				label="Image"
				placeholder="URL de la photo"
				v-model:valeur="newVoiture.image"
			></Inpute>
			<Select
				:choixs="[
					{valeur: 'diesel', nom: 'Diesel'},
					{valeur: 'essence', nom: 'Essence'},
					{valeur: 'hybride', nom: 'Hybride'},
				]"
				label="Type d'energie"
				v-model:valeur="newVoiture.typeEnergie"
			></Select>
			<Select
				:choixs="[
					{valeur: 1, nom: 'Agence de Nantes'},
					{valeur: 2, nom: 'Agence de Rennes'},
					{valeur: 3, nom: 'Agence de Brest'},
				]"
				label="Agence"
				v-model:valeur="newVoiture.agence"
			></Select>
			<div @click="afficher()">cliquez ici</div>
		</Modal>
		<!-- v-model est une passerelle entre composants, v-if true: modal ouvert, v-if false: modal fermé -->
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Bouton from "@/components/Bouton.vue";
	import CentreMultiFous from "../components/CentreMultiFous.vue";
	import Modal from "@/components/Modal.vue";
	import Inpute from "@/components/Inpute.vue";
	import Select from "@/components/Select.vue";
	export default {
		name: "Stock",
		components: {Page, CentreMultiFous, Bouton, Modal, Inpute, Select},
		data: () => {
			return {
				lol: "lol",
				modalOuvert: false,
				newVoiture: {},
			};
		},
		methods: {
			afficher() {
				console.log(this.lol);
			},
		},
		computed: {
			/*fait appel au store*/
			voitures() {
				console.log(this.$store.getters.valeurDe("voitures"));
				return this.$store.getters.valeurDe("voitures");
			},
		},
	};
</script>

<style scoped>
	.content {
		width: 100%;
	}
	.title {
		font-weight: 900;
		font-size: 25px;
		line-height: 23px;
		text-transform: uppercase;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 10px;
	}

	.button {
		background-color: #7d54f2;
		padding: 5px 10px;
		border-radius: 6px;
		width: max-content;
		color: white;
	}
	.header {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
