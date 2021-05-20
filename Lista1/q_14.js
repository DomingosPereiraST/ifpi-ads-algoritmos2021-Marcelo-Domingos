const input = require('prompt-sync')();

console.log("Media aluno")

const nome = input("Nome do aluno: ")

const nota1 = Number(input('Digite a primeira nota: '))
const nota2 = Number(input('Digite a segunda nota: '))
const nota3 = Number(input('Digite a terceira nota: '))

const media = ((3*nota1) + (5*nota2) + (2*nota3))/(3 + 5 + 2)

console.log("Nome:", nome, " - Media:", media.toFixed(1))
if (media >= 7){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}