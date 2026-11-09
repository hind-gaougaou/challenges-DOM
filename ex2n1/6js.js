
const buttonajoute=document.createElement("button");
const btn_container = document.getElementById("btn-alert")
buttonajoute.id="btn"
buttonajoute.className="button-ajoute"
buttonajoute.textContent="Cliquez-moi"


btn_container.append(buttonajoute)
buttonajoute.addEventListener("click",(e)=>{

    alert("merci");
})
