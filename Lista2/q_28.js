const input = require('prompt-sync')();

const x = input("Digite o valor de X: ")
const y = input("Digite o valor de Y: ")

function area(base, altura) {
    console.log(base*altura)
}

area(x,y)