const input = require('prompt-sync')();

console.log("Soma de frações")

console.log("Primeira fração")
const numerador = Number(input('Digite o primeiro valor: '))
const denominador = Number(input('Digite o segundo valor: '))

console.log("Segunda fração")
const numerador2 = Number(input('Digite o primeiro valor: '))
const denominador2 = Number(input('Digite o segundo valor: '))

var num_result = (numerador * denominador2) + (numerador2 * denominador)
var deno_result = denominador * denominador2

console.log("O resultado da soma dessas fraçoes é: ", num_result,"/",deno_result)