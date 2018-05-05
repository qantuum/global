//-------------AFFICHER CACHER -------------------

$('#depart1').click(function(){
	jQuery.fx.off = false;

	$("#violet").hide(1000);
	$("#violet").show(1000);

});

//-------------FONDU-------------------

$('#depart2').click(function(){
	jQuery.fx.off = false;
	$("#jaune").fadeOut(1000);
	$("<p id=\"text\">Coucou</p>").appendTo("#bleu");
	$("#text").fadeOut(2000);
	
});

$("#orange").hover(function(){
	jQuery.fx.off = false;
    $("#orange").fadeToggle(1000);
}, function(){
	jQuery.fx.off = false;
    $("#orange").fadeIn(1000);
});

//-------------SLIDE-------------------

$('#depart3').click(function(){
	jQuery.fx.off = false;
	$("#noir").slideUp(1000);
});

$('#gris').click(function(){
	jQuery.fx.off = false;
	$("#gris").slideUp(1000);
	$("#gris").slideDown(1000);
	$("#marron").show(100);
});

$("#marron").hover(function(){
	$("#marron").slideToggle(300);
}, function() {
});


//Inserez le code de votre animation ici !

//-------------ANIMATE-------------------

$('#depart4').click(function(){
	jQuery.fx.off = false;
	$("#vert").animate({
		left:'+=50',
	},1000);	
});

$("#rouge").hover(function() {
	jQuery.fx.off = false;
	$("#rouge").animate({
		left:"+=50"
	},50);
},function() {
	jQuery.fx.off = false;
	$("#rouge").animate({
		top:"+=60"
	},60);
});

//-------------DELAI DESACTIVER------------

$('#depart5').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	
});

$('#desactiver').click(function(){
	jQuery.fx.off = true;
	//Inserez le code de votre animation ici !
});

$('.reload').click(function(){
	location.reload();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#navBar').slideDown('slow');
  } else {
    $('#navBar').slideUp('slow');
  }
  prevScrollpos = currentScrollPos;
} 

