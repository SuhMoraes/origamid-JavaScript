var pessoa = {
  nome: 'Bia',
  idade: 30
}

console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.lados)
console.log(quadrado.area(5))
console.log(quadrado.perimetro(2))