// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//  oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo un oggetto che descriva uno studente
var studente = {
  "nome": "Andrea",
  "cognome": "Novello",
  "età": "26"
};
// console.log(studente);
// stampo a schermo le proprietà dell'oggetto
for (var proprieta in studente) {
  // mi creo la variabile che mi salva lo stato dell html
  var dati = document.getElementById('mioid').innerHTML
  document.getElementById('mioid').innerHTML = dati +  "<li>" + studente[proprieta] + "</li>";
  // console.log(studente[proprieta]);
}

// creo un array di oggetti di studenti
var studenti = [{
  "nome": "Chiara",
  "cognome": "Cancelmo",
  "età": "25",
},
{
  "nome": "Mario",
  "cognome": "Rossi",
  "età": "30",
},
{
  "nome": "Luigi",
  "cognome": "Giuliani",
  "età": "23",
},
{
  "nome": "Giovanni",
  "cognome": "Di Francesco",
  "età": "31",
},
{
  "nome": "Lucia",
  "cognome": "Bianchi",
  "età": "20",
}]
// ciclo su tutti gli studenti e stampo nome e cognome 
for (var i = 0; i < studenti.length; i++) {
 console.log(studenti[i].nome + " " + studenti[i].cognome);
}


// creo un oggetto studenteUtente
var studenteUt = {};
// chiedo all'utente di inserire nome cognome e età
var nomeUtente = prompt("insersci il tuo nome");
var cognomeUtente = prompt("inserisci il tuo cognome");
var etaUtente = parseInt(prompt("inserisci i tuoi anni"))

// poi inserisco nell'oggetto studenteUt i dati inseriti dall'Utente
studenteUt.nome = nomeUtente;
studenteUt.cognome = cognomeUtente;
studenteUt.età = etaUtente;

console.log(studenteUt);
