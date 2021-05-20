const input = require('prompt-sync')();

console.log("Soma dos algarismos de um numero")

var num = Number(input('Digite o valor: '))

var unidade = num % 10
num /= 10

var dezena = num % 10
num /= 10

var centena = num % 10
num /= 10
var miliar = num

var soma = parseInt(miliar) + parseInt(centena) + parseInt(dezena) + parseInt(unidade)

console.log("Soma dos algarismos é: ", soma)