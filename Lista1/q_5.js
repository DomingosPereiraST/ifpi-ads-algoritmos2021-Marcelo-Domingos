const input = require('prompt-sync')();

console.log("Soma dos elementos")

var valor1 = Number(input('Digite um numero de 3 algorismos: '))

var soma = 0

while (valor1 > 0){
    var resto = valor1 % 10
    var valor1 = (valor1 - resto)/10
    var soma = soma + resto
}

console.log("Resultado da soma dos numeros é: ", soma)