// function takeMusicPom() {
//   document.querySelector("#som_tecla_pom").play();
// }

// const keyList = document.querySelectorAll(".tecla");

// keyList[0].onClick = takeMusicPom;

// Pom ----------------------------------------
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou Seletor Inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;

//enquanto
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];

//   const instrumento = tecla.classList[1];

// console.log(instrumento);

//template string
// const idAudio = `#som_${instrumento}`;

// tecla.onclick = function () {
//   tocaSom(idAudio);
// };

// contador = contador + 1;

// console.log(contador);
// }

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
