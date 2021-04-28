let nome = 'Suhailah';

let altura = 1.63;

console.log(altura.toString());
console.log(altura.toFixed());

function areaQuadrado(lado){
  return lado * lado;
};

console.log(areaQuadrado.toString());
console.log(areaQuadrado.length);

let btn = document.querySelector('.btn');

btn.classList.add('Azul');
btn.innerText
btn.addEventListener('click', function(){
  console.log('Clicou')
})
