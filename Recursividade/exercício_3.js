"Soma de digitos de um numero inteiro"
var number = 451;

function SomaDigitos(number) {
  if (number < 10) {
    return number;
  }

  const UltimoNumero = number % 10;
  const numberRestante = Math.floor(number / 10);

  return UltimoNumero + SomaDigitos(numberRestante);
}

var result = SomaDigitos(number);
console.log(result);