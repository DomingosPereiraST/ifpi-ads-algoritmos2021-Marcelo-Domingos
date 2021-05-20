const input = require('prompt-sync')();

console.log("Conversor de temperatura")

const grau = Number(input('Digite a temperatura em °C: '))

const f = (5 * grau - 160) / 9

console.log("Equivale em °F: ", f.toFixed(1))