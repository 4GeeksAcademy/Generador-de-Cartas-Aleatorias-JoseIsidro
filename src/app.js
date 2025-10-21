import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let simbolos = ['♦', '♥', '♠', '♣'];
  let div = document.getElementById('carta');
  let tiempo = 10
  let intervalo;

  let button = document.getElementById('reset');
  button.classList.add("btn", "btn-outline-light");

  let simbolo1 = document.createElement('h2')
  simbolo1.innerHTML = '♠';
  simbolo1.classList.add("simbolo1");
  div.appendChild(simbolo1);

  let numero = document.createElement('h1');
  numero.innerHTML = 'A';
  numero.classList.add("numero");
  div.appendChild(numero);

  let simbolo2 = document.createElement('h2');
  simbolo2.innerHTML = '♠';
  simbolo2.classList.add("simbolo2");
  div.appendChild(simbolo2);

  let temporizador = document.createElement('h1');
  temporizador.innerHTML = tiempo
  document.body.appendChild(temporizador);

  // let altura = document.getElementById('altura')
  // altura.addEventListener('input', function(){
  //    altura.value = div.style.height ?`${this.value}px`:'';
  // })
  

  function botonDeCarta() {
    let simbolosRandom = simbolos[Math.floor(Math.random() * simbolos.length)]
    let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];
    simbolo1.innerHTML = simbolosRandom;
    numero.innerHTML = numeroRandom;
    simbolo2.innerHTML = simbolosRandom;

    if (simbolosRandom == '♥' || simbolosRandom == '♦') {
      simbolo1.style.color = '#ff2c2c';
      simbolo2.style.color = '#ff2c2c';
      numero.style.color = '#ff2c2c';
    } else {
      simbolo1.style.color = '#000000';
      simbolo2.style.color = '#000000';
      numero.style.color = '#000000';
    }
  }

  function cuentraregresiva() {
    intervalo = setInterval(() => {
      temporizador.innerHTML = tiempo
      tiempo--;

      if (tiempo === -1) {
        botonDeCarta()
        clearInterval(intervalo);
        tiempo = 10;
        cuentraregresiva()
      }
    }, 1000);
  }
  cuentraregresiva()
  button.addEventListener('click', function(){
    clearInterval(intervalo);
    tiempo = 10;
    cuentraregresiva();
    botonDeCarta();
  });
  
};
