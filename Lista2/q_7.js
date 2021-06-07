const input = require('prompt-sync')();

const lado1 = Number(input("Digite o primeiro lado: "))
const lado2 = Number(input("Digite o segundo lado: "))
const lado3 = Number(input("Digite o terceiro lado: "))


function triangulo(l1,l2,l3) {
    if ((l1==0) || (l2==0) || (l3==0)){
        console.log("Não é um triangulo")
    }

    else {
        if  ((l1>(l2+l3)) || (l2>(l1+l3)) || (l3>(l2+l1))){
            console.log("Não é um triangulo")
        }

        else{
            console.log("É um triangulo")
            if ((l1+l2)==(l3*2)){
                console.log("Equilatero")
            }
            else if (l1==l2 || l1==l3 || l3==l2){
                console.log("isósceles")
            }

            else if (l1!=l2 || l1!=l3 || lado!=l2){
                console.log("escaleno")
            }
        }
    }
}

triangulo(lado1, lado2, lado3)