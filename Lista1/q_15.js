const input = require('prompt-sync')();

console.log("Area Geometrica: Triangulo")

const base = Number(input('Digite o valor: '))
const altura = Number(input('Digite o valor: '))

const area = (base * altura)/2

console.log("Area do triangulo: ", area)
