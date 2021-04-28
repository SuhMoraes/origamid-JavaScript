// Existem dois valores booleanos false ou true;
var possuiGraduacao = true;
var possuiDoutorado = false;

//Condição IF e Else
 var possuiGraduacao = false;

 if(possuiGraduacao){
   console.log("Tem graduação!");
 } else {
   console.log("Não tem graduação!");
 }

 // Se o If não for verdadeiro, ele testa o else if
 var possuiGraduacao =  false;
 var possuiDoutorado = false;

 if(possuiDoutorado) {
   console.log("Possui graduação e doutorado");
 } else if (possuiGraduacao){
   console.log('Possui graduação, mas não possui doutorado');
 } else{
  console.log (' Não possui graduação');
 }

 //Operador Lógico de Negação
 if(!possuiGraduacao){
    console.log("Possui!");
 } else{
   console.log("Não possui!");
 }

 console.log(!null);//true
 console.log(!!null);//false

 // Truthy
console.log(!true) // false
console.log(!1) // false
console.log(!'') // true
console.log(!undefined) // true
console.log(!!' ') // true
console.log(!!'') // false

//// Falsy
console.log(false)
console.log(0) // ou -0
console.log(NaN)
console.log(null)
console.log(undefined)
console.log('') // ou "" ou ``
