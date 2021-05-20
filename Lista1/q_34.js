const input = require('prompt-sync')();

console.log("Media")

const valor1 = Number(input('Digite o primeiro valor: '))
const valor2 = Number(input('Digite o segundo valor: '))
const valor3 = Number(input('Digite o terceiro valor: '))

const media = (nota1 + nota2 + nota3)/3
console.log( media.toFixed(1))