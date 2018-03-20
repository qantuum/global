<?php
try{
$bdd = new PDO('mysql:host=128.79.231.174;dbname=juunan;charset=utf8', 'juunan', 'oubliepastonpass');
}
catch (Exception $e)
{
	die('Erreur : '. $e->getMessage());
}