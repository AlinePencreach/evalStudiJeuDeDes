//Déclaration de let :
let activePlayer;
let numberDice;
let resultGlobal1;
let resultGlobal2;
let resultRound1;
let resultRound2;

//declatration de selector:
let round1 = document.getElementById('roundPlayer1');
let round2 = document.getElementById('roundPlayer2');
let global1 = document.getElementById('globalPlayer1');
let global2 = document.getElementById('globalPlayer2');
const newGame = document.getElementById('btnNewGame');
const diceFace = document.getElementById('dice');
const lancer = document.getElementById('btnLancer');
const collecter = document.getElementById('btnCollecter');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');







// //fonction qui retourne un nombre entre 1 et 6 :
// function getDiceRoll(){
//     number = Math.floor(Math.random() * 6 ) + 1;
//     console.log(number);
//     return number;
// };


// //fonction qui change la src de l'image en fonction de number : 
// function imgDiceRoll() {
//     diceFace.src = "./images/dice" + number + ".png";
//     console.log(diceFace);
// };

// //Evenement au click sur le bouton lancer les fonctions getDiceRoll et imgDiceRoll se lance. Retourne un nombre aléatoir et l'image correspondante :
// lancer.addEventListener('click', function() {
//     getDiceRoll();
//     imgDiceRoll();
//     stockRound1();
//     // stockRound2();
// });


// //Récuperer number et l'afficher dans point du joueur soit roundPlayer1 ou roundPlayer2 selon le joueur active :
// //JOUEUR1
// function stockRound1(){
//     resultRound1 = resultRound1 + number;
//     round1.innerHTML = resultRound1;
//     return resultRound1;
// }

// //JOUEUR2
// function stockRound2(){
//     resultRound2 = resultRound2 + number;
//     round2.innerHTML = resultRound2;
//     return resultRound2;
// }


// //Lorsqu'on click sur collecter le resultRound va dans globalPlayer1 et 2:
// function stockPlayer1(){
//     resultGlobal1 = resultGlobal1 + resultRound1;
//     global1.innerHTML = resultGlobal1;
//     resultRound1 = 0;
//     round1.innerHTML = resultRound1;
//     return resultGlobal1;
// }

// function stockPlayer2(){
//     resultGlobal2 = resultGlobal2 + resultRound2;
//     global2.innerHTML = resultGlobal2;
//     resultRound2 = 0;
//     round2.innerHTML = resultRound2;
//     return resultGlobal1;
// }

// //ajout de l'event click sur le btnCollecter : 
// collecter.addEventListener('click', function() {
//     stockPlayer1();
//     stockPlayer2();
// });


// //Foction que change le jouer
// function switchPlayer() {
//     if (activePlayer === 'player 1') {
//       activePlayer = 'player 2';
//     } else {
//       activePlayer = 'player 1';
//     }
// }

//REFONTE PAS À PAS :
//CREATION DE LA FONCTION QUI RETOURNE UN NOMBRE ALEATOIRE ENTRE 1 ET 6 :
function randomNumberDice(){
    numberDice = Math.floor(Math.random() * 6 ) + 1;
    console.log(numberDice);
    diceFace.src = "./images/dice" + numberDice + ".png";
    return numberDice;
}

//RETOURNER LE NUMBERDICE DANS LA CASE ROUND:
//JOUEUR1
function stockRound1(){
    resultRound1 = resultRound1 + numberDice;
    round1 = resultRound1;
    return resultRound1;
}

//JOUEUR2
function stockRound(){
    if (activePlayer === 'player1') {
        resultRound2 = resultRound2 + numberDice;
        round2 = resultRound2;
        return resultRound2;
    } else {
        resultRound2 = resultRound2 + numberDice;
        round2 = resultRound2;
        return resultRound2;
    }   
};

//FONCTION QUI PERMET DE SWITCHER DE JOUEUR:
function switchPlayer(){
    if (activePlayer === 'player1') {
        activePlayer = 'player2';
    } else {
        activePlayer = 'player1';
    }
    console.log(activePlayer);
}


//ACTIVER UN JOUEUR LORSQU'ON CLICK SUR LE BOUTON NOUVELLE PARTIE ET REMETTRE LA PARTIE A ZERO :
function startGame(){
    activePlayer = 'player1';
    global1.textContent = 0;
    round1.textContent = 0;
    global2.textContent = 0;
    round2.textContent = 0;
    console.log('Vous venez de cliquer sur le bouton nouvelle partie');
    console.log(activePlayer);
}


//FONCTION QUI PERMET DE METTRE LE POINT ROUGE SUR LE JOUEUR ACTIF:
function activePlayerStyle(){
    if (activePlayer === 'player1') {
    cercle1.style.width = '20px';
    cercle1.style.height = '20px';
    cercle1.style.borderRadius = '20px';
    cercle1.style.background = '#E04E46';
    cercle1.style.marginLeft = '1rem';
    cercle1.style.marginTop = '.5rem';
        cercle2.style.width = '';
        cercle2.style.height = '';
        cercle2.style.borderRadius = '';
        cercle2.style.background = '';
        cercle2.style.marginLeft = '';
        cercle2.style.marginTop = '';
    } else if (activePlayer === 'player2') {
        cercle2.style.width = '20px';
        cercle2.style.height = '20px';
        cercle2.style.borderRadius = '20px';
        cercle2.style.background = '#E04E46';
        cercle2.style.marginLeft = '1rem';
        cercle2.style.marginTop = '.5rem';
            cercle1.style.width = '';
            cercle1.style.height = '';
            cercle1.style.borderRadius = '';
            cercle1.style.background = '';
            cercle1.style.marginLeft = '';
            cercle1.style.marginTop = '';
    } 
} 




    


newGame.addEventListener('click', function(){
    startGame();
    activePlayerStyle();
});

lancer.addEventListener('click', function(){
    randomNumberDice();
    stockRound();
})

collecter.addEventListener('click', function(){
    switchPlayer();
    activePlayerStyle();
});