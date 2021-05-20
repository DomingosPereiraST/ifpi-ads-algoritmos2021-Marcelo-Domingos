const input = require('prompt-sync')();

console.log("Conversor de medidas")

var m = Number(input('Digite a medida em m: '))

var km = m / 1000
m = (m % 1000)

console.log("Equivale em km: ", parseInt(km), "Km e ", parseInt(m), "metros")