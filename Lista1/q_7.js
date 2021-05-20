const input = require('prompt-sync')();

console.log("Jogo com 3 numeros")

const valor1 = Number(input('Digite o primeiro valor: '))
const valor2 = Number(input('Digite o segundo valor: '))
const valor3 = Number(input('Digite o terceiro valor: '))

const calculo = valor1 + valor2
const calculo2 = valor2 - valor3

console.log("Resultado da soma dos primeiros numeros é: ", calculo)
console.log("Resultado da diferença dos ultimos numeros é: ", calculo2)