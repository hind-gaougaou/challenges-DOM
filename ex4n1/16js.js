const paragraph=document.createElement("p")
  paragraph.textContent="Utilisez document.createElement('p') pour générer un nouveau paragraphe. Ajoutez-y du texte, puis utilisez appendChild pour l'insérer à la fin du document.body. L'élément HTML d'origine ne doit pas exister dans le fichier HTML."
document.body.appendChild(paragraph)