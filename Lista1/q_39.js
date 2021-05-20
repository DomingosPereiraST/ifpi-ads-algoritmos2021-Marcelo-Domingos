const input = require('prompt-sync')();

console.log("Jogo com 3 numeros")

var valor1 = Number(input('Digite o primeiro valor: '))
var valor2 = Number(input('Digite o segundo valor: '))
var valor3 = Number(input('Digite o terceiro valor: '))

var r = (valor1 + valor2)**2
var s = (valor2 + valor3)**2

var d = (r+s)/2

console.log("Resultado é: ", d)