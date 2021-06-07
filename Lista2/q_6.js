const input = require('prompt-sync')();

const valor1 = Number(input("Digite o primeiro angulo: "))
const valor2 = Number(input("Digite o segundo angulo: "))
const valor3 = Number(input("Digite o terceiro angulo: "))

var soma = valor1+valor2+valor3


if ((valor1==0) || (valor2==0) || (valor3==0)){
    console.log("Não é um triangulo")
}

else {
    if (soma==180){
        console.log("É um triangulo")
        if ((valor1<90) & (valor2<90) & (valor3<90)){
            console.log("acutângulo")
        }
        else if ((valor1==90) | (valor2==90) | (valor3==90)){
            console.log("retângulo")
        }
        else if ((valor1>90) | (valor2>90) | (valor3>90)){
            console.log("obtusângulo")
        }
    }

    else{
        console.log("Não é um triangulo")
    }
}