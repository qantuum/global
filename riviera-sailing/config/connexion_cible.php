<?php
session_start();
// include('db.php');
include('db2.php');
if (isset($_POST['inputEmail']) AND isset($_POST['inputPassword']) AND !empty($_POST['inputEmail']) AND !empty($_POST['inputPassword'])) { /* Variable check => Exist ?, is NotEmpty() ? */
	$email = htmlspecialchars($_POST['inputEmail']); /* Attributing value to variable email from global $_POST[''] and secure with htmlspecialchars() to block SQL injections */
	$password_nh = htmlspecialchars($_POST['inputPassword']); /* Attributing value to variable password_nh from global $_POST[''] and secure with htmlspecialchars() to block SQL injections [optional should be deleted*/
	$pass_hache = sha1($_POST['inputPassword']); /* Attributing value to variable pass_hache from global $_POST[''] and encrypt it with sha1 algorithm */
	if (filter_var($email, FILTER_VALIDATE_EMAIL))
	 { /* check if the email has the good pattern - use filter_var is easier than use preg_match [appear on PHP 5]*/
		$user = $bdd->prepare('SELECT * FROM account WHERE email = :mail AND pass = :pass;');/* Querry prepare to check if the email and password match on database */
		$user->execute(array( /* Execute querry using array's index */
			'mail' => $email,
			'pass' => $pass_hache));
		$connection = $user->rowCount();/* Make a COUNT() of results */
		if ($connection == 1) { /* If result count is equal to 1 */
			$session = $user->fetch(); /* Return an array by column field name and where the index start at 0 */
			$_SESSION['id'] = $session['id'];  /* Attributing the value from the fetch array form the index id to the global $_SESSION */
			$_SESSION['user'] = $session['email']; /* Attributing the value from the fetch array form the index email to the global $_SESSION */
			header('Location:../account.php');/* Redirect to account page */
		}
		else{
			header('Location:../account.php');/* Redirect to account page */
		}
	}
	else {
		header('Location:../account.php');/* Redirect to account page */
	}
}
else{
	header('Location:../account.php');/* Redirect to account page */
}
?>