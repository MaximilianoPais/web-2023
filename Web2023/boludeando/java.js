

let contador = 0;
function clickearsuma() {

  //incrementa el valor de contador
  contador++;

  //es lo mismo que contador = contador + 1 

  let valor = document.getElementById("spanContador");
  valor.innerHTML = contador;
}

function clickearresta() {


  contador--;

  let valor = document.getElementById("spanContador");
  valor.innerHTML = contador;

}
