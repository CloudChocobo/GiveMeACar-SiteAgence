//C'est ici qu'on discute
<template>
	<CentreMultiFous
		name="{{client.name}}"
		infoPrincipale="{{client.id}}"
		status="{{client.status}}"
		infoSecondaire="{{client.email}}"
	></CentreMultiFous>

	<CentreMultiFous
		name="{{voiture.marque}}"
		infoPrincipale="{{voiture.immatriculation}}"
		status="{{voiture.status}}"
		infoSecondaire="{{voiture.carburant}}"
	></CentreMultiFous>

	<CentreMultiFous
		name="{{salarie.name}}"
		infoPrincipale="{{salarie.id}}"
		status="{{salarie.status}}"
		infoSecondaire="{{salarie.email}}"
	></CentreMultiFous>
</template>
