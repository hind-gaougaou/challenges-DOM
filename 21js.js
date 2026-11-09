  
  
  const ligne=document.querySelector(".row")
  const output=document.querySelector("#output")
  
  const text =document.createElement("input");
text.type="text"
text.id="name-input"
text.placeholder="Écrivez quelque chose"


const btnvalid=document.createElement("button")
btnvalid.id="validate-btn"
btnvalid.textContent="Valider"

ligne.append(text,btnvalid)

btnvalid.addEventListener("click",(e)=>{
   output.textContent=text.value;

})

