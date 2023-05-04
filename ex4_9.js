const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite o numero"))

if(numero % 2 === 0){
    console.log(`o numero ${numero} é par`)
}else{
    console.log(`o ${numero} é impar`)
}