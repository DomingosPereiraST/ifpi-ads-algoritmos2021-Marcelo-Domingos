const input = require('prompt-sync')();

console.log("Prestações do produto")

var valor = Number(input('Digite o valor da mercadoria: '))

var entrada = valor * (40/100)
var parcelas = valor * (30/100)

console.log("Sua entrada deve ser de", entrada, "com 2 parcelas de", parcelas)