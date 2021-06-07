const input = require('prompt-sync')();

const valor1 = input("Digite o primeiro valor: ")
const valor2 = input("Digite o segundo valor: ")

if (valor1>valor2){
    console.log(valor1, "é maior do que", valor2)
}

else if(valor1<valor2){
    console.log(valor2, "é maior do que", valor1)
}

else{
    console.log("Os valores sao iguais")
}