 <?php
// include 'db.php';
 session_start();
include 'db2.php';
$password = $_POST['inputPassword']; /* Récupère le mot de passe actuel */
$newpassword = $_POST['inputNewPassword']; /* Récupère le nouveau mot de passe */
$newpassword2 = $_POST['inputNewPassword2']; /* Récupère la confirmation du nouveau mot de passe */
if (isset($password) AND isset($newpassword) AND isset($newpassword2)){ /* Verification de l'existence de la variable */

	if (!empty($password) AND !empty($newpassword) AND !empty($newpassword2)) { /* Est-ce que la variable n'est pas vide */
		
	 	$email = htmlspecialchars($_SESSION['user']); /* Récupère l'index de session USER */
		$password_nh = htmlspecialchars($_POST['inputPassword']); /* Récupère le password non haché [optionnel, à virer] */
		$pass_hache = sha1($_POST['inputPassword']); /* récupère le password et le hache avec l'encryptage sha1 */

		$user = $bdd->prepare('SELECT * FROM account WHERE email = :mail AND pass = :pass;'); /* prépare la querry de recherche de compte */
		$user->execute(array( /* Execute la querry de recherche de compte */
			'mail' => $email,
			'pass' => $pass_hache));
		$connection = $user->rowCount(); /* Compte le nombre de ligne de résultat */
		
		if ($connection == 1) { /* Si il y à un seul résultat */

			if ($_POST['inputNewPassword'] == $_POST['inputNewPassword2']) { /* Si le nouveau mot de passe et sa confirmation concorde */

				$new_pass_hache = sha1($_POST['inputNewPassword']); /* Récupère le nouveau mot de passe encrypté en sha1 */
				$update_pass = $bdd->prepare('UPDATE account SET pass = :newpass WHERE email = :email AND pass = :pass;'); /* Prépare la requête de modification de mot de passe */
				$update_pass->execute(array( /* execute la requête préparée */
				'newpass' => $new_pass_hache, /*telle valeur attribue telle variable ||| BIEN RESPECTER L'ORDRE D'AU-DESSUS! */
				'email' => $email,
				'pass' => $pass_hache));
				header('Location:../account.php');/* Renvoie vers la page Account */

			}
			else{
				$message="Erreur : Mauvaise validation du nouveau mot de passe <br /><a href='../account.php'>Retour</a>"; /* Si le nouveau mot de passe et sa confirmation ne concorde pas */
			}
		}	

		else{
		$message="Erreur : Mot de passe incorrect <br /><a href='../account.php'>Retour</a>"; /* Si le mot de passe actuel ne concorde pas */
		}
	}
	else{
		$message="Erreur : !EMPTY, variable est vide <br /><a href='../account.php'>Retour</a>"; /*Si l'une des variable est vide*/
	}
}
else{
  $message="Erreur : ISSET, variable n'existe pas <br /><a href='../account.php'>Retour</a>"; /* Si l'une des variable n'existe pas */
}

if (isset($message)) { /*Si la variable message existe*/
  echo $message; /* Affiche le message d'erreur correspondant */
}

?>