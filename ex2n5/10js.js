const counteur=document.createElement("h2")
counteur.id="counter"
counteur.textContent="0"
const button=document.createElement("button")
button.id="increment"
button.textContent="Incrémenter"
document.body.append(counteur,button)
let count=0
button.addEventListener("click",()=>{
    count++
    counteur.textContent=count
})