const input = require('prompt-sync')();

console.log("Conversao de dinheiro")

const dolar = Number(input('Digite o valor em dolar: '))
const real = (dolar * 5.26)

console.log(dolar,"dolares em Real equivale a R$", real.toFixed(2))