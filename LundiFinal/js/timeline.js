//Nécessite l'utilisation de jQuery => <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> en fin de HTML avant la fermeture du body avant les autres scripts
$(document).ready(function () {
  //Fonction qui récupère le nombre de semaine dans le mois actuel
  function mondayInMonth() {
    var d = new Date($year, $month, 1); //On initialise une nouvelle date au 1er jour du mois
    d.getDay(); //On récupère le jour
    mondays = [];

    // Récupère le premier lundi du mois
    while (d.getDay() !== 1) {
      d.setDate(d.getDate() + 1);
    }

    // Récupère tout les autres lundi
    while (d.getMonth() === $month) {
      mondays.push(d.getDate());
      d.setDate(d.getDate() + 7);
    }

    return mondays;
  }

  function weekInMonth() //Renvoi le nombre de lundi dans le mois, et par extension, le nombre de semaine dans le mois
  {
    return mondayInMonth().length;
  }

  function getMonthName(id) //Renvoi une string avec le mois courant
  {
    mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return mois[id];
  }

  function showWeeks() //Fonction qui affiche 4 ou 5 points en fonction de la longueur du mois
  {
    if (weekInMonth() == 5) //Si il y a 5 semaines
    {
      $('.act_week').last().show(); //Mettre ici la classe qui correspond aux semaines afficher
    } else //Sinon il n'y en a que 4
    {
      $('.act_week').last().hide();
      $('#weeks').css('border-bottom', '1px solid black');
    }
  }


  var $prev = $('#prev'); //Id du bouton précédent
  var $next = $('#next'); //Id du bouton suivant
  var $printMonth = $('#affichageMois'); //Affichage du nom du mois


  var $month = new Date(); //Récupère la date actuel
  var $year = $month.getFullYear(); //Isole l'année
  $month = $month.getMonth(); //Isole le mois

  showWeeks();
  $printMonth.html(getMonthName($month) + " " + $year);
  //Évenements

  //Pour décrémenter le mois quand on clique sur le bouton
  $prev.on('click', function (e) {
    e.preventDefault(); //On empêche l'action par défaut du bouton
    $month -= 1;
    if ($month == -1) //On vérifie si on retourne a l'année précédente
    {
      $month = 11;
      $year = $year - 1;
    }
    $printMonth.html(getMonthName($month) + " " + $year);
    showWeeks();
  });


  //Pour incrémenter le mois quand on clique sur le bouton
  $next.on('click', function (e) {
    e.preventDefault(); //On empêche l'action par défaut du bouton
    $month += 1;
    //On vérifie si on passe à l'année suivante en incrémentant le mois
    if ($month == 12) {
      $month = 0;
      $year += 1;
    }
    //Affiche le nom du mois et son année
    $printMonth.html(getMonthName($month) + " " + $year);
    showWeeks();
  });

  //Affichage hover des points
  $('.point').on('mouseover', function () {
    $(this).children().show();
  }).on('mouseout', function () {
    $(this).children().hide();
  });

  //Reste a modifier l'affichage du flex
}); //Fin du $( document ).ready();
