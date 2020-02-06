let resultado = document.querySelector("#resultado");

function pegaInput() {
  return resultado.value;
}

function clean() {
  resultado.value = "";
}

function calcula(calculo) {
  return new Function("return " + calculo)();
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
