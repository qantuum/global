/*-------------------------------------------*\
    Déclaration des variables globales
\*-------------------------------------------*/
var dateNow = new Date(); // Date actuel
var month = dateNow.getMonth(); // Mois actuel
var day = dateNow.getDate(); // Jour (0-31) actuel
var year = dateNow.getFullYear(); /* Année actuelle -> 
utilisation du getFullYear() pultôt que getYear qui est obsolète et compte depuis 1900*/

/*-------------------------------------------*\
    Création des fonctions pour les boutons
\*-------------------------------------------*/
//Année précédente
function fctPYear(){
    year--; //Prend l'année affichée et la décrémente de 1
    calendar(); // Relance la fonction calendar() avec la nouvelle valeur
}
//Année suivante
function fctNYear(){
    year++; //Prend l'année affichée et la incrémente de 1
    calendar(); // Relance la fonction calendar() avec la nouvelle valeur
}
//Mois suivant
function fctNMonth(){
    //Conditions si le mois afficher est décembre alors on prend l'année suivante et le mois de Janvier
    if(month == 11){ //Si le mois est égale à Décembre
        year++; //Prend l'année affichée et la incrémente de 1
        month = 0; // Règle le mois à Janvier
    }else{          //Sinon on incrémente la variable du mois de 1
        month++; // Incrémente l'index du mois de 1
    }
    calendar(); // Relance la fonction calendar() avec les nouvelles valeurs
}
//Mois précédent
function fctPMonth(){
    //Même principe que pour le mois suivant mais à l'inverse
    if(month == 0){ // Si le mois est égale à Janvier
        year--; // Décrémente l'année de 1
        month = 11; // Régle le mois à Décembre
    }else{
        month--; // Décrémente le mois de 1
    }
    calendar(); // Relance la fonction
}

/*-------------------------------*\
    Fonction qui cré le tableau
    et son contenu
\*-------------------------------*/
function calendar(){
    var nextMonth = month + 1; // variable définissant le mois suivant
    var prevMonth = month - 1; // variable définissant le mois précédent
    var counter = 1; // Initialisation du compteur utilisé plus bas
    var hcontent = ""; // Déclaration de la variable contenant le "corps" du tableau, on la déclare vide

    //Ajout des bouton de controle
    var nYear = "<input type='button' value='>>' onclick='fctNYear()'>"; // Bouton Année suivante
    var pYear = "<input type='button' value='<<' onclick='fctPYear()'>"; // Bouton Année précédente
    var nMonth = "<input type='button' value='>' onclick='fctNMonth()'>";// Bouton mois suivant
    var pMonth = "<input type='button' value='<' onclick='fctPMonth()'>";// Bouton mois précédent

    //-----------------------------------------------------------------------------------

    var dayPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; // Cré un tableau avec les nombre de jours pour chaque mois de l'année
    if (month == 1){
            //alert(((year%100!=0) && (year%4==0)) || (year%400==0)); // Permet de voir le résultat booléen de la condition suivante
            if ( ((year%100!=0) && (year%4==0)) || (year%400==0)){ // Test si l'année est bisextile
              dayPerMonth[1] = dayPerMonth[1] + 1; // la valeur de l'index 1 (soit pour le mois de février) est incrémentée de 1
              //console.log(dayPerMonth[1]); // Permet d'afficher en console la valeur de dayPerMonth à l'indice 1
            }
        }
    
        
    // Récupération du premier jour du mois
    var firstDay = new Date(year,month,1); // Récupère le premier jour du mois
    var indexDay = firstDay.getDay(); // Indique le jour dela semaine commençant le mois
    var decalage = indexDay; // Cré une variable permettant de récupérer le décalage dût au premier jour
    
    // Boucle permettant de remplir les première case à la ligne 1 jusqu'au premier jour du mois 
    for (var i = 0; i < indexDay; i++) {
                hcontent+= "<td class='monthempty'>&nbsp;</td>"; //Ajoute une cellule contenant un espace insécable
             }

    // Boucle pour le retour à la ligne tous les septs jours
    for (var i = 1; i <= dayPerMonth[month]; i++) {
                decalage++;
                if (decalage == 8){

                        hcontent += "</tr><tr>";
                        decalage = 1;
                }
                
                // Insertion d'une cellule en fonction de si le jour est le jour actuel ou non
                if (i == day && month == dateNow.getMonth() && year == dateNow.getFullYear()){ // SI le jour correspond au jour actuel
                    hcontent +="<td class='dayNow'>"+i+"</td>";
                }else{
                    hcontent +="<td class='monthNow'>"+i+"</td>";    
             
                }

            }

        // Boucle pour le remplissage du vide en fin de mois
        for (var i = decalage; i < 7; i++) {
                hcontent+= "<td class='monthempty'>&nbsp;</td>"; // Ajout d'une cellule contenant un espace insécable
                }      
                  //Tableau de base

        //Création du tableau
        var div = document.getElementById("calendar"); // Récupération dans le DOM de la div

        // Création du tableau contenant le nom des mois
        var monthName = ["January","Febuary","March","April","May","June","July","August","September","October","November", "December"]; 
    
        // Création et injection du HTML avec le inner pour intégrer le tableau dans la page
        // Contient une concaténation du HTML brut et des variables à intégrer.
         div.innerHTML = 
         "<table id='caltable'>"+
         "<tr class='monthy'><th colspan='7'>"+pMonth+"<span class='headth'>"+monthName[month]+"</span>"+nMonth+" "+pYear+"<span class='headth'>"+
         year+"</span>"+nYear+"</th></tr>"+
         "<tr class='dayname'><th class='day'>Dimanche</th><th class='day'>Lundi</th><th class='day'>Mardi</th><th class='day'>Mercredi</th>"+
         "<th class='day'>Jeudi</th><th class='day'>Vendredi</th><th class='day'>Samedi</th></tr>"+
         "<tr>"+hcontent+"</tr>"+
         "</table>";
            
         }

    
