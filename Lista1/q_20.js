const input = require('prompt-sync')();

console.log("Conversor de temperatura")

const grau = Number(input('Digite a temperatura em °F: '))

const c = (9 * grau + 160) / 5

console.log("Equivale em °C: ", c.toFixed(1))