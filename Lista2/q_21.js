const input = require('prompt-sync')();

const arredondar = Number(input("Digite um numero decimal: "))

var resultado = Math.round(arredondar)
console.log(resultado)