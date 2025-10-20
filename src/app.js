import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let simbolos = ['♦', '♥', '♠', '♣']
  let div = document.getElementById('carta');
  let simbolosRandom = simbolos[Math.floor(Math.random() * simbolos.length)]
  let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];


  let simbolo1 = document.createElement('h2')
  simbolo1.innerHTML = simbolosRandom
  Object.assign(simbolo1.style,{
    alignItems: 'space-start',
    fontSize: '120px',
    display: 'flex',
    marginLeft:'20px'
  })
  div.appendChild(simbolo1)

  let numero = document.createElement('h1');
  numero.innerHTML = numeroRandom
  Object.assign(numero.style, {
    alignItems: 'center',
    fontSize: '150px',
    display: 'flex',

  })
  div.appendChild(numero);

  let simbolo2 = document.createElement('h2')
  simbolo2.innerHTML = simbolosRandom
  Object.assign(simbolo2.style, {
    fontSize: '120px',
    alignItems: 'space-end',
    display: 'flex',
    transform: 'rotate(180deg)',
    marginRight:'20px'
  })
  div.appendChild(simbolo2)
  if (simbolosRandom == '♥' || simbolosRandom == '♦') {
    simbolo1.style.color = '#ff2c2c';
    simbolo2.style.color = '#ff2c2c';
    numero.style.color = '#ff2c2c';

  }


};
