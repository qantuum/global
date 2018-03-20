	<section class="wrapper"><!-- Contient tout le site, permet d'avoir un contenu faisant 80% de la page en largeur et centré-->

		<header>

			<div class="top"><!-- Contient la partie haute du header, sub-diviser en plusieurs parties -->

				<div id="top-header"><!-- Contient la partie haute (Description, Bouton Membre, Choix de langue -->
          
          <p>Cannes, Nice, St-Tropez - Tel : +334-000-000</p>
          	<div id="div-subnav">
            <ul id="subnav">
              <li><a href="#"><img src="http://icons.veryicon.com/png/Flag/Flag%20Borderless/France.png"></a></li>
              <li><a href="#"><img src="https://vignette.wikia.nocookie.net/tomb-raider/images/e/eb/Icono_Bandera_USA.png/revision/latest?cb=20170313230324&path-prefix=es"></a></li>
              <!-- <li><a href="#"><img src="http://via.placeholder.com/40x40"></a></li> -->
              <a href="account.php"><li id="pseudo-button"> Espace Membre</li></a>
            </ul>
          	</div>
				</div>

				<div id="logo-header"><!-- Contient le logo-->
					<img src="./img/logo.svg">
				</div>

				<?php
				include("nav.php");
				?>
				
			</div>
      <!-- Sortie de la classe .top -->