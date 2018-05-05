<?php
	function dessineTriangle($nbLignes){
		for($i=0;$i<$nbLignes;$i++){
			for($j=0;$j<=$i;$j++){
				echo "*";
			}
			echo "<br />";
		}
	}

	for($i=2; $i<=10; $i+=2){
		dessineTriangle($i);
	}