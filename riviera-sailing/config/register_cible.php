<?php
// include ('db.php');
include ('db2.php');
if (isset($_POST['inputEmail']) AND isset($_POST['inputPassword']) AND isset($_POST['inputPassword2']) AND !empty($_POST['inputEmail']) AND !empty($_POST['inputPassword']) 
AND !empty($_POST['inputPassword2'])) { /* Variable check => Exist ?, is NotEmpty() ? */

  if ($_POST['inputPassword'] == $_POST['inputPassword2']){ /* Variable check => inputPassword stricly equal to inputPassword2 ? */
      $mail = htmlspecialchars($_POST['inputEmail']); /* Attributing value to variable email from global $_POST[''] and secure with htmlspecialchars() to block SQL injections */
      $checkmail = $bdd->prepare("SELECT * FROM account WHERE email = $mail"); /* Query prepare to check if the email was already used or not */
      $checkmail->execute(array()); /* Execute the query */
      $checkmailResult = $checkmail->rowCount(); /* Make a COUNT() for results */
      if ($checkmailResult == 0){ /* If result count is equal to 0 */
        $pass_hache = sha1($_POST['inputPassword']); /* Attributing value to variable pass_hache from global $_POST[''] and encrypt it with sha1 algorithm */
        $insertuser = $bdd->prepare('INSERT INTO account (email,pass,`date`) VALUES (?,?,NOW())');/* Querry prepare to insert a new user in the database */
        $insertuser->execute(array($mail,$pass_hache)); /* Executing the querry */
        header('Location:../index.php'); /* Redirect to account page */
      }
      else{ 
        $message="L'Email est déjà utilisée <br /><a href='../account.php'>Retour</a>"; /* If the email was already in database, set the value of variable message at */
        echo $checkmailResult;
      }
    }
   
  else{
    $message="Les mot de passe ne correspondent pas <br /><a href='../account.php'>Retour</a>";/* If passwords doesn't match, set the value of variable message at */
  }

}
else{
  $message="Erreur de formulaire <br /><a href='../account.php'>Retour</a>"; /* If gloals dosen't exist or are empty, set the value of variable message at */
}
if (isset($message) AND !empty($message)) { /* If the variable message exist and it not empty */
  echo $message;/* Print the error message which has set before */
}

?>