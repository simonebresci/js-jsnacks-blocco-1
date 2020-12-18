var numero;
var datoNonValido;
do{
  datoNonValido = false;
  numero = prompt('Inserisci numero di 4 cifre');
  if( numero.length != 4){
    console.log ('Dato non valido.');
    datoNonValido = true;
  }
}while(datoNonValido);


// Somma caratteri
var somma=0;
for(var i=0; i<numero.length; i++){
  somma += parseInt(numero[i]);
}
console.log(somma);
