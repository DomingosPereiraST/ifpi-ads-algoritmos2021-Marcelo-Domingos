const input = require('prompt-sync')();

console.log("Dividao de numeros")

const valor1 = Number(input('Digite o primeiro valor: '))
const valor2 = Number(input('Digite o segundo valor: '))

const quociente = valor1/valor2
const resto = valor1 % valor2 

console.log("O quociente da divisao é: ", quociente)
console.log("O resto da divisao é: ", resto)