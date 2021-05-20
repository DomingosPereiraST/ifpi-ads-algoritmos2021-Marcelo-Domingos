const input = require('prompt-sync')();

console.log("Calcular idade")

var anos = Number(input('Digite a idade em anos: '))
var meses = Number(input('Digite a quantidade de meses: '))
var dias = Number(input('Digite a quantidade de dias: '))

while (anos>=1){
    anos-=1
    meses+=12
    while (meses>=1){
        meses-=1
        dias+=31
    }
}
console.log("Equivale(m) a", dias, "dias")

