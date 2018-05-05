//-------------AFFICHER CACHER -------------------

$('#depart1').click(function(){ // Evenement click sur le bouton départ
	jQuery.fx.off = false;

	$('#violet').hide('slow'); // On cache la div #violet
	$('#violet').show('slow'); // On affiche la div #violet

});

//-------------FONDU-------------------

$('#depart2').click(function(){ // Evenement click sur le bouton départ
	jQuery.fx.off = false;
	
	$('#jaune').fadeOut('slow'); // On fait disparaitre la div #jaune
	// On crée un element <p> que l'on fait apparaitre en fondu dans la div #bleu
	$('<p id="text">').html('Bonjour').fadeIn('slow').appendTo('#bleu');
	$('#text').fadeOut('slow');	// On fait disparaitre l'element text.
});

$('#orange').hover(function(){ // On crée un evenement hover sur la div à faire animer
	$('#orange').fadeToggle('slow'); // Au mouseEnter la methode slideToggle se lance
}, function(){
	$('#orange').fadeToggle('slow');// Puis au mouseLeave on toggle encore
});

//-------------SLIDE-------------------

$('#depart3').click(function(){ // Evenement click sur le bouton départ
	jQuery.fx.off = false;

	$('#noir').slideUp('slow');	// On fait glisser la div #noir
});

$('#gris').click(function(){ //Evenement click sur la div #gris
	
	$('#gris').slideUp('slow'); // pliage dépliage 
	$('#gris').slideDown('slow');// de la div #gris
	$('#marron').slideDown('slow');// Dépliage de la div #marron
});

$('#marron').hover(function(){ //Evenement hover sur la div #marron
	$('#marron').slideToggle('slow'); //Changement d'etat slide sur la div #marron
}, function(){});

//-------------ANIMATE-------------------

$('#depart4').click(function(){ // Evenement click sur le bouton départ
	jQuery.fx.off = false;

	for (var i = 0; i < 5; i++) { //Boucle de répétition de l'animation
		$('#rouge').animate({ bottom: '-100px'}, "easeInOut") //On deplace la div #rouge de 100px vers le bas
		.animate({ right: '457px'}, "easeInOut") //On deplace la div #rouge de 457px vers la gauche
		.animate({ bottom: '100px'}, "easeInOut")
		.animate({ right: '0px'}, "easeInOut") // On revient au point de depart de la coordonné X
		.animate({ bottom: '0px'}, "easeInOut"); // On revient au point de depart de la coordonné Y
		
		$('#vert').animate({ bottom: '100px'}, "easeInOut")
		.animate({ left: '457px'}, "easeInOut")
		.animate({ bottom: '-100px'}, "easeInOut")
		.animate({ left: '0px'}, "easeInOut")
		.animate({ bottom: '0px'}, "easeInOut");
	}
	
});

//-------------DELAI DESACTIVER------------

$('#depart5').click(function(){ // Evenement click sur le bouton départ
	jQuery.fx.off = false;

	for (var i = 0; i < 5; i++) {
		$('#cyan').animate({ bottom: '-100px'}, "easeInOut")
		.animate({ right: '457px'}, "easeInOut")
		.animate({ bottom: '100px'}, "easeInOut")
		.animate({ right: '0px'}, "easeInOut")
		.animate({ bottom: '0px'}, "easeInOut");
		
		$('#pink').animate({ bottom: '100px'}, "easeInOut")
		.animate({ left: '457px'}, "easeInOut")
		.animate({ bottom: '-100px'}, "easeInOut")
		.animate({ left: '0px'}, "easeInOut")
		.animate({ bottom: '0px'}, "easeInOut");
	}
	
});

$('#desactiver').click(function(){ // Evenement click sur le bouton arret
	jQuery.fx.off = true;
	$('#cyan').stop(true, true);// On stop l'animation en cours en réinitialisant 
	$('#pink').stop(true, true);// la file d'attente et on 'jump' directement a la fin
});

$('.reload').click(function(){ // Evenement click sur les bouton reload
	location.reload();
});

