	<div class="simple-page">
	<section id="contact-page">
		<section id="contactform">
			<form method="POST" action="#">
				<fieldset id="top-fieldset">

					<label for="inputEmail">Email :</label>
					<input type="email" id="inputEmail" name="inputEmail" placeholder="Entrez votre Email"></input>

					<label for="inputName">Nom :</label>
					<input type="text" name="inputName" placeholder="Entrez votre Nom"></input>

					<label for="requesttype">Sélectionnez le motif de votre demande :</label>
					<select id="requesttype" name="requesttype">
						<option value="intels">Renseignement.s</option>
						<option value="rental">Location.s</option>
						<option value="shipment">Info. Commande.s</option>
						<option value="complain">Réclamation.s</option>
						<option value="other">Autre</option>
					</select>
					
				</fieldset>
				<fieldset id="bottom-fieldset">

					<label for="inputSubject">Objet :</label>
					<input type="text" name="inputSubject" placeholder="Où en est ma commande"></input>

					<label for="inputMessage">Message :</label>
					<textarea id="inputMessage" name="inputMessage" rows="10" cols="30">
					Goat is life !
					</textarea>

				</fieldset>

				<input id="submitBtn" type="submit" value="Envoyer">

			</form>
		</section>
		<aside id="contactother">
			<h6><img src="http://via.placeholder.com/20x20"> Autres contacts :</h6>
			<article id="contactdetails">

				<p>
					<span class="titlecontacts">Adresse Postale :</span>
					<br>
					RIVIERA SAILING<br>
					666, goat street<br>
					06140 CANNES LA BOCCA
				</p>
				<p>
					<span class="titlecontacts">Téléphone / Fax :</span>
					<br>
					Tel : +334-000-000<br>
					Fax : +334-000-000
				</p>

			</article>
			
		</aside>

	</section>

	<div id="mapid"></div>
	<script src="./js/leafletadd.js" type="text/javascript">
	</script>