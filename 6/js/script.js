var n;

do{
  n = parseInt(prompt('Fino a che numero vuoi calcolare le potenze al cubo?'));
}while(n > 10)

var risultato = 0;
for(var i = 1; i <= n; i++){
  risultato = Math.pow(i, 3);
  console.log(risultato);
}
