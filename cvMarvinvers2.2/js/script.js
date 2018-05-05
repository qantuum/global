var heigthNav = document.getElementById("navigator").clientHeight;

function init() {
	window.scrollTo(0, 0);
}

init();

/*##########BOUTONS MENUS##########*/
function compB() {
	var competencesPos = document.getElementById("competences").offsetTop - heigthNav;
	window.scrollTo(0, competencesPos);
}

function logB() {
	var logicielsPos = document.getElementById("logiciels").offsetTop - heigthNav;
	window.scrollTo(0, logicielsPos);
}

function formB() {
	var formationPos = document.getElementById("formation").offsetTop - heigthNav;
	window.scrollTo(0, formationPos);
}

function portB() {
	var portfolioPos = document.getElementById("portfolio").offsetTop - heigthNav;
	window.scrollTo(0, portfolioPos);
}

function proB() {
	var xproPos = document.getElementById("xpro").offsetTop - heigthNav;
	window.scrollTo(0, xproPos);
}

function persB() {
	var xpersoPos = document.getElementById("xperso").offsetTop - heigthNav;
	window.scrollTo(0, xpersoPos);
}

/*##########JQUERY##########*/

$(document).ready(function(){

	$("#compAromBtn").on("click", function() {
		$("#modalComp").slideDown();
	});

});