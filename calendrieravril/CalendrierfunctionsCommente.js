// je créé une fonction qui me permet de récupérer le nombre de jour du mois
// elle renvoi un entier
// debut fonction lastDayOfTheMonth

// fin fonction lastDayOfTheMonth

//Je créé une fonction qui génère un tableau 
// Prend 2 arguments : éléments dans lequel insérer le tableau, et une date
// debut fonction generateTable

	// J'efface le contenu de l'élément donné en argument

	// je créé mon tableau / ma balise table

	// j'attache ma balise au html

	// j'initialise mes autres variables
	var JourSemaine = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
	var mois = ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août","Septembre", "Octobre", "Novembre", "Décembre"];
	//j'initialise ma première ligne tr ainsi que mes premières cellules de type th

	// je rajoute un colspan sur ma cellule pour prendre la taille nécéssaire

	// j'attache ma/Mes première(s) cellule(s) à ma première ligne

	// Ma seconde ligne affichera les noms des jours de la semaine

	// je créé une nouvelle ligne tr

	// pour chaque jour dans mon tableau JourSemaine je créé une cellule que je rempli avec un nom de jour de semaine et je l'attache à ma ligne
	// debut for

	// fin for
	// J'attache ma ligne au tableau 
	// j'ai maintenant 2 lignes

	// J'ai besoin de connaitre quel jour tombe le premier du mois
	// je créé une variable de type date pour ce jour particulier
	
	// je créé une variable de décallage pour caller des cellules vides

	// Je créé une nouvelle ligne

	// je créé autant de cellule vide que mon décallage, que j'attache à ma ligne
	// debut for

	// fin for
	// ma ligne n'est pas complétement rempli

	// j'initialise une variable me permettant de savoir quand attacher ma ligne au tableau

	// pour une variable allant de 1 à nombre de jour du mois
	// Je créé une cellule dans laquelle je met la valeur de ma variable allant de 1 à nombre de jours
	// debut for
		// j'attache ma cellule à ma ligne

		// j'incrémente ma variable de décallage

		// si ma ma variable de décallage est égale à 7 
			// j'attache ma ligne à mon tableau
			// je créé une nouvelle ligne 
			// je réinitialise à 0 ma variable de décallage
	// fin for
	
// fin fonction generateTable
//J'appel ma fonction qui génère mon tableau