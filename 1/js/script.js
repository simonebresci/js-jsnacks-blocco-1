

// Chiedi input
var n1 = prompt('Inserisci numero 1');
var n2 = prompt('Inserisci numero 2');
console.log("Dato 1 vale:" + n1);
console.log("Dato 2 vale:" + n2);



// Controllo isNan
if ( isNaN(n1) || isNaN(n2) ) {
  console.log('Dati inseriti non validi');
}else{

  // Confronta dati
  if (n1>n2){
    console.log('Dato 1 è il maggiore ' + n1);
  }else if (n1<n2){
    console.log('Dato 2 è il maggiore ' + n2);
  }else{
    console.log('I dati inseriti sono uguali');
  }

}
