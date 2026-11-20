// import { afficher } from "./projets.js";

import projets from "../data/projets.json" with { type: "json" };
import { afficherProjets } from "./projets.js";
// console.log(projets);

async function chargerProjets() {
  try {
    const reponse = await fetch("https://api.github.com/users/octocat");
    const data = await reponse.json();
    console.log(data);
    const section = document.querySelector(".projets");
    section.textContent = data.name;
    // afficherProjets(projets);
  } catch (erreur) {
    console.error(erreur);
    // const section = document.querySelector(".projets")
    // section.textContent = "Le chargement des données a échoué"
  }
}

chargerProjets();

const annees = [2020, 2021, 2022, 2023, 2026];
const [premiereAnnee, deuxiemeAnnee] = annees;

// afficher(premiereAnnee, deuxiemeAnnee);

// const nom = "Taalbi";
const heure = new Date().getHours();

// if (heure > 18) {
//   message = `Bonsoir Taalbi`;
// } else if (heure > 12) {
//   message = `Bon après-midi Taalbi`;
// } else message = `Bonjour Taalbi`;

function saluer(variableNom) {
  const heure = new Date().getHours();
  if (heure >= 18) {
    return `Bonsoir ${variableNom}`;
  } else if (heure > 12) {
    return `Bon après-midi ${variableNom}`;
  } else return `Bonjour ${variableNom}`;
}

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

// burger.addEventListener("click", function () {
//   menu.classList.toggle("ouvert");
// });

function envoyer(event) {
  event.preventDefault();
  console.log(event.type);
  console.log(event.target);
}

// const { titre, annee } = projet;

// afficher(titre, annee)

const recents = projets.filter((p) => p.annee >= 2025);

const projetSiteEcole = projets.find((p) => p.titre.includes("vitrine"));

const titresAvecMap = projets.map((p) => p.titre);

// les titres des projets recents

const titresProjetsRecents = projets
  .filter((p) => p.annee >= 2025)
  .map((p) => p.titre);

// console.log(titresProjetsRecents);

const titres = [];

for (const p of projets) {
  titres.push(p.titre);
}

const formulaire = document.querySelector("form");
const button = document.querySelector(".btn-sombre");
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const message = document.querySelector("form p");

// email.addEventListener("input", function () {
//   email.classList.remove("error");
//   message.classList.add("message-erreur-empty");
// });

// formulaire.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (email.value.trim() === "" || !email.value.trim().includes("@")) {
//     message.classList.remove("message-erreur-empty");
//     email.classList.add("error");
//     message.textContent = "le champ email doit etre saisi";
//     return;
//   }

//   message.textContent = "";
//   console.log("le formulaire a bien été envoyé !");
// });

// createProjects()
