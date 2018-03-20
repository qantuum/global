<?php
session_start();
?>
<!DOCTYPE HTML>
<html>
<head>
	<title>Modifiez votre mot de passe</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="css/modif_mdp.css" />
</head>
<body>
	<section id="pass_change">
		<form id="new_pd" action="./config/pass_change.php">
			<div>
				<h3>Entrez votre ancien mot de passe</h3>
				<input type="password" name="inputPassword">
			</div>
			<div>
				<h3>Entrez votre nouveau mot de passe</h3>
				<input type="password" name="inputNewPassword">
			</div>
			<div>
				<h3>Confirmez votre nouveau mot de passe</h3>
				<input type="password" name="inputNewPassword2">
			</div>
			<input type="submit" name="Valider">	
		</form>
	</section>
</body>
</html>
