let secuencia = [];
let contadorRondas = 0;
let rondaActual = 0;
let jugando = false;

function iniciarJuego() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('juego').style.display = 'block';
  secuencia = [];
  contadorRondas = -1;
  rondaActual = 0;
  jugando = true;
  siguienteRonda();
}

function siguienteRonda() {
  if (jugando) {
    rondaActual = 0;
    agregarPaso();
    mostrarSecuencia();
  }
}

function agregarPaso() {
  const colores = ['verde', 'rojo', 'azul', 'amarillo'];
  const nuevoColor = colores[Math.floor(Math.random() * 4)];
  secuencia.push(nuevoColor);
  contadorRondas++;
  document.getElementById('contadorRondas').innerText = contadorRondas;
}

const cajas = document.querySelectorAll('.boton');

cajas.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.style.opacity = '0.1';
    setTimeout(() => {
      caja.style.opacity = '1';
    }, 300);
  });
});


function mostrarSecuencia() {
  let i = 0;
  const intervalo = setInterval(() => {
    resaltarBoton(secuencia[i]);
    i++;
    if (i >= secuencia.length) {
      clearInterval(intervalo);
    }
  }, 1000);
}

function resaltarBoton(color) {
  const boton = document.getElementById(color);
  boton.style.opacity = '0.1';
  setTimeout(() => {
    boton.style.opacity = '1';
  }, 500);
}

function verificarMovimiento(color) {
  if (jugando) {
    if (color === secuencia[rondaActual]) {
      rondaActual++;
      if (rondaActual === secuencia.length) {
        setTimeout(siguienteRonda, 1000);
      }
    } else {
      finDelJuego();
    }
  }
}

function finDelJuego() {
  jugando = false;
  alert(`¡Fin del juego! Rondas completadas: ${contadorRondas}`);
  document.getElementById('inicio').style.display = 'block';
  document.getElementById('juego').style.display = 'none';
}
