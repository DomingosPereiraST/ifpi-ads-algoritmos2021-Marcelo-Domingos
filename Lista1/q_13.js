const input = require('prompt-sync')();

console.log("Aumento salarial")

const valor = Number(input('Digite o seu numero: '))

const porcentagem = valor * 70/100

console.log("70% de ", valor, "é ", porcentagem)