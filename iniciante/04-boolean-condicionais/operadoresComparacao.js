// Operadores de comparação
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(20 < 10); // false
console.log(10 <= 10) // true
console.log(10 >= 11); // false

// Operador de comparação 
console.log(10 == '10'); // true
console.log(10 == 10); // true
console.log(10 === '10'); // false
console.log(10 === 10); // true
console.log(10 != 15); // true
console.log(10 != '10');// false
console.log(10 !== '10'); // true


//Operadores Lógicos &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log('Gato' && 'Cão'); // 'Cão' -> retorna o último valor verdadeiro.
console.log(5 - 5) && (5 + 5); // 0 -> retorna o valor false
console.log('Gato' && false); // false -> retorna o valor false
console.log(5 >= 5) && (3 < 6); // true


//Exemplo:
var condicional =  (5 + 8) && (5 + 6)
if(condicional){
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// Operadores Lógicos ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log('Gato' || 'Cão'); // 'Gato'
console.log((5 - 5) || (5 + 5)); // 10
console.log('Gato' || false); // Gato
console.log((5 >= 5) || (3 < 6)); // true

//Exemplo:
var condicional2 = (5 + 8) || (5 + 6) && (10 - 2);
console.log(condicional2);

// Switch 

var corFavorita = 'Amarelo';

switch (corFavorita) {
  case 'Azul':// caso seja verdadeira
    console.log('Olhe para o céu.');
    break; // Quebra se a condição for verdadeira
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default: // Quando nenhuma das opções sejam verdadeiras.
    console.log('Feche os olhos');
}
