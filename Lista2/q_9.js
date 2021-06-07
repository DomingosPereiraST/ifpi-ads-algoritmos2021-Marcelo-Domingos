const input = require('prompt-sync')();

const numero = Number(input("Digite o numero: "))

function calcular_primo(num){
    var divisores=0;
    for(count=1 ; count<=num ; count++)
     if(num % count == 0)
         divisores++;

    if(divisores==2)
        console.log('É primo')
    else
        console.log('Não é primo')
}

calcular_primo(numero)