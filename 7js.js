const buttonajoute=document.createElement("button");
buttonajoute.id="btn"
buttonajoute.className="button-ajoute"
buttonajoute.textContent="Cliquez-moi"


document.body.append(buttonajoute)

buttonajoute.addEventListener("click",(event)=>{
     event.target.textContent="C'est cliqué !"
})
