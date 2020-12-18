
var par1 = prompt('Inserisci parola 1');
var par2 = prompt('Inserisci parola 2');

// Confronta dati
if (par1.length > par2.length){
  console.log('Dato 2: ' + par2);
  console.log('Dato 1: ' + par1);
}else if (par1.length < par2.length){
  console.log('Dato 1: ' + par1);
  console.log('Dato 2: ' + par2);
}else{
  console.log('Le parole hanno la stessa lunghezza');
  console.log('Dato 2: ' + par2);
  console.log('Dato 1: ' + par1);
}
