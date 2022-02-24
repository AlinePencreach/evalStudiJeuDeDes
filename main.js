//Déclaration de let :
let activePlayer;
let numberDice;
let resultGlobal1;
let resultGlobal2;
let resultRound1 = 0;
let resultRound2 = 0;
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

//REFONTE PAS À PAS :

//CREATION DE LA FONCTION QUI RETOURNE UN NOMBRE ALEATOIRE ENTRE 1 ET 6 :
function randomNumberDice(){
    numberDice = Math.floor(Math.random() * 6 ) + 1;
    console.log(numberDice);
    diceFace.src = "./images/dice" + numberDice + ".png";
    console.log(diceFace);
    return numberDice;
}

//FONCTION QUI PERMET DE SWITCHER DE JOUEUR:
function switchPlayer(){
    if (activePlayer === 'player1') {
        activePlayer = 'player2';
        console.log(activePlayer);
    } else {
        activePlayer = 'player1';
        console.log(activePlayer);
    }
};

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

//FONCTION QUI STOCK LES POINTS :
// function roundPlayer1(){
//     resultRound1 = resultRound1 + numberDice;
//     round1.innerHTML = resultRound1;
//     console.log(resultRound1);
//     return resultRound1;
// };

// function roundPlayer2(){
//     resultRound2 = resultRound2 + numberDice;
//     round1.innerHTML = resultRound2;
//     console.log(resultRound2);
//     return resultRound2;
// };

function roundTourPlayer(){
    if (activePlayer === 'player1') {
        resultRound1 = resultRound1 + numberDice;
        round1.innerHTML = resultRound1;
        console.log(resultRound1);
        return resultRound1;
    } else if (activePlayer === 'player2'){
        resultRound2 = resultRound2 + numberDice;
        round1.innerHTML = resultRound2;
        console.log(resultRound2);
        return resultRound2;
    }
}


function looseDiceOne(){
    if (numberDice === 1) {
        if (activePlayer === 'player1') {
            activePlayer = 'player2';
            console.log(activePlayer);
            return resultRound1 = 0;
        } else {
            activePlayer = 'player1';
            console.log(activePlayer);
            return resultRound2 = 0;
        }
    }
}

//APPEL DES LISTENER :
newGame.addEventListener('click', function(){
    startGame();
    activePlayerStyle();
});
lancer.addEventListener('click', function(){
    randomNumberDice();
    roundTourPlayer();
    looseDiceOne()
    activePlayerStyle();
})
collecter.addEventListener('click', function(){
    switchPlayer();
    activePlayerStyle();
});