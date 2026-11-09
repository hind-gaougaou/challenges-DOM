const button = document.createElement("button")
button.textContent = "Afficher/Masquer les détails"
button.id = "toggle-btn"

const detail = document.createElement("div")
detail.id = "details"
detail.className = "card"
detail.style = "display:none"

const text = document.createElement("p")
text.textContent = "Voici les détails cachés. Le DOM permet de les révéler sans recharger la page."
detail.append(text)

document.body.append(button,detail )
button.addEventListener("click", (e) => {
    button.textContent = "Afficher/Masquer les détails"
      detail.style="display:block"
})