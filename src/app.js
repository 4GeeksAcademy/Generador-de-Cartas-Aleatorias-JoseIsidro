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
  let ancho = document.getElementById('ancho');
  let altura = document.getElementById('altura');
  altura.addEventListener('input', function () {
    if (altura.value >= 100 && altura.value <= 1000) {
      (div.style.height = `${this.value}px`) && 
      (ancho.value ? (div.style.width = `${ancho.value}px`):(div.style.width = `${this.value * 0.8}px`)) && 
      (simbolo1.style.fontSize = `${this.value * 0.25}px`) &&
      (numero.style.fontSize = `${this.value * 0.25}px`) &&
      (simbolo2.style.fontSize = `${this.value * 0.25}px`)
    }else {
      (div.style.height = '500px') && 
      (div.style.width = '400px') && 
      (simbolo1.style.fontSize = '125px') && 
      (numero.style.fontSize = '125px') && 
      (simbolo2.style.fontSize = '125px')
    }
  })

  ancho.addEventListener('input', function () {
    if (ancho.value >= 100 && ancho.value <= 1000) {
      (div.style.width = `${this.value}px`) && 
      ((altura.value) ? (div.style.height = `${altura.value}px`):(div.style.height = `${this.value * 1.25}px`)) &&
      (simbolo1.style.fontSize = `${this.value * 0.25}px`) &&
      (numero.style.fontSize = `${this.value * 0.25}px`) &&
      (simbolo2.style.fontSize = `${this.value * 0.25}px`)
    }else {
      (div.style.height = '500px') && (div.style.width = '400px') && (simbolo1.style.fontSize = '125px') && (numero.style.fontSize = '125px') && (simbolo2.style.fontSize = '125px')
    }
  })



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
  button.addEventListener('click', function () {
    clearInterval(intervalo);
    tiempo = 10;
    cuentraregresiva();
    botonDeCarta();
  });

};
