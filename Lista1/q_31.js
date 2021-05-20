const input = require('prompt-sync')();

console.log("Sistema de numeração")

var binario = (input('Digite o numero em binario: '))
 
// converte em decimal
var decimal = parseInt(binario, 2);
 
console.log(decimal);

