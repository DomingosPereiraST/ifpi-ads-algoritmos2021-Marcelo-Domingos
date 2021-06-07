const input = require('prompt-sync')();

const angulo = input("Digite o valor do angulo entre 0 - 360: ")

if (0<angulo<=90){
    console.log("Primeiro quadrante")
}

else if (90<angulo<=180){
    console.log("Segundo quadrante")
}

else if(180<angulo<=270){
    console.log("Terceiro quadrante")
}

else if(270<angulo<=360){
    console.log("Quarto quadrante")
}