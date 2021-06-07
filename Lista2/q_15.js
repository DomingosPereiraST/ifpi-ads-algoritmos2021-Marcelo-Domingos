const input = require('prompt-sync')();

const horas_1 = Number(input("Digite a quantidade de horas/aula que o primeiro professor trabalhou: "))
const horas_2 = Number(input("Digite a quantidade de horas/aula que o segundo professor trabalhou: "))

const ganho_hora = Number(input("Digite o valor ganho por hora: "))

var professor1 = horas_1*ganho_hora
var professor2 = horas_2*ganho_hora

var maior_recebido = Math.max(professor1, professor2)
if (maior_recebido==professor1){
    console.log("O primeiro professor recebeu mais do que o segundo. Horas trabalhadas:", horas_1, ", gerou um total de: R$", professor1)
}
else if (maior_recebido==professor2){
    console.log("O segundo professor recebeu mais do que o primeiro. Horas trabalhadas:", horas_2, ", gerou um total de: R$", professor2)
}