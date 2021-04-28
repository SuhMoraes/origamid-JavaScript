// Function
function areaQuadrado(lado) {
 return lado * lado;  
}
console.log(areaQuadrado(5));

// Executando uma função
function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(total);

//Parâmetro e Argumentos
  //Peso e altura são parâmetros
 function imc(peso, altura) {
   const imc = peso / (altura ** 2);
   return imc;
 }

 document.write(imc(80, 1.63));// 80 e 1.63 são os argumentos
 console.log(imc(110, 1.63));// 110 e 1.63 são os argumentos

 //Parênteses executa a função
 function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); //Sem passar nenhum argumento retorna 'Você não gosta de nada'
console.log(corFavorita('verde')) ;

//Argumentos podem ser funções
  // Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function() {
  console.log('Clicou'); 
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima -> function()

//Return não definido
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc2(80, 1.80)); // retorna o imc  e undefined
console.log(imc(80, 1.80)); // retorna o imc

// Valores retornados
function  terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(90));

//Escopo
var totalPaises = 193;//
function faltaVisitar(paisesVisitados) { 
  return `Faltam visitar ${totalPaises - paisesVisitados} países`; 
  
}

console.log(faltaVisitar(30)); // Só será visível, pois  o var, está fora do escopo


// Escopo Léxico -> Funções consegue, acessar variáveis que foram criadas no cntexto pai

var profissao = "Programadora";

function dados() {
  var nome = 'Suhailah';
  var idade = 30;
  function outroDados(){
    var endereco = 'São Paulo';
    var idade = 31;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outroDados();
}

console.log(dados());

// Hosting
imc(80, 1.90); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}