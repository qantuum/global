$(document).ready(function(){//charge le code contenu à l'intérieur quand la page est pleinement chargé, évite des erreurs potentielles
    

	$("#bt1").on("click", function() {
		if(olol==false) {
			$("#mesListes ul:nth-child(2)").children().remove();//nth-child commence à l'index 1; supprimer les enfants;
			$("#mesListes ul").first().append("<p>La rudesse de l'existence martèle les inductions parallépipédiques.<\/p>");
			//premier enfant -> ajouter;
	}
	});

	$("#partieFonctionnelle").children().last().on("click", function() {//dernier des enfants;
		if(olol==false) {
			$("#duTexte").children().eq(1).after("<p>Uchronie<\/p>");//eq commence à 0. eq 1 c'est la 2e ligne;after->insère après;
			$("#partieFonctionnelle").children().eq(0).before("<p>Mes boutons<\/p>");//premier enfant; insère avant;
		}
	});

	$("#li1").parentsUntil("body").css("border","2px solid blue");//tous les parents jusqu'au body (stoppe au body)

	$("#bt2").on("click", function() {
		if(olol==false){
			$("#mesListes ul:nth-child(3)").children().not("#li8").css({ "background-color": "black", "color": "white", "list-style":"none" });
			//le 3è enfant de #mesListes -> tous ses enfants (ici : les li);sauf celui d'id #li8;
			//syntaxe pour plusieurs param css : .css({"":"","":"",.....});
		}
	});

	$("#partieFonctionnelle").append("<button id=\"bt4\">bouton4</button>");

	var olol=false;

	$("#bt4").on("click", function() {
		$("#bt4").siblings().text("rhinocéros");
		olol=true;
	});

	$("button").not("#bt4").each(function(){
		$(this).on("click", function(){
			if (olol==true) {
				$("ul").eq(1).append($("ul").eq(1).children().first());
			}
		});
	});


}); 
