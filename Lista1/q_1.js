const input = require('prompt-sync')();

console.log("Calcular velocidade em Km/h")

const velocidade_ms = Number(input('Digite a velocidade em m/s: '))
const calculo = (velocidade_ms * 3.6)

console.log("Velocidade em Km/h: ", calculo)