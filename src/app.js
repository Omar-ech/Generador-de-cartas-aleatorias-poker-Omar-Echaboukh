import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarCarta() {
  //write your code here
  const palos = ['♥️', '♦️', '♠️', '♣️'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const cartaElemento = document.getElementById("carta-poker");
  const paloTopElemento = document.getElementById("palo-arriba");
  const paloBottomElemento = document.getElementById("palo-abajo");
  const valorElemento = document.getElementById("valor-central");

  function obtenerAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }

  const paloElegido = obtenerAleatorio(palos);
  const valorElegido = obtenerAleatorio(valores);

  let colorClase = '';

  if (paloElegido === '♥️' || paloElegido === '♦️') {
    colorClase = "red";
  } else {
    colorClase = "black";
  }

  cartaElemento.classList.remove('red', 'black');
  cartaElemento.classList.add(colorClase);

  paloTopElemento.textContent = paloElegido;
  paloBottomElemento.textContent = paloElegido;
  paloTopElemento.className = `suit top ${colorClase}`;
  paloBottomElemento.className = `suit bottom ${colorClase}`;

  valorElemento.textContent = valorElegido;

  valorElemento.classList.remove('red', 'black');
  valorElemento.classList.add(colorClase);

  const botonGenerar = document.getElementById('boton-generador');
  if (botonGenerar) {
    botonGenerar.addEventListener('click', generarCarta);
  }
};
