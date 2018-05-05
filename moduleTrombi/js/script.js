var coordX;
var coordY;
var randomX;
var randomY;
var angle;
var rayonCercle = 300;
var tabAngles = [];
var tabX = [];
var tabY = [];
var idCyril = document.getElementById("cyril");
var largeurPhoto = document.getElementById("cyril").offsetWidth;
var hauteurPhoto = document.getElementById("cyril").offsetHeight;
var largeurDiv = document.getElementById("trombiDiv").offsetWidth;
var hauteurDiv = document.getElementById("trombiDiv").offsetHeight;
var coordXCentre = (largeurDiv/2) - (largeurPhoto/2);
var coordYCentre = (hauteurDiv/2) - (hauteurPhoto/2);

function calculCoordonnées(nbPhotos){

	var angleParPhoto = 360/nbPhotos;

	angleParPhoto = (Math.PI *angleParPhoto / 180);
	angleParPhoto = parseFloat(angleParPhoto.toFixed(4));
	

	var angleTemp = 0;

	for (var i = 0; i < nbPhotos; i++){

		tabAngles.push(parseFloat(angleTemp.toFixed(4)));
		angleTemp = (parseFloat(angleParPhoto.toFixed(4)) + parseFloat(angleTemp.toFixed(4)));

	}

	for (var i = 0; i < nbPhotos; i++){

		tabX.push(parseFloat((Math.cos(tabAngles[i]) * rayonCercle).toFixed(4)));
		tabY.push(parseFloat((Math.sin(tabAngles[i]) * rayonCercle).toFixed(4)));

	}

	// console.log(tabAngles);
	// console.log(tabX);
	// console.log(tabY);
}

/*explications de la fonction :
- on définit une variable angle, qu'on convertit en radian pour faire fonctionner les cos et sin
- on prend un angle temporaire pour exécuter le premier calcul
- pour chaque photo on fait changer la valeur de l'angle temporaire et on ajoute cet angle à un tableau
- on calcule les coordonnées correspondant aux sinus et cosinus de cet angle temporaire
*/

function randomTrombi(){

	var trombiDiv = document.getElementById("trombiDiv");

	for (var i = 0; i < trombiDiv.children.length; i++) {

		randomX = Math.trunc(Math.random()*(parseInt(largeurDiv) - parseInt(largeurPhoto)));
		// console.log(randomX);
		randomY = Math.trunc(Math.random()*(parseInt(hauteurDiv) - parseInt(hauteurPhoto)));
		// console.log(randomY);
		// trombiDiv.children[i].style.left = randomX + "px";
		// trombiDiv.children[i].style.top = randomY + "px";
		
		$(trombiDiv.children[i]).animate({left: randomX + "px", top: randomY + "px"},1000);

	}

}

/*Cette fonction randomTrombi ne dépend pas du calcul de coordonnées !
- On définit deux variables randomX et randomY qui correspondent à des positions au hasard à l'intérieur de notre div
- Un animate JQuery place chaque photo*/

function centerTrombi(){

	var trombiDiv = document.getElementById("trombiDiv");

	for (var i = 0; i < trombiDiv.children.length; i++) {

		// trombiDiv.children[i].style.left = coordXCentre + "px";
		// trombiDiv.children[i].style.top = coordYCentre + "px";

		$(trombiDiv.children[i]).animate({left: coordXCentre + "px", top: coordYCentre + "px"},1000);

	}	

	console.log(coordXCentre);
	console.log(coordYCentre);

}
/*Ici une fonction de centrage; on place le centre du cercle au centre de notre div*/

function circleTrombi(){

	var trombiDiv = document.getElementById("trombiDiv");

	for (var i = 0; i < trombiDiv.children.length; i++) {

		// trombiDiv.children[i].style.left = tabX[i] + coordXCentre + "px";
		// trombiDiv.children[i].style.top = tabY[i] + coordYCentre + "px";
		 
		$(trombiDiv.children[i]).animate({left: tabX[i] + coordXCentre + "px", top: tabY[i] + coordYCentre + "px"},500);

	}

	// document.getElementById("remi").style.left = coordXCentre + "px";
	// document.getElementById("remi").style.top = coordYCentre - hauteurPhoto + "px";
	$(document.getElementById("remi")).animate({left: coordXCentre + "px", top: coordYCentre - hauteurPhoto + "px"},500);
	// document.getElementById("cyril").style.left = coordXCentre + "px";
	// document.getElementById("cyril").style.top = coordYCentre + hauteurPhoto + "px";
	$(document.getElementById("cyril")).animate({left: coordXCentre + "px", top: coordYCentre + hauteurPhoto + "px"},500);

}
/*Ici on assigne un set de coordonnées à chaque photo en nous aidant des variables coordonnées définies plus haut
Seule exception le placement des photos de Rémi et Cyril qui sont placées sur le même axe Y que le centre du cercle*/

