var listaInvitati = ['Pippo','Pluto','Paperino','Minnie','Topolino'];
var utente = prompt('Inserisci il tuo nome');

// Controlla accesso
var trovato=false;
for( var i=0; i< listaInvitati.length && !trovato;i++){
  if (utente === listaInvitati[i]) {
    trovato=true;
  }
}

if (trovato){
  console.log('Ciao ' + utente + ", puoi entrare alla festa");
}else{
  console.log('Torna a casa');
}
