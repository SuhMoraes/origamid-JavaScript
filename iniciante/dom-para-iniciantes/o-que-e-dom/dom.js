


console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

const href = window.location.href;

console.log(href); //Retorna o href da página

if(href === 'http://localhost:5500/o-que-e-dom/'){
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');


/* Node */
const titulo = document.querySelector('p');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callbackh1(){
  console.log('Clicou em ', h1Selecionado.innerText)
}
titulo.addEventListener('click', callbackh1);
// ativa a função callback ao click no titulo
