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



};

function centerTrombi(){

	var trombiDiv = document.getElementById("trombiDiv");

	for (var i = 0; i < trombiDiv.children.length; i++) {

		// trombiDiv.children[i].style.left = coordXCentre + "px";
		// trombiDiv.children[i].style.top = coordYCentre + "px";

		$(trombiDiv.children[i]).animate({left: coordXCentre + "px", top: coordYCentre + "px"},1000);

	}	

	console.log(coordXCentre);
	console.log(coordYCentre);

};

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

};

/*document.getElementById("aleatoire").addEventListener("click", function(){

	randomTrombi();


});
document.getElementById("centrence").addEventListener("click", centerTrombi);
document.getElementById("circle").addEventListener("click", circleTrombi);

calculCoordonnées(trombiDiv.children.length - 2);
randomTrombi();*/

document.getElementById("trombiDiv").addEventListener("mouseover", function()

	{
		const rect = document.querySelector(".trombinoscope").getBoundingClientRect();
  		console.log(rect.top);

  			calculCoordonnées(trombiDiv.children.length - 2);
  			centerTrombi();
  			circleTrombi();
  		




	});


