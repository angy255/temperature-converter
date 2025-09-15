document.querySelector('#calculate').addEventListener('click', calculate)
const greeting=document.getElementById('greeting')


let hot = new Audio('img/sukari.mp3');
let mild = new Audio ('img/yameii.mp3');
let cold = new Audio ('img/christmas.mp3');

function calculate(){
let temperature = document.querySelector('#temperature').value;
console.log(temperature);

// how can i round my decimal to two spots?' 
// let celsius = Math.round(tempToCelsius * 100) / 100;

const tempToCelsius = (temperature - 32) * 5 / 9;
let celsius = Math.round(tempToCelsius);
console.log(celsius);
document.querySelector('#celsius').innerText= celsius + "°";

if(temperature > 65){
    console.log ("It's muy caliente!");
    document.querySelector('body').style.backgroundImage='url("img/hot.jpg")'
    document.querySelector('body').style.backgroundRepeat = 'no-repeat'
    document.querySelector('body').style.backgroundSize = 'cover'
    greeting.innerHTML="Hace calor 😎"
    hot.play();
    mild.pause();
    cold.pause();
}
else if (temperature <= 65 && temperature > 50){
    console.log ("bleh!");
    document.querySelector('body').style.backgroundImage='url("img/mild.jpg")'
    document.querySelector('body').style.backgroundRepeat = 'no-repeat'
    document.querySelector('body').style.backgroundSize = 'cover'
    greeting.innerHTML="Enjoy the sun! "
    hot.pause();
    mild.play();
    cold.pause();

}
else{
    console.log ("it's cold!");
    document.querySelector('body').style.backgroundImage='url("img/cold.jpg")'
    document.querySelector('body').style.backgroundRepeat = 'no-repeat'
    document.querySelector('body').style.backgroundSize = 'cover'
    greeting.innerHTML="Brrrr it's freezing!!"
    hot.pause();
    mild.pause();
    cold.play();
}
}

