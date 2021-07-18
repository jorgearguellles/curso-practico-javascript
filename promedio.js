const lista1 = [100, 200, 300, 500];

//Calcular la media aritmetica

function mediaAritmetica(lista){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = lista1.reduce(reducer);
  let cantida = lista1.length;
  return total/cantida;
}

let test = mediaAritmetica(lista1);
console.log(test)
