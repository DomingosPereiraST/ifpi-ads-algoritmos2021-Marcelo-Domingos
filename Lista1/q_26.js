const input = require('prompt-sync')();

console.log("Conversor de tempo")

var dias = Number(input('Digite a quantidade de dias: '))

var semana = dias / 7
var dias = (dias % 7)

console.log("Equivale em", parseInt(semana), "semana(s) e", parseInt(dias), "dias")