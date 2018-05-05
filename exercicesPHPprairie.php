<?php

/*for ($i = 1; $i<=15000; $i+=2) {
	echo $i.'<br />'; //affiche tous les impairs de 1 à 14999 (marche grâce au $i+=2);
}
/*Exercice 1*/



/*for ($i = 0; $i<100; $i++) {
	echo 'Je dois faire des sauvegardes régulières de mes fichiers.'.'<br />'; //logiciel pour copier des lignes lol;
}
/*Exercice 2*/



/*for ($i = 0; $i<=13; $i++) {
	$mult=13*$i;
	echo '13x '.$i.' = '.$mult.'<br />'; //retourne juste une ligne de type 13 x 0 = 0;
}
/*Exercice 3*/



/*for ($i = 0; $i<4; $i++) {
	for ($j = 1; $j<=13; $j++) { //concaténer les $j différents en boucle;
		echo $j;
	}
	echo '<br />'; //ajouter un retour à la ligne après la suite de nombres;
}
/*Exercice 4*/



$nb1=array(0,1,2,3,4,5,6,7,8,9,10,11,12);

for ($i=0; $i<=12; $i++) {
	echo'<pre>';
	print_r($nb1);
	echo '</pre>';
}
/*Exercice 5 - incomplet !*/

/*function tri($line) {
	for ($i=1; $i<=$line; $i++) { //$line est paramètre de la fonction, le for tourne tant que $i n'atteint pas $line;
		echo str_repeat("#", $i).'<br />'; //méthode str_repeat répète un string un certain nombre de fois...;
	}
}
tri(2); //appel de fonction;
tri(3);
tri(4);
tri(5);
/*Exercice 6*/
