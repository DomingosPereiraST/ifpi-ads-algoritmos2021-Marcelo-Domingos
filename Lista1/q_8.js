const input = require('prompt-sync')();

console.log("Jogo com 2 numeros")

const valor1 = Number(input('Digite o primeiro valor: '))
const valor2 = Number(input('Digite o segundo valor: '))

const calculo = (valor1 + valor2) / (valor1 - valor2)

console.log("Resultado da soma dos primeiros numeros é: ", calculo)