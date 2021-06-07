const input = require('prompt-sync')();

const valor = Number(input("Digite um numero de 2 algarismos: "))

var dezena = valor/10
var unidade = valor%10

if (parseInt(dezena)==unidade){
    console.log("Dezena e unidade sao iguais")
}

else{
    console.log("Dezena e unidade sao diferentes")
}