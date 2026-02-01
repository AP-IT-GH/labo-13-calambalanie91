"use strict";

// Vraag om invoer via prompt
let voornaam = prompt("Wat is je voornaam?");
let achternaam = prompt("Wat is je achternaam?");
let leeftijdInput = prompt("Wat is je leeftijd?");

// Zet leeftijd om naar een geheel getal
let leeftijd = parseInt(leeftijdInput);

// Controleer of voornaam en achternaam zijn ingevuld
if (!voornaam || !achternaam) {
  console.log("Vul zowel voornaam als achternaam in!");
}
// Controleer of leeftijd binnen het gewenste bereik ligt
else if (isNaN(leeftijd) || leeftijd < 12 || leeftijd > 60) {
  console.log("U behoort niet tot de gezochte leeftijdsklasse!");
}
// Alles is geldig, toon de boodschap
else {
  console.log(`Welkom ${voornaam} ${achternaam}, leeftijd ${leeftijd}.`);
}
