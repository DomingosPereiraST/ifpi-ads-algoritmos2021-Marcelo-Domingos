const input = require('prompt-sync')();

console.log("Soma de numeros")

var valor = input("Digite o valor: ")

var valor2 = valor.split('').reverse().join('')

var soma = parseInt(valor) + parseInt(valor2)

console.log("A soma de ",valor, "e seu inverso ",valor2, "é igual a", soma)