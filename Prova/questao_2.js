const input = require('prompt-sync')();

const nome = input("Digite o nome do vendedor: ")
const valor_vendas = Number(input("Por favor, agora digite seu saldo de vendas: "))

var salario = 1100
console.log("Salario fixo: R$", salario)

if  (valor_vendas<=5000 && valor_vendas>0){
    console.log("Bom saldo de vendas!!", nome)
    console.log("Lamento, mas seu saldo está abaixo ou igual a R$ 5000, não haverá bonus de comissão :(")
    console.log("Saldo: R$", valor_vendas+salario)
    console.log("Não desanime, você ainda conseguirá resultados melhores")
}

else if (5000<valor_vendas && valor_vendas<=10000){
    var percentual = valor_vendas - 5000
    percentual *= (5/100)
    console.log("Ótimo saldo de vendas!!", nome)
    console.log("Sua comissão é de: R$", percentual)
    console.log("Saldo: R$",(valor_vendas+percentual+salario))
    console.log("Frutos de esforço e bons resultados, continue assim")
    console.log("você conseguirá resultados ainda melhores")
}

else if (10000<valor_vendas && valor_vendas<=30000){
    var percentual = valor_vendas - 10000
    percentual *= (10/100)
    var percentual_bonus = 5000 * (5/100)
    console.log("Incrivel saldo de vendas!!", nome)
    console.log("Sua comissão é de: R$", percentual)
    console.log("Sua comissão bonus é de: R$", percentual_bonus)
    console.log("Saldo: R$", (valor_vendas+percentual+percentual_bonus+salario))
    console.log("Frutos de esforço e bons resultados, está mandando muito bem!!!")
}

else{
    var percentual = valor_vendas * (20/100)
    console.log("Sensacional o seu saldo de vendas!!", nome)
    console.log("Sua comissão é de: R$", percentual)
    console.log("Saldo: R$", (valor_vendas+percentual+salario))
    console.log("Frutos de esforço e bons resultados, você é o melhor!!!")
}
