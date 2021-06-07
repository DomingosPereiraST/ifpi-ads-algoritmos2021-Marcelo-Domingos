const input = require('prompt-sync')();

const ano_nasc = Number(input("Digite o ano de nascimento: "))
const mes_nasc = Number(input("Digite o mes de nascimento(numero): "))
const dia_nasc = Number(input("Digite o dia de nascimento(numero): "))

function calcula_idade(dia, mes, ano) {
    const ano_atual = Number(input("Digite o ano atual: "))
    const mes_atual = Number(input("Digite o mes atual (numero): "))
    const dia_atual = Number(input("Digite o dia atual (numero): "))

    var idade = ano_atual - ano
    console.log("Possui", idade, "anos")
}

calcula_idade(dia_nasc, mes_nasc, ano_nasc)