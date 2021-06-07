const input = require('prompt-sync')();

function soma(num1, num2) {
    console.log(num1+num2)
}

function subtracao(num1, num2) {
    console.log(num1-num2)
}

function multiplicar(num1, num2) {
    console.log(num1*num2)
}

function divisao(num1, num2) {
    console.log(num1/num2)
}

const valor1 = Number(input("Digite o primeiro valor: "))
const valor2 = Number(input("Digite o segundo valor: "))

const opcao = input("Escolha a operação forma: 1 –Adição||2 – Subtração||3 – Multiplicação||4 – Divisão:  ")

if (opcao==1){
    soma(valor1,valor2)
}

else if (opcao==2){
    subtracao(valor1,valor2)
}

else if (opcao==3){
    multiplicar(valor1,valor2)
}

else if (opcao==4){
    dividir(valor1,valor2)
}
