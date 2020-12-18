var arrayDisp = [];
var numero;
var output = '';
for( var i = 0; i < 6; i++ ){
  numero = parseInt(prompt('inserisci un numero'));

  if (!isNaN(numero)) {
    if ((numero % 2) === 1) {
      arrayDisp.push(numero);
      output += ' ' + numero;
    }
  }
}

console.log(output);
