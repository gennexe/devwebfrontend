const nom = "Taalbi";
let message;

const heure = new Date().getHours();

if (heure > 18) {
  message = `Bonsoir Taalbi`;
} else if (heure > 12) {
  message = `Bon après-midi Taalbi`;
} else message = `Bonjour Taalbi`;

function saluer(variableNom) {
  const heure = new Date().getHours();
  if (heure >= 18) {
    return `Bonsoir ${variableNom}`;
  } else if (heure > 12) {
    return `Bon après-midi ${variableNom}`;
  } else return `Bonjour ${variableNom}`;
}

message = saluer("Rabah");

//     0            1             2         3
const mesprojets = ["Projet 1", "Projet 2", "Projet 3", "Projet 4", "Projet 5"];

// console.log(projets.length)
// console.log(projets)

// for (const projet of projets) {
//     console.log(projet)
// }

// console.log(`Vous avez ${projets.length} projets !`)

const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const menu = document.querySelector("nav ul");

burger.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});

function envoyer(event) {
  event.preventDefault();
  console.log(event.type);
  console.log(event.target);
}


const projets = [
  {
    titre: "Site de l'association",
    description: "Un site vitrine de trois pages.",
    lien: "https://asso.example.com",
  },
  {
    titre: "Site de l'ecole",
    description: "Un site interne de trois pages.",
    lien: "https://ecole.example.com",
  },
  {
    titre: "Site de l'usine'",
    description: "Un site pour l'usine de trois pages.",
    lien: "https://usine.example.com",
  },
];



function createProjects() {
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

createProjects()
