   // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
   // Stampare a schermo attraverso il for in tutte le proprietà.

   // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
   // e stampare per ognuno nome e cognome

   // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
   // studente inserendo nell’ordine: nome, cognome e età.
   // Concentratevi prima sulla logica stampando il risultato in console, poi quando avete
   // terminato, provate ad utilizzare il template engine Handlebars e a stampare i risultati
   // direttamente nel documento HTML.



   // creo l oggetto pagella e lo descrivo con nome cognome e età
   var pagella = {
     "cognome": "De Felice",
     "nome": "Giuseppe",
     "eta": "33",
     "italiano": "7",
     "matematica": "7",
     "inglese": "7",
   };

   // attaraverso il ciclo for stampo a schermo l elemento pagella in tutte le sue proprietà
   for (var key in pagella) {
    console.log(key + ":" + pagella[key]);
   }

  // creo un array di oggetti di studenti (pagelle) lo faccio ciclare su tutti gli studenti e faccio
  // il console log di solo di nome e cognome
  var pagelle = [
  {
    "cognome": "De Felice",
    "nome": "Giuseppe",
    "eta": "33",
    "italiano": "7",
    "matematica": "7",
    "inglese": "7",
  },

  {
    "cognome": "Filone",
    "nome": "Stefano",
    "eta": "24",
    "italiano": "9",
    "matematica": "7",
    "inglese": "8",
  },

  {
    "cognome": "Peca",
    "nome": "Francesco",
    "eta": "26",
    "italiano": "5",
    "matematica": "8",
    "inglese": "9",
  }
 ];

  for (var i = 0; i < pagelle.length; i++) {

    for (var key in pagelle[i]) {
      if (key == "cognome" || key == "nome" ) {
        console.log(pagelle[i][key]);
      }
    }
  }

  // chiedo allo studente di inserire il suon nome il suo cognome e la sua eta e lo vado a inserire
  // nelle variabili
  var nomeUtente = prompt("inserisci il tuo nome");
  var cognomeUtente = prompt("inserisci il tuo cognome");
  var etaUtente = parseInt(prompt("inserisci la tua eta"));

  var utente = {
    "nome": nomeUtente,
    "cognome": cognomeUtente,
    "eta" : etaUtente,
  }

  console.log(utente);
