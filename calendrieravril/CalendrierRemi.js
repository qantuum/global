
// je créé une fonction qui me permet de récupérer le nombre de jour du mois
// elle renvoi un entier
// debut fonction lastDayOfTheMonth
Date.prototype.lastDayOfTheMonth=function(){
   return new Date(this.getFullYear(),this.getMonth()+1,0).getDate();
}

// fin fonction lastDayOfTheMonth

// Je créé une fonction qui génère un tableau 
// Prend 2 arguments : éléments dans lequel insérer le tableau, et une date
// debut fonction generateTable
function generateTable(elmt, d){
	// J'efface le contenu de l'élément donné en argument
	elmt.innerHTML = "";
	// je rend d facultative
	if(typeof d == "undefined" || typeof d != "object"){
		d = new Date();
	}
	// je créé mon tableau / ma balise table
	var table = document.createElement("table");
	//je l'attache à mon html
	elmt.appendChild(table);


	// tableau des jours de la semaine
	var JourSemaine = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
	var mois = ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août","Septembre", "Octobre", "Novembre", "Décembre"];
	//j'initialise ma première ligne tr ainsi que mes premières cellules de type th
	// je rajoute un colspan sur ma cellule pour prendre la taille nécéssaire
	var firstLigne = document.createElement("tr"), firstRow = document.createElement("th");
	firstRow.setAttribute("colspan", 3);
	firstRow.innerHTML = mois[d.getMonth()] + " " + d.getFullYear();
	firstRow.setAttribute("class", "titre");
	var previousMonth = document.createElement("th");
	previousMonth.setAttribute("colspan", 2);
	var buttonPrev = document.createElement("button");
	buttonPrev.innerHTML = "<<";
	buttonPrev.id = "previousYear";
	previousMonth.appendChild(buttonPrev);
	buttonPrev = document.createElement("button");
	buttonPrev.innerHTML = "<";
	buttonPrev.id = "previousMonth";
	previousMonth.appendChild(buttonPrev);
	
	
	var nextMonth = document.createElement("th");
	nextMonth.setAttribute("colspan", 2);
	var buttonNext = document.createElement("button");
	buttonNext.innerHTML = ">";
	buttonNext.id = "nextMonth";
	nextMonth.appendChild(buttonNext);
	buttonNext = document.createElement("button");
	buttonNext.innerHTML = ">>";
	buttonNext.id = "nextYear";
	nextMonth.appendChild(buttonNext);

	// J'attache mes cellules à ma ligne
	firstLigne.appendChild(previousMonth);
	firstLigne.appendChild(firstRow);
	firstLigne.appendChild(nextMonth);
	
	table.appendChild(firstLigne);
	// je créé une nouvelle ligne tr
	var ligne = document.createElement("tr");
	// pour chaque jour dans mon tableau JourSemaine je créé une cellule que je rempli avec un nom de jour de semaine et je l'attache à ma ligne
	// debut for
	for (var i = 0; i < JourSemaine.length; i++) {
		var rowth = document.createElement("th");
		rowth.setAttribute("class", "days");
		rowth.innerHTML = JourSemaine[i];
		ligne.appendChild(rowth);
	}
	// fin for
	// J'attache ma ligne au tableau 
	// j'ai maintenant 2 lignes
	table.appendChild(ligne);

	// J'ai besoin de connaitre quel jour tombe le premier du mois
	// je créé une variable de type date pour ce jour particulier
	var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
	// je créé une variable de décallage pour caller des cellules vides
	var decal = firstDay.getDay();
	
	// Je créé une nouvelle ligne
	ligne = document.createElement("tr");
	
	// j prend pour valeur le nombre de jour du mois précédent moins mon décallage afin de commencer au bon nombre
	var j = (new Date(d.getFullYear(), d.getMonth()-1).lastDayOfTheMonth() - decal);
	for (var i = 0; i < decal; i++) {
		// je créé ma cellule
		var cell = document.createElement("td");
		// j'insère j après l'avoir incrémenté
		cell.innerHTML = ++j;
		// je définie une class à ma cellule
		cell.setAttribute("class", "otherMonth");
		ligne.appendChild(cell);
	}

	// je créé autant de cellule vide que mon décallage, que j'attache à ma ligne
	// debut for
	// ma ligne n'est pas complétement rempli
	// j'initialise une variable me permettant de savoir quand attacher ma ligne au tableau

	var sautLigne = decal;
	// je récupère la date à 0h 0min 0sec 0 millisec
	var now = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	// pour une variable allant de 1 à nombre de jour du mois

	for (var i = 1; i <= d.lastDayOfTheMonth(); i++) {
		// Je créé une cellule dans laquelle je met la valeur de ma variable allant de 1 à nombre de jours
		var row = document.createElement("td");
		row.innerHTML = i;
		//je créé une date en fonction de i
		var dateToTest = new Date(d.getFullYear(), d.getMonth(), i);
		// je teste si la date d'aujourd'hui correspond à la date en cours
		// le toString me permet de transformer mes dates en string
		if( dateToTest.toString() == now.toString()){
			row.setAttribute("class", "now");
		}
		// j'attache ma cellule à ma ligne
		ligne.appendChild(row);
		// j'incrémente ma variable de décallage
		sautLigne++;
		// si ma ma variable de décallage est égale à 7 
		if(sautLigne==7){
			// je réinitialise à 0 ma variable de décallage
			sautLigne = 0;
			// j'attache ma ligne à mon tableau
			table.appendChild(ligne);
			// je créé une nouvelle ligne 
			ligne = document.createElement("tr");
		}
		// fin for
	}
	// si ma ligne n'est pas remplie
	if(sautLigne >0){
		// j'initialise une variable 
		var j = 0;
		// tant que je n'ai pas rempli ma ligne
		for (var i = sautLigne; i < 7; i++) {
			// je créé une cellule
			var cell = document.createElement("td");
			// je met dedans le valeur de j après l'avoir incrémentée
			cell.innerHTML = ++j;
			// je définie une classe
			cell.setAttribute("class", "otherMonth");
			// j'attache ma cellule à ma ligne
			ligne.appendChild(cell);

		}	
	}
	// j'attache ma dernière ligne à mon tableau
	table.appendChild(ligne);

	// je créé les écouteurs sur mes bouttons en définissant un nouveau mois ou une nouvelle année
	document.getElementById("previousMonth").addEventListener("click", function(e){
		generateTable(document.getElementById('calendar'), new Date(d.getFullYear(), d.getMonth()-1));
	});
	document.getElementById("nextMonth").addEventListener("click", function(e){
		generateTable(document.getElementById('calendar'), new Date(d.getFullYear(), d.getMonth()+1));
	});
	document.getElementById("previousYear").addEventListener("click", function(e){
		generateTable(document.getElementById('calendar'), new Date(d.getFullYear()-1, d.getMonth()));
	});
	document.getElementById("nextYear").addEventListener("click", function(e){
		generateTable(document.getElementById('calendar'), new Date(d.getFullYear()+1, d.getMonth()));
	});
}

// j'appel ma fonction generateTable
generateTable(document.getElementById('calendar'));