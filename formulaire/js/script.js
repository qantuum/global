document.getElementById("clicksave").addEventListener("click", checkings); 

function checkings() {
    var name = document.getElementById("Name").value;
    var forename = document.getElementById("forename").value;
    var birthdate = document.getElementById("Birthdate").value;
    var nationality = document.getElementById("Nationality").value;
    var adresse = document.getElementById("Adresse").value;
    var postcode = document.getElementById("postcode").value;
    var town = document.getElementById("town").value;
    var email = document.getElementById("emailz").value;
    var telephone = document.getElementById("telefonz").value;
    var statut = document.getElementById("Statut").value;
    var polemp = document.getElementById("polemp").value;
    var numsecu = document.getElementById("numsecu").value;

    var today = new Date();
    var birthdateyear = birthdate.split("/")[0];
    var birthdatemonth = birthdate.split("/")[1];
    var birthdateday = birthdate.split("/")[2];


    var infinite = true;

    while(infinite == true) {

    	alert("Validation des données...");

	    if (!isNaN(name) || name.length < 2 || name == "" || /[A-Z]/g.test(name) == false) {
	    	alert("Veuillez saisir un nom en majuscules de deux lettres ou plus");
	    	break;
	    }

	    else if (!isNaN(forename) || forename.length < 2 || forename == "" || /^[A-Z][a-z]/.test(forename) == false) {
			alert("Veuillez saisir un prénom de deux lettres ou plus avec une première lettre capitale");
	    	break;
	    }

	    else if (/[0-9]{4,}\/[0-1][0-2]\/[0-3][0-9]/.test(birthdate) == false) {
	    	alert("Veuillez saisir une date de naissance au format AAAA/MM/JJ. Vous devez avoir entre 18 et 120 ans"
	    		+ /[0-9]{4,}\/[0-1][0-2]\/[0-3][0-9]/.test(birthdate));
	    	break;
	    }

	    else if (!isNaN(nationality) || nationality == "") {
	    	alert("Veuillez saisir une nationalité valide")
	    	break;
	    }

	    else if (!isNaN(adresse) || adresse == "") {
	    	alert("Veuillez saisir une adresse valide");
	    	break;
	    }

	    else if (postcode = "" || postcode.length < 3) {
	    	alert("Veuillez saisir un code postal valide");
	    	break;
	    }

	    else if (!isNaN(town) || town.length < 3 || town == "") {
	    	alert("Veuillez saisir une ville valide");
	    	break;
	    }

	    else if (!isNaN(email) || email == "") {
	    	alert("Veuillez saisir une adresse e-mail valide");
	    	break;
	    }

	    else if (isNaN(parseInt(telephone)) || telephone == "" || telephone.length != 10) {
	    	alert("Veuillez saisir un numéro de téléphone valide");
	    	break;
	    }

	    else if (!isNaN(statut) || statut == "" || statut.length < 3) {
	    	alert("Veuillez saisir un statut valide");
	    	break;
	    }

	    else if (polemp.length != 8 && polemp != "") {
	    	alert("Veuillez saisir un numéro d'allocataire valide");
	    	break;
	    }

	    else if (numsecu != "" && numsecu.length != 15) {
	    	alert("Veuillez saisir un numéro de sécurité sociale valide");
	    	break;
	    }


		break;	

	}
	 
}

var isDone = true;
document.getElementById("achamps").addEventListener("click", achamps); 



function achamps() {

	if (isDone) {

		var newSelect = document.createElement('option'); //nouvelle option créée
		newSelect.value = "Apache Helicopter"; //valeur (attribut)
		var texte = document.createTextNode("Apache Helicopter"); //texte à créer
		newSelect.appendChild(texte); //associe texte à l'option
		var selectPos = document.getElementById("Gender"); //trouve à quel endroit on ajoute le bb
		selectPos.appendChild(newSelect); //on ajoute tout ce petit monde là-dedans

		
		document.getElementById("qpvnono").innerHTML = "Non / ";


		var newRadio = document.createElement('input'); //nouveau radio créé
		newRadio.type = "radio"; //différents attributs à fixer
		newRadio.name = "qpv";
		newRadio.value = "peut-être";
		newRadio.checked = "checked";
		newRadio.id = "qpvmaybe";
		//marche aussi newRadio.setAttribute("id", "qpvmaybe");
		//pour avoir un attribut je peux utilier getAttribute;
		//set et getAttribute sont mieux car le nom de l'attribut directement,
		//ne fonctionne pas avec tout !!!
		var selectRadio = document.getElementById("qpvfield");
		//si je ne veux pas mettre de nouveau id ou classe je peux aller à :
		//document.getElementById("qpvyes").parentNode;
		selectRadio.appendChild(newRadio); //on ajoute tout ce petit monde là-dedans


		var newLabel = document.createElement('label');
		newLabel.for = "qpvmaybe";
		var texteLab = document.createTextNode("Peut-être");
		newLabel.appendChild(texteLab);
		var selectLab = document.getElementById("qpvfield"); //trouve à quel endroit ajouter le bb
		selectLab.appendChild(newLabel);

		isDone = false;

		}

		//si je mets {once : true} à la fin de ma fonction, elle ne s'exécute qu'une seule fois -
		//cette fonction once détruit le eventListener


}