const input = require('prompt-sync')();

const nome = input("Nome do aluno: ")

const Av1 = Number(input("Digite a nota da primeira avaliação: "))
const Av2 = Number(input("Digite a nota da segunda avaliação: "))
const Atvs = Number(input("Digite a nota da atividade: "))

function calcular_media(nota_1, nota_2, nota_atv) {
    var media_p = ((nota_1*2)+(nota_2*3)+(nota_atv*1))/(2+3+1)
    if (media_p>=7){
        console.log("Media de -", media_p.toFixed(1))
        console.log(nome, " - APROVADO")
    }
    else if (media_p>=4 && media_p<7){
        console.log("Media de -", media_p.toFixed(1))
        console.log(nome, " - PROVA FINAL")
        var nota_pf = Number(input("Digite a nota da prova final: "))
        var media_f = (media_p+nota_pf)/2
        if (media_f>=6){
            console.log("Media de -", media_f.toFixed(1))
            console.log(nome, " - APROVADO PÓS PROVA FINAL")
        }
        else{
            console.log("Media de -", media_f.toFixed(1))
            console.log(nome, " - REPROVADO PÓS PROVA FINAL")
        }

    }
    else if (media_p<4){
        console.log("Media de -", media_p.toFixed(1))
        console.log(nome, " - REPROVADO")
    }

}

calcular_media(Av1,Av2,Atvs)