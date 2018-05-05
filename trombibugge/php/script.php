<?php

	$host_name = 'db734916633.db.1and1.com';
	$database = 'db734916633';
	$user_name = 'dbo734916633';
	$password = 'Simplon_Cannes06';

	$connect = mysql_connect($host_name, $user_name, $password, $database);
	if (mysql_errno()) {
	    die('<p>La connexion au serveur MySQL a échoué: '.mysql_error().'</p>');
	} else {
	    echo '<p>Connexion au serveur MySQL établie avec succès.</p >';
	}

?>