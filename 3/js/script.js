// Input in array
var arrayNum = [0,1,2,3];
var somma;
var iterazioni=5;

// Richiedi di inserire numeri
for (var i=0;i<iterazioni;i++){
  arrayNum[i] = prompt('Inserisci numero '+ (i+1));
}
// Potevi utilizzare il push sull'array!

// Stampa a video numeri inseriti
// for (var i=0;i<iterazioni;i++){
//   console.log(arrayNum[i]);
// }

//Somma for
somma = 0;
for (var i=0;i<iterazioni;i++){
  somma += parseInt(arrayNum[i]);
}
console.log('Somma for:' + somma);

// Somma while
somma = 0;
i = 0;
while(i<iterazioni){
  somma += parseInt(arrayNum[i]);
  i++;
}
console.log('Somma while:' + somma);
