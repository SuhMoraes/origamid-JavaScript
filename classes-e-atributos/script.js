const imgs = document.querySelectorAll('img');
  
  imgs.forEach(function(item, index, array){
    //console.log(item, index, array)
  });

  const titulos = document.getElementsByClassName('titulo');
  const titulosArray = Array.from(titulos);
    //console.log(titulos);
    //console.log(titulosArray);

  
  titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array);
  });

  const imgs = document.querySelectorAll('img');

   imgs.forEach((item) => {
    console.log(item);
});

const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// Return
const imgs = document.querySelectorAll('img');

imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));


