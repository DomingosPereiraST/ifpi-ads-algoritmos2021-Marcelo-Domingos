const input = require('prompt-sync')();

console.log("Area Geometrica: circulo")

const raio = Number(input('Digite o valor: '))

const pi = 3.14
const volume = 4*pi*(raio**3)

console.log("Volume do circulo: ", volume.toFixed(2))