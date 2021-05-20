const input = require('prompt-sync')();

console.log("Gastos de um fumante")

var anos = Number(input('Há quantos anos você fuma? '))
var cigarros_dia = Number(input('Quantos cigarros você fuma por dia? '))
var preço = Number(input('Quanto custo um maço de cigarro? '))

var meses =  0
var dias = 0

while (anos>=1){
    meses += 12
    anos -= 1
    while (meses>=1) {
        dias += 31
        meses -= 1
    }
}

var gasto_dia = preço * cigarros_dia
var custo = gasto_dia * dias

console.log("Você já gastou, com cigarros, em torno de R$", custo)