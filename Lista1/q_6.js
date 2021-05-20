const input = require('prompt-sync')();

console.log("Calcular velocidade em Km/h")

const velocidade_km = Number(input('Digite a velocidade em Km/h: '))
const calculo = (velocidade_km / 3.6)

console.log("Velocidade em Km/h: ", calculo.toFixed(1))