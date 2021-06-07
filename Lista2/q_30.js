const input = require('prompt-sync')();

const valor = input("Digite um numero de 4 digitos: ")

function regra(numero) {
    var dupla1 = parseInt(numero/100)
    var dupla2 = numero%100
    if ((dupla1+dupla2)**2 == numero){
        console.log("Caso perfeito encontrado")
    }
    else{
        console.log("Tente outro numero!!")
    }
}

regra(valor)