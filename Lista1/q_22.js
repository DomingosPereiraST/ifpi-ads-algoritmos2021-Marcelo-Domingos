const input = require('prompt-sync')();

console.log("Conversor de medidas")

const km = Number(input('Digite a medida em Km: '))

const m = km * 1000

console.log("Equivale em m: ", m.toFixed(1))