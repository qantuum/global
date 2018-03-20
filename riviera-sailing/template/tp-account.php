</header>
	<div class="simple-page">
<?php if (isset($_SESSION['id'])) { ?>
	<section id="user-board">
			<div class="board-title">
				<h4>Connecté en tant que : <?php echo $_SESSION['user']; ?></h4>
			<div class="user-header">
				<ul>
					<li><a href="#" id="pseudo-button">Tableau de bord</a></li>
					<li><a href="#" id="pseudo-button">Mon profil</a></li>
					<li><a href="#" id="pseudo-button">Mes Messages</a></li>
					<li><a href="#" id="pseudo-button">Mes annonces</a></li>
					<li><a href="#" id="pseudo-button">Mes réservations</a></li>
					<li><a href="#" id="pseudo-button">Mes favoris</a></li>
					<li><a href="disconnect.php" id="pseudo-button">Déconnecter la session</a></li>
				</ul>
			</div>
		</section>

		<section class="board-mid">

			<div id="pass_change">
				<h3>Changez votre mot de passe</h3>
				<form id="new_pd" method="POST" action="./config/pass_change.php">
						
						<label for="inputPassword">Mot de passe actuel :</label><br>
						<input type="password" name="inputPassword"></input><br><br>
						
						<label for="inputnewPassword">Nouveau mot de passe :</label><br>
						<input type="password" name="inputNewPassword"></input><br><br>
						
						<label for="inputnewPassword2">Confirmez le nouveau mot de passe :</label><br>
						<input type="password" name="inputNewPassword2"></input><br><br>
				
					<input type="submit" name="Valider" value="Valider">	
				</form>
			</div>

			<div id="upload_avat">
				<h3>Chargez une image de profil</h3>
				<form id="new_avat" method="POST" action="#" enctype="multipart/form-data">

					<label fpr="inputImage">Votre fichier :</label><br>
					<input type="file" name="inputImage"><br><br>

					<input type="submit" name="Envoyer" value="Envoyer">
				</form>
			</div>

			<div id="go_ads">
				<h3>Gestion de vos annonces</h3>
				<a href="#"><div id="go_ads_frame">
					<p>MES ANNONCES
					</p>
				</div></a>
			</div>
		</section>
<?php
}
else
{
?>
	<section id="user-form">
			<div>
				<form method="POST" action="./config/register_cible.php">
					<fieldset id="top-fieldset1">
						<h3 class="creation">Créez votre compte Riviera-Sailing</h3>
						<label for="inputEmail">Email :</label>
						<input type="email" id="inputEmail" name="inputEmail" placeholder="Utilisateur"></input>

						<label for="password">Mot de passe :</label>
						<input type="password" id="inputPassword" name="inputPassword" placeholder="Mot de passe"></input>
					
						<label for="password">Retapez le mot de passe :</label>
						<input type="password" id="inputPassword2" name="inputPassword2" placeholder="Mot de passe (vérifié)"></input>

						<input id="submitBtn" type="submit" value="Valider">

					</fieldset>

				</form>
			</div>
			<div class="ou">
				<p>Ou</p>
			</div>
			<div>
				<form method="POST" action="./config/connexion_cible.php" id="connect">
					<fieldset id="top-fieldset2">
						<h3 class="creation">Connectez-Vous</h3>
						<label for="inputEmail">Email :</label>
						<input type="email" id="inputEmail" name="inputEmail" placeholder="Utilisateur"></input>

						<label for="password">Mot de passe :</label>
						<input type="password" id="inputPassword" name="inputPassword" placeholder="Mot de passe"></input>

						<input id="submitBtn" type="submit" value="Valider">

					</fieldset>
				</form>
			</div>

		</section>
<?php
}
?>
</div>