let number = Math.floor(Math.random() * 6) + 1;

function diceRun(){
    console.log(number);
    let lancer = document.getElementById('btnLancer');
    return number;
}

diceRun();