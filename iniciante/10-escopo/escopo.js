'use strict'

//Escopo de função
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Variável Global (erro)
function mostrarCarro() {
  carro = 'Vectra';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

//ESCOPO DE FUNÇÃO (PAI)
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

//ESCOPO DE BLOCO
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

//VAR VAZA O BLOCO
if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined

//CONST E LET NO LUGAR DE VAR
if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined

//{} CRIA UM BLOCO
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined

//FOR LOOP
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i * 10); // 10

// FOR LOOP COM LET
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

//CONST
const mes = 'Dezembro';
//mes = 'Janeiro'; erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
//data = 'Janeiro'; -> erro



