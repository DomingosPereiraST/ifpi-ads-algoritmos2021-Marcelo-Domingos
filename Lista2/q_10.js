const input = require('prompt-sync')();

const ano = Number(input("Digite o ano: "))
const mes = Number(input("Digite o mes(numero): "))
const dia = Number(input("Digite o dia(numero): "))

if (ano<3000 && ano>1600){
    if (mes>0 && mes<=12){
        if (dia>0 && dia<=31){
            console.log("Data Valida")
        }
        else{
            console.log("dia invalido")
        }
    }
    else{
        console.log("mes invalido")
    }
}

else{
    console.log("ano invalido, está muito distante. Tente outro valor")
}

