const input = require('prompt-sync')();

console.log("Calcular tempo")

var horas = Number(input('Digite a medida de tempo em horas: '))
var minutos = Number(input('Digite a medida de tempo em minutos: '))
if (minutos <= 59){
    while (horas>=1){
        horas-=1
        minutos+=60
    }
    console.log("Equivale(m) a", minutos, "minutos")
}
else{
    console.log("invalida")
}