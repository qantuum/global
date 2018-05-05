(function(){
	var testElement = function(champ){
				var textAlert = "";
				switch(champ.getAttribute("name")){
					case "Prenom":
						if(champ.value.length < 2){ textAlert += "le champ prénom ne peut pas être si court !\n";}
						break;
					case "Nom":
						if(champ.value.length < 2){ textAlert += "le champ nom ne peut pas être si court !\n";}
						break;
					case "Sexe":
						if(champ.value != "Homme" && champ.value != "Femme"){ textAlert += "le champ sexe doit être défini !\n";}
						break;
					case "Date_de_naissance":
						if(champ.value.length != 10 && champ.value.length != 8){ textAlert += "le champ Date de naissance est mal formé !\n";}
						var d = champ.value.split("/");
						if(d.length != 3) { textAlert += "le champ Date de naissance est mal formé (format jj/mm/aa) !\n";}
						break;
					case "Nationalite":
						if(champ.value.length < 2){ textAlert += "le champ Nationalité ne peut pas être si court !\n";}
						break;
					case "Adresse":
						var a = champ.value.split(" ");
						if(a.length < 3){ textAlert += "le champ adresse est mal formé !\n";}
						break;
					case "CP":
						if(champ.value.length != 5){ textAlert += "le champ CP doit contenir 5 caractères !\n";}
						break;
					case "Ville":
						if(champ.value.length < 1){ textAlert += "le champ Ville doit contenir au moins 1 caractère !\n";}
						break;
					case "Email":
						var regex = /^.+@.+\.[a-z]{2,4}$/;
						if(!regex.test(champ.value)){ textAlert += "le champ Email est mal formé !\n";}
						break;
					case "Telephone" :
						if(champ.value.length != 10 && champ.value.length != 14){ textAlert += "le champ Telephone est mal formé !\n";}
						break;

					case "Num_pole_emploi":
						if(champ.value.length  > 0 && champ.value.length != 8){ textAlert += "le champ num pe est mal formé !\n";}
						break;
					case "Num_secu":
						if(champ.value.length  > 0 && champ.value.length != 13 && champ.value.length != 15){ textAlert += "le champ num secu est mal formé !\n";}
						break;
					case "MAJ" :
						if(textAlert.length > 0) {champ.preventDefault();}
						break;
				}

				if(textAlert.length > 0){
					return textAlert;
				} else {
					return "";
				}
		};
	
	var elementToTest = document.querySelectorAll("input, select");
	for (var i = 0; i < elementToTest.length; i++) {
		if(elementToTest[i].getAttribute("type") == "submit" || elementToTest[i].getAttribute("type") == "button"){
				elementToTest[i].addEventListener("click", function(e){
					e.preventDefault();
					var test = "";
					for (var j = 0; j < elementToTest.length; j++) {
						if(elementToTest[j].getAttribute("type") != "submit" && elementToTest[j].getAttribute("type") != "button"){
							test += testElement(elementToTest[j]);
						}
					}
					if(test != ""){
						alert(test);
					} else {
						alert("formulaire validé !");
						document.getElementById('addCandidat').submit();
					}
					
				}) ;
			} else {
				elementToTest[i].addEventListener("blur", function(e){
					var test = testElement(this);
					if(test != ""){
						alert(test);
					}
				}) ;
		}
		
	}
})();