const input = require('prompt-sync')();

console.log("Custo carro")

var valor = Number(input('Digite o valor do automovel: '))

var custo = valor + (valor*(28/100)) + (valor * (45/100))

console.log("Seu custo de consumidor é: ", custo)