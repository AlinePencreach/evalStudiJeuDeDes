const lancer = document.getElementById("btnLancer");
let number = Math.floor(Math.random() * 6 ) + 1;

lancer.addEventListener('click', function() {
    console.log(number);
    number = Math.floor(Math.random() * 6 ) + 1;
    return number;
});


