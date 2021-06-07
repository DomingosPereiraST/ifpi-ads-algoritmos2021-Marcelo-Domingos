const input = require('prompt-sync')();

console.log("Digite os dados da primeira data (d/m/a)")
const ano = Number(input("Digite o ano: "))
const mes = Number(input("Digite o mes: "))
const dia = Number(input("Digite o dia: "))

console.log("Digite os dados da segunda data (d/m/a)")
const ano2 = Number(input("Digite o ano: "))
const mes2 = Number(input("Digite o mes: "))
const dia2 = Number(input("Digite o dia: "))

if (1800<ano && mes<=12 && dia<=31){
    if (1800<ano2 && mes2<=12 && dia2<=31){
        if (ano==ano2){
            if (mes==mes2){
                if (dia==dia2){
                    console.log("Datas iguais")
                }
                else if (dia>dia2){
                    console.log("A primeira data é mais recente")
                }
                else if (dia<dia2){
                    console.log("A segunda data é mais recente")
                }
            }
            else if (mes>mes2){
                console.log("A primeira data é mais recente")
            }
            else if (mes<mes2){
                console.log("A segunda data é mais recente")
            }
        }

        else if (ano>ano2){
            console.log("A primeira data é maior")
        }

        else if (ano<ano2){
            console.log("A segunda data é maior")
        }
    }
    else{
        console.log("Datas invalidas")
    }
}

else{
    console.log("Datas invalidas")
}