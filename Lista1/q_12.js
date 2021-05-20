const input = require('prompt-sync')();

console.log("Aumento salarial")

const salario = Number(input('Digite o seu salario: '))

const aumento = salario * 25/100
const salario_aumento = salario + aumento

console.log("Com o aumento, seu salario é de: R$", salario_aumento)