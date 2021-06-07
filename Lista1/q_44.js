const input = require('prompt-sync')();

console.log("Latao porcentagem")

var latao = Number(input('Digite a quantidade de latao (em Kg): '))

var cobre = latao*(70/100)
var zinco = latao*(30/100)

console.log("A quantidade de cobre presente no latao é de", cobre.toFixed(1), "e a quantidade de zinco é", zinco.toFixed(1))