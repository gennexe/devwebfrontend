export function afficherProjets(projets) {
  const section = document.querySelector(".projets");
  for (const projet of projets) {
    const article = document.createElement("article");

    const titre = document.createElement("h3");
    const description = document.createElement("p");
    const lien = document.createElement("a");

    titre.textContent = projet.titre;
    description.textContent = projet.description;
    lien.href = projet.lien;
    lien.textContent = "Voir";

    article.appendChild(titre);
    article.appendChild(description);
    article.appendChild(lien);

    section.appendChild(article);
  }
}



export const afficher = (titreF, anneeF) => {
  console.log(titreF);
  console.log(anneeF);
};




// const nouveauProjet = {
//   titre: "usine",
//   description: "Un site pour l'usine de trois pages.",
//   annee: 2023,
//   lien: "https://usine.example.com",
// };

// const nouveauProjetModifie = {...nouveauProjet, titre : "dentiste"};


// const copie = [...projets];

// copie.push(nouveauProjet);

// const copieOptimise = [...projets, nouveauProjet];
// spread

// console.log(copie);
// console.log(projets);