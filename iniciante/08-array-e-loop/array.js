let provincias = ['Alberta','Toronto','Quebéc'];



console.log(provincias[0]);
console.log(provincias[2]);
console.log(provincias.pop());
console.log(provincias.push('British Columbia'));
console.log(provincias.length);

for(let numero = 0; numero <= 5; numero++){
  console.log(numero);
}

//Break
for (let city = 0; city < 3; city++){
  console.log(provincias[city]);
  if(provincias[city] === 'Toronto'){
    break;
  }
}

//forEach
provincias.forEach(function(city, index, array){
  console.log(city,index, array)

})