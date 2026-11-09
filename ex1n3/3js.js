const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};


const card =document.querySelector(".user-card");
const nom =card.querySelector(".card-title");
const email=card.querySelector(".card-email");
const role=card.querySelector(".card-role");

nom.textContent=user.nom
email.textContent=user.email
role.textContent=user.role