document.getElementById("aleatoire").addEventListener("click", function(){

	randomTrombi();


});
document.getElementById("centrence").addEventListener("click", centerTrombi);
document.getElementById("circle").addEventListener("click", circleTrombi);

calculCoordonnées(trombiDiv.children.length - 2);
randomTrombi();

/*Ci-dessus le déclenchement des fonctions. Comme je n'ai pas pu récupérer ce qu'avait fait Swan Mercredi j'ai
laissé ce qu'on avait fait : avec des boutons. Ainsi on met à l'honneur le programme quand même...*/

/*essai Marvin pour l'affichage des éléments en fonction du scroll*/
/*var rect = document.querySelector(".trombinoscope").getBoundingClientRect().top;
console.log(rect);
var circleDone = false;
randomTrombi();
document.addEventListener("scroll", function()
	{
		rect = document.querySelector(".trombinoscope").getBoundingClientRect();
  		console.log(rect.top);

	}, false);


setInterval(executeAll, 5000);

function executeAll() {

		if (rect.top < document.getElementById("blank1").offsetHeight && rect.top > document.getElementById("modulTrombi").offsetHeight && circleDone == false) {
		  	calculCoordonnées(trombiDiv.children.length - 2);
		  	centerTrombi();
		  	circleTrombi();
		  	circleDone=true;
		}

		else {
	  		randomTrombi();
	  		circleDone=false;
	  	}

}*/


			var franck = document.getElementById("franck").addEventListener("mouseover", function(){
			displayInfo("img/Barland_Franck_small.jpg", "Franck Barland", "\"Je suis Franck.\"")}, false);

			var ali = document.getElementById("ali").addEventListener("mouseover", function(){
			displayInfo("img/Ben_Ali_small.jpg", "Ali Benabderrahmane", "\"Je suis Ali.\"")}, false);

			var michel = document.getElementById("michel").addEventListener("mouseover", function(){
			displayInfo("img/Bra_Michel_small.jpg", "Michel Brayé", "\"Je suis Michel\"")}, false);

			var marvinW = document.getElementById("marvin_w").addEventListener("mouseover", function(){
			displayInfo("img/Wort_Marvin_small.jpg", "Marvin Wortman", "\"Je suis Marvin\"")}, false);
			
			var celia = document.getElementById("celia").addEventListener("mouseover", function(){
			displayInfo("img/DeFr_Célia_small.jpg", "Célia de Francqueville", "\"Je suis Célia.\"")}, false);

			var gary = document.getElementById("gary").addEventListener("mouseover", function(){
			displayInfo("img/Der_Gary_small.jpg", "Gary Dereuse", "\"Je suis Gary.\"")}, false);
			
			var fanny = document.getElementById("fanny").addEventListener("mouseover", function(){
			displayInfo("img/Duf_Fanny_small.jpg", "Fanny Dufour", "\"Je suis Fanny.\"")}, false);
			
			var michael = document.getElementById("michael").addEventListener("mouseover", function(){
			displayInfo("img/Dup_Michael_small.jpg", "Michael Duputel", "\"Je suis Michael.\"")}, false);

			var anne = document.getElementById("anne").addEventListener("mouseover", function(){
			displayInfo("img/Tab_Anne_small.jpg", "Anne Tabry", "\"Je suis Anne.\"")}, false);

			var valerie = document.getElementById("valerie").addEventListener("mouseover", function(){
			displayInfo("img/Baron_Valérie_small.jpg", "Valérie Baron", "\"Je suis Valérie.\"")}, false);

			var jlouis = document.getElementById("jean-louis").addEventListener("mouseover", function(){
			displayInfo("img/Jean-Louis_small.jpg", "Jean-Louis Bailet", "\"Je suis Jean-Louis.\"")}, false);	
			
			var thibaut = document.getElementById("thibaut").addEventListener("mouseover", function(){
			displayInfo("img/Khe_Thibaut_small.jpg", "Thibaut Khelil", "\"Je suis Thibaut.\"")}, false);

			var lucas = document.getElementById("lucas").addEventListener("mouseover", function(){
			displayInfo("img/Lor_Lucas_small.jpg", "Lucas Lorenzelli", "\"Je suis Lucas.\"")}, false);

			var mathieu = document.getElementById("mathieu").addEventListener("mouseover", function(){
			displayInfo("img/Money_Mathieu_small.jpg", "Mathieu Money", "\"Je suis Mathieu.\"")}, false);

			var lucie = document.getElementById("lucie").addEventListener("mouseover", function(){
			displayInfo("img/Nej_Lucie_small.jpg", "Lucie Nejezchlebova", "\"Je suis Lucie.\"")}, false);

			var nicolas = document.getElementById("nicolas").addEventListener("mouseover", function(){
			displayInfo("img/Pie_Nicolas_small.jpg", "Nicolas Pietri", "\"Je suis Nicolas.\"")}, false);

			var marvinP = document.getElementById("marvin_p").addEventListener("mouseover", function(){
			displayInfo("img/Poti_Marvin_small.jpg", "Nicolas Poticadou", "\"Je suis Marvin.\"")}, false);

			var floriane = document.getElementById("floriane").addEventListener("mouseover", function(){
			displayInfo("img/Mura_Floriane_small.jpg", "Floriane Mura", "\"Je suis Floriane.\"")}, false);

			var tenders = document.getElementById("tenders").addEventListener("mouseover", function(){
			displayInfo("img/Rasa_Tendry_small.jpg", "Tendry Rasamizafy", "\"Je suis Tenders.\"")}, false);

			var swan = document.getElementById("swan").addEventListener("mouseover", function(){
			displayInfo("img/Ber_Swan_small.jpg", "Swan Bertrand", "\"Je suis Swan.\"")}, false);

			var benoit = document.getElementById("benoit").addEventListener("mouseover", function(){
			displayInfo("img/Par_Benoit_small.jpg", "Benoît Parsy", "\"Je suis Benoît.\"")}, false);

			var maelie = document.getElementById("maelie").addEventListener("mouseover", function(){
			displayInfo("img/Len_Maélie_small.jpg", "Maélie Lenard", "\"Je suis Maélie.\"")}, false);

			var julien = document.getElementById("julien").addEventListener("mouseover", function(){
			displayInfo("img/Rey_Julien_small.jpg", "Julien Raynaud", "\"Je suis Julien.\"")}, false);

			var anna = document.getElementById("anna").addEventListener("mouseover", function(){
			displayInfo("img/Scib_Anna_small.jpg", "Anna Scibska", "\"Je suis Anna.\"")}, false);

			var jan = document.getElementById("jan").addEventListener("mouseover", function(){
			displayInfo("img/Verm_Jan_small.jpg", "Jan Vermeulen", "\"Je suis Jan.\"")}, false);

			var jeremy = document.getElementById("jeremy").addEventListener("mouseover", function(){
			displayInfo("img/Cin_Jérémy_small.jpg", "Jérémy Cinelli", "\"Je suis Jérémy.\"")}, false);

			var remi = document.getElementById("remi").addEventListener("mouseover", function(){
			displayInfo("img/Lan_Remi_small.jpg", "Rémi Lanney", "\"Grand méchant coach facilitateur.\"")}, false);

			var cyril = document.getElementById("cyril").addEventListener("mouseover", function(){
			displayInfo("img/Enr_Cyril_very_small.png", "Cyril Enrici", "\"Grand méchant coach facilitateur.\"")}, false);


			function displayInfo(src, title, text) {
				document.querySelector(".descriptif img").setAttribute("src", src);
				document.querySelector(".pedigree h3").innerHTML=title;	
				document.querySelector(".pedigree p").innerHTML=text;		
			}

/*La fonction displayInfo(src, title, text) récupère les paramètres imposés par les addEventListener de chaque ID
remplace les bons endroits du DOM*/


    		var smallHover = Array.from(document.querySelectorAll(".smallPhoto"));
    		var element;
    		
    		for (i = 0; i < smallHover.length; i++) {
        		element = smallHover[i];
       			element.addEventListener("mouseout", displayDefaultInfo);
    		}

    		function displayDefaultInfo() {
				
				document.querySelector(".descriptif img").setAttribute("src", "img/And_Laurent_small.jpg");
				document.querySelector(".pedigree h3").innerHTML="Laurent Andrieux";
				document.querySelector(".pedigree p").innerHTML="\"Directeur de projet\"";
			
			}

/*La fonction displayDefaultInfo fait la même chose; à chaque fois qu'on stoppe le survol de chaque photo, c'est
l'information par Défaut (Laurent) qui apparaît*/

