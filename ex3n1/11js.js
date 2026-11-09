const pargraph=document.querySelector("#text");
const btn=document.querySelector("#style-btn");

btn.addEventListener("click",(e)=>{

    pargraph.textContent="Ce texte va changer de style"
    pargraph.style.color="red"
    pargraph.style.fontSize="100px"

})