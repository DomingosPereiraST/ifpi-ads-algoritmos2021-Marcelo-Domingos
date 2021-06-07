const input = require('prompt-sync')();

const a = Number(input("Digite o valor de a: "))
const b = Number(input("Digite o valor de b: "))
const c = Number(input("Digite o valor de c: "))

var delta = (b**2)-4*a*c;
if (a==0) {
    console.log("(a) deve ser diferente de zero")
}
else if (delta<0) {
    console.log("Sem raízes reais")
}
else {
    const x1 = (-b + Math.sqrt(delta)) / (2*a);
    const x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log(x1)
    console.log(x2)
}