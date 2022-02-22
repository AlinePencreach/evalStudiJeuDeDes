const lancer = document.getElementById("btnLancer");
let number;

lancer.addEventListener('click', function() {
    number = Math.floor(Math.random() * 6 ) + 1;
    console.log(number);
    return number;
});


