const input = require('prompt-sync')();

const numero_casos = input("Por favor, digite o número de casos há 14 dias atrás: ")
const numero_casos_atual = input("Por favor, digite o número atual de casos: ")

function calcular_variacao(valor_14, valor_atual) {
    var variacao_porcentagem = valor_atual - valor_14
    if (variacao_porcentagem<0){
        variacao_porcentagem*=(-1)
        var resultado = (variacao_porcentagem*100)/valor_14
        console.log("Houve uma baixa em relação aos números anteriores")
        console.log("Uma variação de", resultado.toFixed(1),"%")
        if (resultado>15){
            console.log("QUADRO - INSTAVÉL")
        }
        else {
            console.log("QUADRO - EM ESTABILIDADE")
        }
    }
    else if (variacao_porcentagem>0){
        var resultado = (variacao_porcentagem*100)/valor_14
        console.log("Houve uma alta em relação aos números anteriores")
        console.log("Uma variação de", resultado.toFixed(1),"%")
        if (resultado>15){
            console.log("QUADRO - INSTAVÉL")
        }
        else {
            console.log("QUADRO - EM ESTABILIDADE")
        }
    }
    else{
        console.log("Não há variações nos números de casos!!")
    }

}

calcular_variacao(numero_casos, numero_casos_atual)