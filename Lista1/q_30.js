const input = require('prompt-sync')();

console.log("Calcular tempo")

var min = Number(input('Digite a medida de tempo em minutos: '))
var dias =  0
var horas = 0

while (min>=60){
    horas += 1
    var min = min - 60
    while (horas>=24) {
        dias += 1
        var horas = horas - 24
    }
}

console.log("Equivale a", parseInt(dias), "dia(s) e", parseInt(horas), "hora(s)", parseInt(min), "minuto(s)")