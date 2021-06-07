const input = require('prompt-sync')();

const numero = input("Digite o numero: ")
if (numero%2===0){
    console.log("par")
}
else{
    console.log("impar")
}