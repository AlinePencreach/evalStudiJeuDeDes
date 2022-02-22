// lorsqu'on click sur le bouton lancer 
const lancer = document.getElementById("btnLancer");
let number;

function getDiceRoll(){
    number = Math.floor(Math.random() * 6 ) + 1;
    console.log(number);
    return number;
}

lancer.addEventListener('click', function() {
    getDiceRoll();
    diceFace;
});


let diceFace = document.getElementById('diceFace');
diceFace.scr = `./images/dice${number}.png`;



