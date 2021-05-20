const input = require('prompt-sync')();

console.log("Distance em função")

var x1 = Number(input('Digite o valor de x1: '))
var x2 = Number(input('Digite o valor de x2: '))
var y1 = Number(input('Digite o valor de y1: '))
var y2 = Number(input('Digite o valor de y2: '))

var d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

console.log("Resultado é: ", d.toFixed(2))