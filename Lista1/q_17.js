const input = require('prompt-sync')();

console.log("Area Geometrica: retangulo")

const base = Number(input('Digite o valor: '))
const altura = Number(input('Digite o valor: '))

const area = (base * altura)

console.log("Area do retangulo: ", area)