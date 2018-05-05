<?php

	//require "php/script.php";

?>

<!DOCTYPE html>

<html lang="fr">
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<body>
	<section class="trombinoscope" id="modulTrombi"> <!-- Conteneur principal-->

		<div class="cercle" id="trombiDiv"><!--Conteneur contenant les photos en petit-->

			<img class="smallPhoto" id="franck" src="img/Barland_Franck_small.jpg" alt="franck">
			<img class="smallPhoto" id="ali" src="img/Ben_Ali_small.jpg" alt="ali">
			<img class="smallPhoto" id="michel" src="img/Bra_Michel_small.jpg" alt="michel" >
			<img class="smallPhoto" id="marvin_w" src="img/Wort_Marvin_small.jpg" alt="marvin_w">
			<img class="smallPhoto" id="celia" src="img/DeFr_Célia_small.jpg" alt="celia">
			<img class="smallPhoto" id="gary" src="img/Der_Gary_small.jpg" alt="gary">
			<img class="smallPhoto" id="fanny" src="img/Duf_Fanny_small.jpg" alt="fanny">
			<img class="smallPhoto" id="michael" src="img/Dup_Michael_small.jpg" alt="michael">
			<img class="smallPhoto" id="anne" src="img/Tab_Anne_small.jpg" alt="anne" >
			<img class="smallPhoto" id="valerie" src="img/Baron_Valérie_small.jpg" alt="valerie">
			<img class="smallPhoto" id="jean-louis" src="img/Jean-Louis_small.jpg" alt="jean-louis">
			<img class="smallPhoto" id="thibaut" src="img/Khe_Thibaut_small.jpg" alt="thibaut">
			<img class="smallPhoto" id="lucas" src="img/Lor_Lucas_small.jpg" alt="lucas">
			<img class="smallPhoto" id="mathieu" src="img/Money_Mathieu_small.jpg" alt="mathieu">	
			<img class="smallPhoto" id="lucie" src="img/Nej_Lucie_small.jpg" alt="lucie">
			<img class="smallPhoto" id="nicolas" src="img/Pie_Nicolas_small.jpg" alt="nicolas">
			<img class="smallPhoto" id="marvin_p" src="img/Poti_Marvin_small.jpg" alt="marvin_p">
			<img class="smallPhoto" id="floriane" src="img/Mura_Floriane_small.jpg" alt="floriane">
			<img class="smallPhoto" id="tenders" src="img/Rasa_Tendry_small.jpg" alt="tenders">
			<img class="smallPhoto" id="swan" src="img/Ber_Swan_small.jpg" alt="swan">
			<img class="smallPhoto" id="benoit" src="img/Par_Benoit_small.jpg" alt="benoit">
			<img class="smallPhoto" id="maelie" src="img/Len_Maélie_small.jpg" alt="maelie">
			<img class="smallPhoto" id="julien" src="img/Rey_Julien_small.jpg" alt="julien">
			<img class="smallPhoto" id="anna" src="img/Scib_Anna_small.jpg" alt="anna">
			<img class="smallPhoto" id="jan" src="img/Verm_Jan_small.jpg" alt="jan">
			<img class="smallPhoto" id="jeremy" src="img/Cin_Jérémy_small.jpg" alt="jeremy">
			<img class="smallPhoto" id="remi" src="img/Lan_Remi_small.jpg" alt="remi">
			<img class="smallPhoto" id="cyril" src="img/Enr_Cyril_very_small.png" alt="cyril">

		</div>

		<hr />
		<div id="individuelle"><!--Conteneur contenant les informations sur les apprenants-->
			<div class="descriptif">
				<img id="laurent" src="img/And_Laurent_small.jpg" alt="une photo" >
				
			</div>
			<div class="pedigree">
				<h3 id="nomPrenom">Laurent Andrieux</h3>
				<p id="textePerso">"Directeur de projet."</p>
				<button id="aleatoire">Aléatoirisation</button><!--bouton déclenchant l'affichage aléatoire des photos-->
				<button id="centrence">Centralisation</button><!--bouton déclenchant l'affichage de toutes photos au centre-->
				<button id="circle">Cerclisation</button><!--bouton exécutant la mise en cercle-->
			</div>
		</div>
	</section>
	<script type="text/javascript" src="js/script.js"></script>
</body>

</html>
