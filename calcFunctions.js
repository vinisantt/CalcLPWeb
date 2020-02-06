let resultado = document.querySelector("#resultado");

function pegaInput() {
  return resultado.value;
}

function clean() {
  resultado.value = "";
}

function adicionaNumero(numero) {
  resultado.value += numero;
}

function calcula() {
  resultado.value = new Function("return " + pegaInput())();
}

function soma() {
  resultado.value += " + ";
}

function divide() {
  resultado.value += " / ";
}

function multiplica() {
  resultado.value += " * ";
}

function subtrai() {
  resultado.value += " - ";
}
