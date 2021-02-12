<template>
	<div class="cont">
		<div class="label">{{ label }}</div>
		<select name="pets">
			<option value="">--Faites votre choix--</option>
			<option v-for="choix in choixs" :key="choix.value" :value="choix.value">{{
				choix.nom
			}}</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["label", "choixs", "valeur"],
		emits: ["update:valeur"],
		data() {
			return {};
		},
	};
</script>

<style scoped></style>
