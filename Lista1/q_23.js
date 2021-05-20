const input = require('prompt-sync')();

console.log("Conversor de medidas")

const kg = Number(input('Digite a medida em Kg: '))

const g = kg * 1000

console.log("Equivale em g: ", g.toFixed(1))