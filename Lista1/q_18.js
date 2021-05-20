const input = require('prompt-sync')();

console.log("Area Geometrica: circulo")

const raio = Number(input('Digite o valor: '))

const comprimento = 2*3.14*raio

console.log("Comprimento do circulo: ", comprimento.toFixed(2))
