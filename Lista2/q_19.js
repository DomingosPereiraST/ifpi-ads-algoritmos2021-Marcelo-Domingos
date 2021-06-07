const input = require('prompt-sync')();

const peso = Number(input("Digite o seu peso: "))
const altura = Number(input("Digite a sua altura: "))

const imc = peso/(altura*2)
if (imc<25){
    console.log(imc.toFixed(1), "- Normal")
}

else if(30>=imc>=25){
    console.log(imc.toFixed(1), "- obeso")
}

else if(30<imc){
    console.log(imc.toFixed(1), "- obesidade morbida")
}