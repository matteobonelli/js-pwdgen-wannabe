const lastNumbers = 21;
let nome = prompt("Inserisci il tuo nome");
console.log(nome);
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);
let colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);
let passwordGenerata = nome + cognome + colorePreferito + lastNumbers;
console.log(passwordGenerata)
document.getElementById("password").innerHTML = `La tua password è: <h2> ${passwordGenerata}</h2>`;