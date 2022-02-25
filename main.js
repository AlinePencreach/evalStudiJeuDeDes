//Déclaration de let :
let activePlayer;
let numberDice;
let resultGlobal1 = 0;
let resultGlobal2 = 0;
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
    console.log(`le dès a fait : ${numberDice}`);
    diceFace.src = "./images/dice" + numberDice + ".png";
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
function roundTourPlayer(){
    if (activePlayer === 'player1') {
        resultRound1 = resultRound1 + numberDice;
        round1.innerHTML = resultRound1;
        console.log(`le total du round 1 est : ${resultRound1}`);
        return resultRound1;
    } else if (activePlayer === 'player2'){
        resultRound2 = resultRound2 + numberDice;
        round2.innerHTML = resultRound2;
        console.log(`le total du round 2 est : ${resultRound2}`);
        return resultRound2;
    }
};

//FONCTION QUI SAUVEGARDE LES POINTS DANS SCORE GLOBAL :
function globalPlayer() {
    if (activePlayer === 'player1') {
        resultGlobal1 = resultRound1 + resultGlobal1;
        global1.innerHTML = resultGlobal1;
        resultRound1 = 0;
        round1.textContent = 0;
        console.log(`le total du joueur 1 est : ${resultGlobal1}`);
    } else if (activePlayer === 'player2') {
        resultGlobal2 = resultRound2 + resultGlobal2;
        global2.innerHTML = resultGlobal2;
        resultRound2 = 0;
        round2.textContent = 0;
        console.log(`le total du joueur 2 est : ${resultGlobal2}`);
    }
};

//FONCTION QUI ANNONCE LE GAGNANT:
function winner() {
    if (resultGlobal1 >= 100) {
        alert ('Le joueur 1 remporte la partie. BRAVO !!! Pour recommencer cliquez sur nouvelle partie')
    } else if (resultGlobal2 >= 100) {
        alert ('Le joueur 1 remporte la partie. BRAVO !!! Pour recommencer cliquez sur nouvelle partie')
    }
}

//SI LE DES FAIT 1 LES POINTS TOMBENT A ZERO ET ON CHANGE DE JOUEUR :
function looseDiceOne(){
    if (numberDice === 1) {
        if (activePlayer === 'player1') {
            activePlayer = 'player2';
            console.log(activePlayer);
            resultRound1 = 0;
            round1.innerHTML = resultRound1;
            resultRound2 = 0;
            round2.innerHTML = resultRound2;
        } else {
            activePlayer = 'player1';
            console.log(activePlayer);
            resultRound2 = 0;
            round2.innerHTML = resultRound2;
            resultRound1 = 0;
            round1.innerHTML = resultRound1;
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
    globalPlayer();
    switchPlayer();
    activePlayerStyle();
    winner();
});

