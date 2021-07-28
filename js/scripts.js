// Chiedi all'utente il suo nome
var nome = prompt("Qual è il tuo nome?");
// Chiedi all'utente il suo cognome
var cognome = prompt('Qual è il tuo cognome?');
// Chiedi all'utente il suo colore preferito
var colorePreferito = prompt('Qual è il tuo colore preferito?');
// Scrivi sulla pagine nomecognomecolorepreferito40
document.getElementById('risultato').innerHTML = nome + cognome + colorePreferito + 40;