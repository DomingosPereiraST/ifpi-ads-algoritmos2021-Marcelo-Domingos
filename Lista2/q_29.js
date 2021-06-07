const input = require('prompt-sync')();

const valor = input("Digite um numero de 4 digitos: ")

function quadradoP(numero) {
    var raiz = Math.sqrt(numero)
    var dupla1 = parseInt(numero/100)
    var dupla2 = numero%100
    if (raiz==(dupla1+dupla2)){
        console.log("Quadrado perfeito encontrado")
    }
    else{
        console.log("Tente outro numero!!")
    }
}

quadradoP(valor)