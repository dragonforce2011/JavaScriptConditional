const prompt = require("prompt-sync")()
const velocidade = Number(prompt("Velocidade do condutor: "))
const permitido = Number(prompt("velocidade Permitida"))

let variacao = (permitido*0.20)+permitido
if(velocidade <= permitido){
    console.log(`Sem multa meu chapa`);
}else if(velocidade <= variacao){
    console.log(`multa leve chapa`);
}else{
    console.log(`Multa grave chapa`);
}
