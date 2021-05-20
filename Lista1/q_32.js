const input = require('prompt-sync')();

console.log("Diferença de numeros")

var valor = input("Digite o valor: ")

var valor2 = valor.split('').reverse().join('')

var diferenca = parseInt(valor) - parseInt(valor2)

console.log("A diferença entre ",valor, "e seu inverso ",valor2, "é igual a", diferenca)