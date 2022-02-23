//déclaration du bouton lancer :
const lancer = document.getElementById('btnLancer');
//déclaration de Id dice l'image de dés :
const diceFace = document.getElementById('dice');
//déclaration des résultats des rounds :
let round1 = document.getElementById('roundPlayer1');
let round2 = document.getElementById('roundPlayer2');
let resultRound1 = 0;
let resultRound2 = 0;
//declaration du bouton collecter:
const collecter = document.getElementById('btnCollecter');
//déclation les globalPlayer1 et globalPlayer2 a 0:
let global1 = document.getElementById('globalPlayer1');
let global2 = document.getElementById('globalPlayer2');
let resultGlobal1 = 0;
let resultGlobal2 = 0;
//déclaration du bouton nouvelle partie :
const newGame = document.getElementById('btnNewGame');
//Déclaration players : 
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//déclaration de number qui est le resultat du dès lancer:
let number;

//fonction qui retourne un nombre entre 1 et 6 :
function getDiceRoll(){
    number = Math.floor(Math.random() * 6 ) + 1;
    console.log(number);
    return number;
};

//fonction qui change la src de l'image en fonction de number : 
function imgDiceRoll() {
    diceFace.src = "./images/dice" + number + ".png";
    console.log(diceFace);
};

//Evenement au click sur le bouton lancer les fonctions getDiceRoll et imgDiceRoll se lance. Retourne un nombre aléatoir et l'image correspondante :
lancer.addEventListener('click', function() {
    getDiceRoll();
    imgDiceRoll();
    stockRound1();
    // stockRound2();
});

//Récuperer number et l'afficher dans point du joueur soit roundPlayer1 ou roundPlayer2 selon le joueur active :
//JOUEUR1
function stockRound1(){
    resultRound1 = resultRound1 + number;
    round1.innerHTML = resultRound1;
    return resultRound1;
}

//JOUEUR2
function stockRound2(){
    resultRound2 = resultRound2 + number;
    round2.innerHTML = resultRound2;
    return resultRound2;
}

//Lorsqu'on click sur collecter le resultRound va dans globalPlayer1 et 2:
function stockPlayer1(){
    resultGlobal1 = resultGlobal1 + resultRound1;
    global1.innerHTML = resultGlobal1;
    resultRound1 = 0;
    round1.innerHTML = resultRound1;
    return resultGlobal1;
}

function stockPlayer2(){
    resultGlobal2 = resultGlobal2 + resultRound2;
    global2.innerHTML = resultGlobal2;
    resultRound2 = 0;
    round2.innerHTML = resultRound2;
    return resultGlobal1;
}

//ajout de l'event click sur le btnCollecter : 
collecter.addEventListener('click', function() {
    stockPlayer1();
    // stockPlayer2();
});

//si le dès fait 1 remise a zero du round et perds le activeplayer :
if (number = 1) {
    round1.textContent = 0; 
};