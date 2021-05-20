const input = require('prompt-sync')();

console.log("Calcular tempo")

var horas = Number(input('Digite a medida de tempo em horas: '))
var dias =  0
var semanas = 0

while (horas>=24){
    dias += 1
    var horas = horas - 24
    while (dias>=7) {
        semanas += 1
        var dias = dias - 7
    }
}

console.log("Equivale a", parseInt(semanas), "semanas(s) e", parseInt(dias), "dia(s)", parseInt(horas), "hora(s)")