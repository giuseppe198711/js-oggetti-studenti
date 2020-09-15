// $(document).ready(function() {

   // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
   // Stampare a schermo attraverso il for in tutte le proprietà.
   // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
   // e stampare per ognuno nome e cognome
   // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
   // studente inserendo nell’ordine: nome, cognome e età.
   // Concentratevi prima sulla logica stampando il risultato in console, poi quando avete
   // terminato, provate ad utilizzare il template engine Handlebars e a stampare i risultati
   // direttamente nel documento HTML.

  var pagelle = [
  {
    "Cognome": "De Felice",
    "Nome": "Giuseppe",
    "Età": "20",
    "italiano": "8",
    "matematica": "7",
    "inglese": "6",
  },

  {
    "Cognome": "Filone",
    "Nome": "Stefano",
    "Età": "20",
    "italiano": "9",
    "matematica": "8",
    "inglese": "7",
  },

  {
    "Cognome": "Peca",
    "Nome": "Francesco",
    "Età": "20",
    "italiano": "7",
    "matematica": "9",
    "inglese": "8",
  }


 ];

  for (var i = 0; i < pagelle.length; i++) {
    console.log(pagelle[i]);
    for (var key in pagelle[i]) {
      console.log(key + " : " +pagelle[i][key]);
    }
  }
