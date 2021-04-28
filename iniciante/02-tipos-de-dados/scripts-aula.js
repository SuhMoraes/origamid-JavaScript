 
 let nome = 'Suhailah';
 console.log(typeof nome);

 let idade = 30;
 console.log(typeof idade);

 let time = null;
 console.log(typeof time);

 let simbolo = Symbol();
 console.log(simbolo);

 //let nome = 'Suhailah';
 let sobrenome = 'Alves de Moraes';

 // Concatenando sem espaço
 let nomeCompleto = nome + sobrenome;

 console.log(nomeCompleto);

 // Concatenando com espaço
 let nomeCompleto2 = nome + ' ' + sobrenome;

 console.log(nomeCompleto2);


  // Concatenando String e Number
  let gols = 1000;
  let frase = 'Romário fez ' + gols + ' gols';

  console.log(typeof frase);

// Template String
      gols = 1000;
  var frase1 = 'Romário fez ' + gols + ' gols';
  var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

