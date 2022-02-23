//déclaration des variable du bouton lancer et number :
const lancer = document.getElementById("btnLancer");
const diceFace = document.getElementById('diceFace');
let number;

//fonction qui retourne un nombre entre 1 et 6 :
function getDiceRoll(){
    number = Math.floor(Math.random() * 6 ) + 1;
    console.log(number);
    return number;
}

//  Cliquer sur le bouton lancer appel la fonction getDiceRoll qui donne un nombre aléatoire entre 1 et 6 :
lancer.addEventListener('click', function() {
    getDiceRoll();
    diceFace;
});

diceFace.src = "./images/dice" + number + ".png";



