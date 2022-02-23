//déclaration des variable du bouton lancer et number :
const lancer = document.getElementById('btnLancer');
const diceFace = document.getElementById('dice');

let number;

//fonction qui retourne un nombre entre 1 et 6 :
function getDiceRoll(){
    number = Math.floor(Math.random() * 6 ) + 1;
    console.log(number);
    return number;
}

//fonction qui change la src de l'image en fonction de number : 
function imgDiceRoll() {
    diceFace.src = "./images/dice" + number + ".png";
    console.log(diceFace);
}

//Evenement au click sur le bouton lancer les fonction getDiceRoll et imgDiceRoll se lance. Retourne un nombre aléatoir et l'image correspondante :
lancer.addEventListener('click', function() {
    getDiceRoll();
    imgDiceRoll();
});

//commit pour voir si je suis bien dans la branch github et non local de javascript 



