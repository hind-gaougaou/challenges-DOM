

const text=document.querySelector("#todo-input")
const ajoute=document.getElementById
("add-btn")

const liste=document.createElement("ul")
liste.id="todo"

const evenement1=document.createElement("li")
evenement1.textContent="Apprendre le DOM"
const evenement2=document.createElement("li")
evenement2.textContent="Pratiquer les événements"

const newliste=document.createElement("li")
liste.append(evenement1,evenement2,newliste)
document.body.append(liste)


ajoute.addEventListener("click",(e)=>{
    
    newliste.textContent=text.value;
})
