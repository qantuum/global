<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Rémi LANNEY">

    <title>Table de multiplication </title>

</head>

<body>

    <table border="1" cellpadding="2" cellspacing="1">
    	<?php
    	$mult = 12;
    	echo "<tr>\n";
    	for($i=-1;$i<=12;$i++){
    		echo "<th>";
    		if($i==-1){
    			echo "&nbsp;";
    		} else {
    			echo $i;
    		}
    		echo "</th>";
    	}
    	echo "</tr>\n";
    	for($i=0; $i<=$mult; $i++){
    		echo "<tr>\n";
    		echo "<th>".$i."</th>";
    		for($j=0; $j<=$mult; $j++){
    			echo "<td>".$i*$j."</td>\n";
    		}
    		echo "</tr>\n";
    	}
    	?>
    </table>

</body>

</html>

