<!DOCTYPE html>
<html>
<head>
	<title>Correction exercices</title>
	<meta charset="utf-8">
	<style type="text/css">
		table{
			width: 100%;
			border-color: black;
		}
		td, th{
			text-align: center;
			border-color: black;
		}
		th{
			color: darkblue;
		}
		fieldset{
			border-radius: 10px;
		}
		h1{
			font-size: 18px;
			color: darkblue;
		}
		hr{
			border-color: darkblue;
		}
		.otherMonth{
			color: #bbbbbb;
		}
	</style>
</head>
<body>
	<section>
		<h1>Exercice 1</h1>
		<p>Créer une fonction qui renvoie la longueur d’une chaîne de caractères passées en argument</p>
		<fieldset>
			<legend>Resultat</legend>
			<?php
			// créer une fonction permet de la rappeler indéfiniment
			// j'ai besoin d'un argument que j'appel $text 
			function longueur($text){
				//Je renvoi une chaine de caractère contenant la chaine passée en argument et sa longueur !
				return "<b>Dans la chaîne :</b> \"<i>". $text . "</i>\", <b>il y a : ". strlen($text). " caractères</b><br>";
			}
			//j'appel ma fonction et grace au return je peux directement faire un echo du resultat
			echo longueur("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae quam a quam euismod tincidunt. Cras ligula lacus, venenatis nec enim at, fermentum pulvinar tortor. Donec ac nunc et dolor lacinia tincidunt. Fusce non lacus iaculis, feugiat orci id, ullamcorper nisl. Sed faucibus auctor urna vel congue. Nulla ut egestas quam, ut imperdiet mi. Fusce tincidunt tincidunt nibh, quis iaculis dui. In nisl lorem, venenatis vel tempor ac, porta in lectus. ");
			echo longueur("Duis facilisis posuere rutrum. Nam ut pulvinar lectus, id blandit enim. In diam velit, sodales ac dui a, dictum hendrerit sem. Aliquam lectus est, blandit condimentum turpis at, auctor dictum ex. Phasellus eget mauris tempus, consectetur orci et, aliquam dolor. Nulla facilisi. Phasellus molestie pellentesque lacus, a faucibus metus dictum id. Vestibulum interdum, nulla at dapibus cursus, massa neque tristique felis, at vestibulum enim leo non nulla. Suspendisse nec leo nulla. ");
			?>
		</fieldset>
	</section>
	<hr>
	<section>
		<h1>Exercice 2</h1>
		<p>Créer une fonction qui renvoie une chaîne de caractères avec la première lettre de chaque mot en majuscule et les autres en minuscule.</p>
		<fieldset>
			<legend>Resultat</legend>
			<?php
			function maj($text){
				// strtolower : transforme une chaîne de caractères tout en minuscule
				// strtoupper : transforme une chaîne de caractères tout en majuscule
				// ucwords : met la première lettre de chaque mot de la chaine en majuscule et ignore les autres
				// ucfirst : met la première lettre de la chaine en majuscule et ignore les autres
				return ucwords(strtolower($text));
			}
			echo maj("aecenas non REMI LANNEY metus erat. Etiam fermentum sodales. ");
			?>
		</fieldset>
	</section>
	<hr>
	<section>
		<h1>Exercice 3</h1>
		<img src="cases.jpg" alt="Touché coulé">
		<p>Ci-dessus un tableau de 10 cases sur 10, vous devez créez une fonction qui prend deux arguments, le premier de type char le second de type int, ce seront les coordonnées horizontales et verticales du tableau.
		</p>
		<p>Votre fonction doit retourner trois valeurs différentes:</p>
		<p>
			[1] Si les coordonnées correspondent à une case grise, votre fonction doit afficher touché.<br>
			[2] Si les coordonnées correspondent à une case blanche, votre fonction doit afficher loupé.<br>
			[3] Si les coordonnées ne correspondent à aucune case, votre fonction doit afficher hors-jeu.
		</p>
		<p>Contrainte: Vous ne devez pas dépasser 30 lignes, avec un code correctement indenté.</p>
		<fieldset>
			<legend>Resultat</legend>
			<?php
			function toucheCoule($h, $v){
				//je créé un tableau contenant des tableaux avec les coordonnées des cases grises
				$touche = array(
							array("f", 3),
							array("f", 4),
							array("f", 5),
							array("i", 5),
							array("i", 6),
							array("c", 9),
							array("d", 9),
							array("e", 9),
							array("f", 9)
						);
				//je test si $h est un string et $v un int
				// si le typage n'est pas respécté la fonction renvoi "Hors-jeu"
				if(!is_string($h)|| !is_int($v)){
					return "Hors-jeu";
				} else {
					/* 
					Si $h n'est pas compris entre a ou j (peu importe la casse) 
					ou
					Si $v est inférieur stricte à 1
					ou
					Si $v est supérieur stricte à 10
					Alors
					les coordonnées sont hors limites donc la fonction renvoi "Hors-jeu"
					*/
					if(!preg_match("/[a-j]/i", $h) || $v < 1 || $v > 10){
						return "Hors-jeu";
					} else {
						//Sinon je créé une variable contenant les coordonnées tout en minuscule que je compare à mon tableau $touche
						$coord = array(strtolower($h), $v);
						//Si $coord est dans le tableau $touche alors renvoyer "Touché" sinon renvoyer "Loupé"
						//in_array permet de chercher si le premier argument (peu importe son type) se trouve dans le tableau passé en second
						if(in_array($coord, $touche)){
							return "Touché";
						} else {
							return "Loupé";
						}
					}
				}
			}
			//test de ma fonction
			echo " ''12 : ".toucheCoule("", 12);
			echo "<hr>";
			echo " E8 : ".toucheCoule("E", 8);
			echo "<hr>";
			echo " f3 : ".toucheCoule("F", 3);
			?>
		</fieldset>
	</section>
	<hr>
	<section>
		<h1>Exercice 4</h1>
		<p>Créer une fonction qui ajoute une valeur au début d’un tableau puis une seconde qui affiche le tableau.</p>
		<fieldset>
			<legend>Resultat</legend>
			<?php
				
				//rajoute un élément au debut du tableau passé en argument
				function addFirst($toAdd, $tab){
					array_unshift($tab, $toAdd);
					// retourne le tableau mis à jours
					return $tab;
				}

				//permet d'afficher le contenu de n'importe quel array tant qu'il ne possède qu'une seule dimension
				function displayTab($tab){
					//pour chaque élément du tableau
					foreach ($tab as $value) {
						//j'affiche sa valeur
						echo $value . "<br>";
					}
				}

				//je créé un tablea vide
				$monTab = array();
				//je rajoute des valeurs dedans
				$monTab = addFirst("tata", $monTab);
				$monTab = addFirst("toto", $monTab);
				$monTab = addFirst("titi", $monTab);
				//je l'affiche
				displayTab($monTab);
				echo "<hr>";
				//je rajoute des valeurs dedans
				$monTab = addFirst("tutu", $monTab);
				//je l'affiche
				displayTab($monTab);
				echo "<hr>";
				// displayTab == print_r()
				print_r($monTab);
				//le même mais avec une présentation plus friendly
				echo "<hr>";
				echo "<pre>";
				print_r($monTab);
				echo "</pre>";
			?>
		</fieldset>
	</section>
	<hr>
	<section>
		<h1>Exercice 5</h1>
		<p>Créer une page web en php qui affiche le calendrier du mois en cours .</p>
		<fieldset>
			<legend>Resultat</legend>
			<?php
			//je définis le mois et l'année en cours
			$moisEnCours = date("n");
			$anneeEnCours = date("Y");
			// je récupère le nom du mois 
			// mktime(heure, minute, seconte, mois, jour, année) renvoi un timestamp
			// date("format de la date" [, date particulière au format timestamp])
			
			$month = date("F", mktime (0 , 0, 0 , $moisEnCours , 1, $anneeEnCours ));
			// je récupère le premier jour du mois
			$firstDay = date("N", mktime (0 , 0, 0 , $moisEnCours , 1, $anneeEnCours ));
			// je récupère le nb de jours du mois en cours
			$nbJours = date("t", mktime (0 , 0, 0 , $moisEnCours , 1, $anneeEnCours ));
			// tablea contenant les jours de la semaine
			$semaine = array("Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim");
			//je récupère le nombre de jours dans le mois précédants 
			$lastMonth = date("t", strtotime("last month", $firstDay)) - $firstDay +1;
			?>
			<table width="80%" cellspacing="0" cellpadding="0" border="1">
				<thead>
					<tr>
						<?php
						// j'affiche le mois en cours
						?>
						<th colspan="<?php echo sizeof($semaine);?>"><?php echo $month;?></th>
					</tr>
					<tr>
						<?php
						// j'affiche les jours de la semaine
						foreach($semaine as $sem){ ?>
						<th><?php echo $sem; ?></th><?php
						}
						?>
					</tr>
				</thead>
				<tbody>
					<tr>
						<?php
						//je créé le décalage en le remplissant par les jours qui vont biens
						for($i=1;$i<$firstDay;$i++){
							echo "<td class='otherMonth'>".$lastMonth++."</td>";
						}
						// pour i allant de 1 au nombre de jours dans le mois je créé une cellule avec le numéro du jours
						for ($i=1; $i <= $nbJours; $i++) { 
							# code...
							echo "<td>".$i."</td>";
							//j'incremente $first jour pour savoir quand changer de ligne
							$firstDay++;
							//si firstDay vaux 8 je ferme ma balise tr et j'en ouvre une autre : je change de ligne
							if($firstDay == 8){
								$firstDay = 1;
								echo "</tr><tr>";
							}
						}
						// je comble mon tableau pour que chaque ligne soit pleine
						for($i=1;$i<=(8-$firstDay);$i++){
							echo "<td class='otherMonth'>".$i."</td>";
						}
						?>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<?php
						// j'affiche les jours de la semaine
						foreach($semaine as $sem){ ?>
						<th><?php echo $sem; ?></th><?php
						}
						?>
					</tr>
				</tfoot>
			</table>
		</fieldset>
	</section>

</body>
</html>