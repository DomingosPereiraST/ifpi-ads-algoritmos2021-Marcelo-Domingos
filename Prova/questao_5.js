const input = require('prompt-sync')();

const valor1 = Number(input("Por favor, agora digite o primeiro valor: "))
const valor2 = Number(input("Por favor, agora digite o segundo valor: "))
const valor3 = Number(input("Por favor, agora digite o terceiro valor: "))

function calculo_score1(valor) {
    if (valor>0 && valor<=100){
        var valor_score1 = valor+(valor*(26/100))
        if (valor_score1>80){
            console.log("Score 1.0", valor_score1.toFixed(1), " Muito bom")
        }
        else if (valor_score1<=80 & valor_score1>60){
            console.log("Score 1.0", valor_score1.toFixed(1), " Bom")
        }
        else if (valor_score1<=60 & valor_score1>40){
            console.log("Score 1.0", valor_score1.toFixed(1), " Regular")
        }

        else if (valor_score1<=40 & valor_score1>=0){
            console.log("Score 1.0", valor_score1.toFixed(1), " Baixo")
        }
    }
    else{
        console.log("Dados invalidos!!")
    }
}

function calculo_score2(valor) {
    if (valor>0 && valor<=100){
        var valor_score2 =  valor+(valor*(62/100))
        if (valor_score2>70){
            console.log("Score 2.0", valor_score2.toFixed(1), " Muito bom")
        }
        else if (valor_score2<=70 & valor_score2>50){
            console.log("Score 2.0", valor_score2.toFixed(1), " Bom")
        }
        else if (valor_score2<=50 & valor_score2>30){
            console.log("Score 2.0", valor_score2.toFixed(1), " Regular")
        }
        else if (valor_score2<=30 & valor_score2>=0){
            console.log("Score 2.0", valor_score2.toFixed(1), " Baixo")
        }
    }
    else{
        console.log("Dados invalidos!!")
    }
}

console.log("Primeiro valor:", valor1)
calculo_score1(valor1)
calculo_score2(valor1)

console.log("Segundo valor:", valor2)
calculo_score1(valor2)
calculo_score2(valor2)

console.log("Terceiro valor:", valor3)
calculo_score1(valor3)
calculo_score2(valor3)