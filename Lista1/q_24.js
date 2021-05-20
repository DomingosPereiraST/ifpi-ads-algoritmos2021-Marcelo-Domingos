const input = require('prompt-sync')();

console.log("Conversor de medidas")

const m = Number(input('Digite a medida em m: '))

const cm = m * 100

console.log("Equivale em cm: ", cm.toFixed(1))