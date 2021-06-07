const input = require('prompt-sync')();

const valor1 = Number(input("Digite o primeiro valor: "))
const valor2 = Number(input("Digite o segundo valor: "))

var resto = valor1%valor2
if (parseInt(resto)==1){
    console.log("Caso 1 - escreva a soma dessas variáveis mais o resto da divisão")
    console.log(valor1+valor2+resto)
}

else if (parseInt(resto)==2){
    console.log("Caso 2 - escreva se o primeiro e o segundo valor são pares ou ímpares")
    if ((valor1%2)==0){
        console.log(valor1, "é par")
        if ((valor2%2)==0){
            console.log(valor2, "é par")
        }
        else{
            console.log(valor2, "é impar")
        }
    }
    else{
        console.log(valor1, "é impar")
        if ((valor2%2)==0){
            console.log(valor2, "é par")
        }
        else{
            console.log(valor2, "é impar")
        }
    }
}

else if (parseInt(resto)==3){
    console.log("Caso 3 - multiplique a soma dos valores lidos pelo primeiro")
    console.log((valor1+valor2)*valor1)
}

else if (parseInt(resto)==4 && valor2!=0){
    console.log("Caso 4 - divida a soma dos números lidos pelo segundo, se este for diferente de zero")
    console.log((valor1+valor2)/valor2)
}

else{
    console.log("Busque outro resultado :)")
}
