<?php


echo ("navires en approche, capitaine ! <hr/>");

Tir('F',4);//tir sur une case avec un bateau
Tir('A',1);//tir sur une case vide
Tir('X',5);//tir pas dans le tableau


function Tir($lettre, $chiffre){
    $grille = array(//je définis un tableau à 2 dimensions
        "A"=>array(0,0,0,0,0,0,0,0,0,0),//la première associée à des clés lettres
        "B"=>array(0,0,0,0,0,0,0,0,0,0),//la deuxième sur index simple
        "C"=>array(0,0,0,0,0,0,0,0,1,0),//1:bateau, 0:pas de bateau
        "D"=>array(0,0,0,0,0,0,0,0,1,0),
        "E"=>array(0,0,0,0,0,0,0,0,1,0),
        "F"=>array(0,0,1,1,1,0,0,0,1,0),
        "G"=>array(0,0,0,0,0,0,0,0,0,0),
        "H"=>array(0,0,0,0,0,0,0,0,0,0),
        "I"=>array(0,0,0,0,1,1,0,0,0,0),
        "J"=>array(0,0,0,0,0,0,0,0,0,0),
    );
    //je teste s'il y a un bateau
    if ($grille[$lettre][($chiffre-1)] == 1) {
        echo "tir sur la position $lettre / $chiffre : touché ! <br/><br/>";           
    }
    //sinon je teste si je suis quand même dans le tableau
    else if ($grille[$lettre][($chiffre-1)] === 0) {
        echo "tir sur la position $lettre / $chiffre : loupé ! <br/><br/>";
    }
    //sinon je me fâche
    else echo "hors-jeu, vilain tricheur ! <br/><br/>";  
}