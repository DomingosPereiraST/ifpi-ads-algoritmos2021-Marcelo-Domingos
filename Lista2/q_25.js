const input = require('prompt-sync')();

const senha = input("Digite a senha: (1234) ")

if (senha=="1234"){
    console.log("ACESSO PERMITIDO")
}

else {
    console.log("ACESSO NEGADO")
}
