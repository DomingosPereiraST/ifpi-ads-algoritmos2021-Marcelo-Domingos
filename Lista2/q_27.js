const input = require('prompt-sync')();

console.log("Digite os dados da data de nascimento(d/m/a)")
const ano = Number(input("Digite o ano: "))
const mes = Number(input("Digite o mes: "))
const dia = Number(input("Digite o dia: "))

console.log("Digite os dados da data de medida/atual(d/m/a)")
const ano2 = Number(input("Digite o ano: "))
const mes2 = Number(input("Digite o mes: "))
const dia2 = Number(input("Digite o dia: "))

if (mes<=12 && dia<=31){
    if (mes2<=12 && dia2<=31){
        var idade = ano2-ano
        var meses = mes2-mes
        var dias = dia2-dia

        while (meses<0) {
            meses+=12
            idade-=1
            while (dias<0){
                dias+=31
                meses-=1
            }
        }
    }
    else{
        console.log("Data invalida")
    }
}
else{
    console.log("Data invalida")
}

console.log("A pessoa possui:", idade," anos,", meses," meses e", dias," dias")
