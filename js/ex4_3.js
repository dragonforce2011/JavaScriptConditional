const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const horabrasil = Number(frm.inHoraBrasil.value)
    let horafranc = horabrasil+5
    if(horafranc>24){
        horafranc = horafranc-24
    }
    resp.innerText = `o horário na frança é de ${horafranc.toFixed(2)}`
})