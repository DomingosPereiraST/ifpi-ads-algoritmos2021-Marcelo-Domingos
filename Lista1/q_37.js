const input = require('prompt-sync')();

console.log("Calcular tempo")

var dias = Number(input('Digite a medida de tempo em dias: '))
var meses =  0
var anos = 0

while (dias>=31){
    meses += 1
    var dias = dias - 31
    while (meses>=12) {
        anos += 1
        var meses = meses - 12
    }
}

console.log("Equivale a", parseInt(anos), "ano(s) e", parseInt(meses), "mes(es)", parseInt(dias), "dia(s)")