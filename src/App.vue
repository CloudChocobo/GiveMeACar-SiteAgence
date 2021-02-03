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
					fetch("notreapi.com/" + info)
						.then((response) => response.json())
						.then((data) => {
							this[info] = data;
						})
						.catch((erreur) => {
							console.error("Il y a eu une erreur !", erreur);
						});
				});
			},
		},
		data() {
			return {
				voitures: [{}],
				clients: [{}],
				locations: [{}],
			};
		},
		created() {
			this.fetchAllTheDataInTeWorld();
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
