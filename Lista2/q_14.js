const input = require('prompt-sync')();

const valor1 = Number(input("Digite o primeiro valor: "))
const valor2 = Number(input("Digite o segundo valor: "))
const valor3 = Number(input("Digite o terceiro valor: "))
const valor4 = Number(input("Digite o quarto valor: "))
const valor5 = Number(input("Digite o quinto valor: "))

var media = (valor1 + valor2 + valor3 + valor4 + valor5)/5

function maior_media(valor, media_1) {
    if (valor>media_1){
        console.log(valor)
    }

    else{
        console.log("X")
    }
}

console.log("Sua media é:", media)

maior_media(valor1, media)
maior_media(valor2, media)
maior_media(valor3, media)
maior_media(valor4, media)
maior_media(valor5, media)