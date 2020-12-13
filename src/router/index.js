import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Stock from "../views/Stock.vue";
import Error404 from "../views/404.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "GMAC - Home",
		},
	},
	{
		path: "/stock",
		name: "Stock",
		component: Stock,
		meta: {
			title: "GMAC - Stock",
		},
	},
	{
		path: "/:catchAll(.*)",
		component: Error404,
		meta: {
			title: "GMAC - 404",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
