const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Numero de pessoas: "))
const peixe = Number(prompt("Numero de peixes"))

let pagar
if(peixe <= pessoas){
    pagar = pessoas*20
}else{
    pagar = (pessoas*20)+((peixe-pessoas)*12)
}
console.log(`Valor a pagar ${pagar.toFixed(2)}`)