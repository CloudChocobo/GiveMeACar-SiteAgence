import {createStore} from "vuex";
export const store = createStore({
	state() {
		return {
			// ajouter le nom de ce qu'on veut récupérer
			voitures: [{}],
			clients: [{}],
			locations: [{}],
			collaborateurs: [{}],
		};
	},
	mutations: {
		setValeurDe(state, objet) {
			// type = voiture||clients||collabo
			state[objet.type] = objet.valeur;
		},
		// setVoitures(state, valeur) {
		// 	state.voitures = valeur;
		// },
		// setClients(state, valeur) {
		// 	state.clients = valeur;
		// },
		// setLocations(state, valeur) {
		// 	state.locationss = valeur;
		// },
	},
	getters: {
		valeurDe: (state) => (type) => {
			return state[type];
		},
		voitures(state) {
			return state.voitures;
		},
		// clients(state) {
		// 	return state.clients;
		// },
		// locations(state) {
		// 	return state.locations;
		// },
	},
});
