const input = require('prompt-sync')();

const valor1 = input("Digite o primeiro numero: ")
const valor2 = input("Digite o segundo numero: ")
const valor3 = input("Digite o terceiro numero: ")

if (valor1==valor2 & valor1==valor3 & valor2==valor3){
    console.log("Todos os numeros sao iguais")
}

else if (valor1==valor2 | valor1==valor3 | valor2==valor3){
    console.log("Pelo menos dois deles sao iguais")
}

else{
    console.log("Não há nenhum numero igual")
}