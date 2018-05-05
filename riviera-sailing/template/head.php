<?php
session_start();
include('./config/db2.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Riviera Sailing</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <!-- déclaration du type de contenu et encodage-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- prévision du responsive -->
  	<link href="https://fonts.googleapis.com/css?family=Mirza|Bellefair" rel="stylesheet"><!--Ajout de police externe via google fonts-->
	<link rel="stylesheet" type="text/css" href="./css/style.css"> <!-- Lien vers la feuille de style -->
	<link rel="stylesheet" type="text/css" href="./css/contacts.css"> <!-- Lien vers la feuille de style spécifique à la page contact-->
	<link rel="stylesheet" type="text/css" href="./css/account.css">
	<link rel="stylesheet" type="text/css" href="./css/bateaux.css">	

<!--LINKS LEAFLETS! LES LAISSER ENSEMBLE, CSS D'ABORD ET SCRIPT ENSUITE-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>

</head>
<body>
    <video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
	<source src="./bgvid/Perfect_Hour.mp4" type="video/mp4">
	<source src="./bgvid/Perfect_Hour.webm" type="video/webm">
	<source src="./bgvid/Perfect_Hour.ogv" type="video/ogg">
	<img src="./bgvid/Perfect_Hour.jpg" width="100%" height="100%" > </video>  