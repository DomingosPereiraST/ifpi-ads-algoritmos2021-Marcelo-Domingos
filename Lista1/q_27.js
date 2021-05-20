const input = require('prompt-sync')();

console.log("Calcular tempo")

var seg = Number(input('Digite a medida de tempo em segundos: '))
var horas =  0
var min = 0

while (seg>=60){
    min += 1
    var seg = seg - 60
    while (min>=60) {
        horas += 1
        var min = min - 60
    }
}

console.log("Equivale a", parseInt(horas), "hora(s) e", parseInt(min), "minuto(s)", parseInt(seg), "segundo(s)")