const input = require('prompt-sync')();

const hora_inicial = Number(input("Digite a hora de inicio do jogo: "))
const minuto_inicial = Number(input("Digite a minutagem de inicio do jogo: "))
const hora_final = Number(input("Digite a hora de térnimo do jogo: "))
const minuto_final = Number(input("Digite a minutagem de térnimo do jogo: "))

var hora = hora_final-hora_inicial
var minutos = minuto_final-minuto_inicial
if (minutos<0){
    while (minutos<0) {
        minutos+=60
        hora-=1
    }
    console.log(hora, minutos)
}
