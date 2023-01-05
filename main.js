// function takeMusicPom() {
//   document.querySelector("#som_tecla_pom").play();
// }

// const keyList = document.querySelectorAll(".tecla");

// keyList[0].onClick = takeMusicPom;

// Pom ----------------------------------------
function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas[0].onclick = tocaSomPom;

//enquanto
while (0 <= 9) {
  listaDeTeclas[0].onclick = tocaSomPom;
}
