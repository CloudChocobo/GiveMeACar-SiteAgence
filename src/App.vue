<template>
	<router-view />
</template>

<script>
	export default {
		name: "App",
		watch: {
			$route(to) {
				document.title = to.meta.title || "GMAC";
			},
			immediate: true,
		},
		methods: {
			fetchAllTheDataInTheWorld() {
				const infosARecup = ["voitures", "clients", "locations"];
				infosARecup.forEach((info) => {
					fetch("https://givemeacar-b.herokuapp.com/" + info) /* mettre l'adresse de l'API*/
						.then((response) => response.json())
						.then((data) => {
							this.$store.commit("setValeurDe", {
								type: info,
								valeur: data,
							}); /* commit = utilise la methode, les infos*/
						})
						.catch((erreur) => {
							console.error("Il y a eu une erreur !", erreur);
						});
				});
			},
		},
		created() {
			this.fetchAllTheDataInTheWorld();
		},
	};
</script>

<style>
	body {
		margin: 0;
		min-height: 100vh;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	#app {
		font-family: "Mukta", sans-serif;
		color: #34313a;
		height: 100%;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
</style>
