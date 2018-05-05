// Déclaration des variables utiles pour les fonctions listée ci-dessous
var fbt = document.getElementById("facebookTimeLine");
var tt = document.getElementById("twitterTimeLine");
var hide = document.getElementById("hide");
var content = document.getElementById("contenu");
var actu = document.getElementById('actu');
var display = document.getElementById('display');
// Permet d'éviter que la fonction hide affiche directement son else
fbt.style.display = "block";
// Affiche la TimeLine de Facebook par un addEventListener au click.
document.getElementById("fb").addEventListener("click", function(){
fbt.style.display = "block";
tt.style.display = "none";
content.style.display = "block";
hide.style.display = "block";
actu.style.backgroundColor = "#3c5a99";
actu.style.transition = "1000ms";
});
// Affiche la TimeLine de Twitter  par un addEventListener au click.
document.getElementById("twitter").addEventListener("click", function(){
fbt.style.display = "none";
tt.style.display = "block";
content.style.display = "block";
hide.style.display = "block";
actu.style.backgroundColor ="#00c4ff";
actu.style.transition = "1000ms";
});
// Fonction pour masquer les TimeLines de Facebook et de Twitter
// + affichage du "bouton" permettant de réaficher le fil d'actualité en cours d'exécution
// avec affichage du label dynamiquement grâce au innerHTML
hide.addEventListener("click", function(){
  if (fbt.style.display == "block"){
    display.style.backgroundColor = "#3c5a99";
    display.innerHTML = "<label>Afficher le fil d'actualité Facebook</label>";
  }
  else {
    display.style.backgroundColor = "#00c4ff";
    display.innerHTML = "<label>&nbsp; &nbsp; Afficher le fil d'actualité Twitter </label>";
  }
hide.style.display = "none";
display.style.display ="block";
actu.style.marginLeft ="-500px";
actu.style.transition = "600ms";
});
// Réaffiche la timeline qui était affichée auparavant
// modifie les couleurs de fonds en fonction de la timeline en cours
display.addEventListener("click", function(){
  if (fbt.style.display == "block"){
  actu.style.backgroundColor = "#3c5a99";
  actu.style.transition = "1000ms";
} else {
  actu.style.backgroundColor = "#00c4ff";
  actu.style.transition = "1000ms";
}
  actu.style.marginLeft = "0px";
  hide.style.display = "block";
  display.style.display ="none";
  content.style.display ="block";
});
