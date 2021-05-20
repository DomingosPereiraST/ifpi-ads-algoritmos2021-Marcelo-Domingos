const input = require('prompt-sync')();

console.log("Equação")

var a = Number(input('Digite o valor de a: '))
var b = Number(input('Digite o valor de b: '))
var c = Number(input('Digite o valor de c: '))
var d = Number(input('Digite o valor de d: '))
var e = Number(input('Digite o valor de e: '))
var f = Number(input('Digite o valor de f: '))

var x = (c*e - b*f) / (a*e - b*d)
var y = (a*f - c*d) / (a*e - b*d)

console.log("Resultado é: x=", x.toFixed(2), "e y=", y.toFixed(2))