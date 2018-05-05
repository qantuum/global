<?php
try{
$bdd = new PDO('mysql:host=localhost;dbname=rivieras;charset=utf8', 'root', 'Root_root06');
}
catch (Exception $e)
{
	die('Erreur : '. $e->getMessage());
}
