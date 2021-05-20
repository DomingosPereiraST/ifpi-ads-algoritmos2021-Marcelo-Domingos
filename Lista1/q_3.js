const input = require('prompt-sync')();

console.log("Calcular tempo")

const minutos = Number(input('Digite a medida de tempo em minutos: '))
const horas =  minutos / 60
const horas_min = (minutos % 60)

console.log(minutos, "minuto(s) equivale(m) a", parseInt(horas), "hora(s) e", horas_min, "minuto(s)")