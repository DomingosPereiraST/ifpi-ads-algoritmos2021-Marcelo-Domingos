const input = require('prompt-sync')();

const lado1 = Number(input("Digite o primeiro lado: "))
const lado2 = Number(input("Digite o segundo lado: "))
const lado3 = Number(input("Digite o terceiro lado: "))


if ((lado1==0) || (lado2==0) || (lado3==0)){
    console.log("Não é um triangulo")
}

else {
    if (((lado1**2)+(lado2**2))==lado3**2){
        console.log("a hipotenusa é:", lado3)
        console.log("os catetos sao:", lado1, lado2)
    }

    else if (((lado1**2)+(lado3**2))==lado2**2){
        console.log("a hipotenusa é:", lado2)
        console.log("os catetos sao:", lado1, lado3)
    }

    else if (((lado2**2)+(lado3**2))==lado1**2){
        console.log("a hipotenusa é:", lado1)
        console.log("os catetos sao:", lado2, lado3)
    }

    else{
        console.log("Tente outros valores!!")
    }
}
