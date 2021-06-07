const input = require('prompt-sync')();

console.log("Prestações do produto")

var valor = Number(input('Digite o valor do saque: '))

var saque = 0
var cinquenta = 50
var dez = 10
var cinco = 5
var um = 1

while (saque<valor) {
    saque+=cinquenta
    if (saque>valor){
        saque-=cinquenta
        while (saque<valor) {
            saque+=dez
            if (saque>valor){
                saque-=dez
                while (saque<valor) {
            }
        }
    }
}


console.log("Sua entrada deve ser de", entrada, "com 2 parcelas de", parcelas)