const input = require('prompt-sync')();

console.log("Calcular tempo")

var meses = Number(input('Digite a quantidade de meses: '))
var anos =  meses / 12
var meses_ano = (meses % 12)

console.log(meses, "mes(es) equivale(m) a", parseInt(anos), "ano(s) e", parseInt(meses_ano), "mese(es)")