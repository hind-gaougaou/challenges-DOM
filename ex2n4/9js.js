const button=document.querySelectorAll(".color-btn")
const text=document.createElement("p")
text.id="info"
text.textContent="Vous survolez la couleur"
const color=document.createElement("span")
color.textContent=""
text.append(color)
document.body.append(text)
const nom=button.textContent

button.forEach(btn=>{

    btn.addEventListener("click",(e)=>{
        
        text.textContent=`Vous survolez la couleur ${e.target.textContent}`
    
        
    })

    

    
})