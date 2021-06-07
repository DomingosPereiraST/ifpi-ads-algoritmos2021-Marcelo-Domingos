const input = require('prompt-sync')();

const nota1 = Number(input("Digite a primeira nota: "))
const nota2 = Number(input("Digite a segunda nota: "))
var media = (nota1+nota2)/2

if (media>=7){
    console.log(media, "- Aprovado")
}

else if (media<7){
    console.log(media, "- Pendencia!!")
    var nota_final = Number(input("DIGITE A NOTA DO EXAME FINAL: "))
    var media_final = (nota_final + media)/2
    if (media_final>=5){
        console.log(media_final, "- Aprovado pela Final")
    }
    else{
        console.log(media, "- Reprovado")
    }
}

