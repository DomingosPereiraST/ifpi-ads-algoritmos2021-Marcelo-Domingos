const input = require('prompt-sync')();

const valor1 = Number(input("Digite o primeiro valor: "))
const valor2 = Number(input("Digite o segundo valor: "))
const valor3 = Number(input("Digite o terceiro valor: "))

if (valor1>valor2 & valor1>valor3){
    if (valor2>valor3){
        console.log(valor3, valor2, valor1)
    }
    else if (valor2<valor3){
        console.log(valor2, valor3, valor1)
    }
}

else if(valor2>valor1 & valor2>valor3){
    if (valor1>valor3){
        console.log(valor3, valor1, valor2)
    }
    else if (valor1<valor3){
        console.log(valor1, valor3, valor2)
    }
}

else if(valor3>valor1 & valor3>valor2){
    if (valor2>valor1){
        console.log(valor1, valor2, valor3)
    }
    else if (valor2<valor1){
        console.log(valor2, valor1, valor3)
    }
}