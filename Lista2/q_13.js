const input = require('prompt-sync')();

const valor1 = Number(input("Digite o primeiro valor: "))
const valor2 = Number(input("Digite o segundo valor: "))
const valor3 = Number(input("Digite o terceiro valor: "))
const valor4 = Number(input("Digite o quarto valor: "))
const valor5 = Number(input("Digite o quinto valor: "))

var maior_num = Math.max(valor1, valor2, valor3, valor4, valor5)
var menor_num = Math.min(valor1, valor2, valor3, valor4, valor5)

console.log(maior_num, menor_num)