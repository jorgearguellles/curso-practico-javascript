const lista1 = [1,2,5,3,7,5,8,670,7,98,9,8,10];

function medianaDeLista(lista){
  
  let listaOrdenada = lista.sort(function(a, b) {
    return a - b;
  });

  let mediana;

  if(esPar(lista.length)){
    const indiceMitad = Math.floor(lista.length / 2);
    let elementoAnterior = listaOrdenada.find(element => element === lista[indiceMitad - 1]);
    let elementoPosterior = listaOrdenada.find(element => element === lista[indiceMitad + 1]);
    mediana = (elementoAnterior + elementoPosterior)/2;
    
  } else {
    const indiceMitad = Math.floor(lista.length / 2);
    mediana = listaOrdenada.find(element => element === lista[indiceMitad]);
  }

  const Lista = document.getElementById("Lista");
  Lista.innerText = "Esta es la lista ordenada:" + listaOrdenada;

  const Mediana = document.getElementById("Mediana");
  Mediana.innerText = "La mediana es:" + mediana;
}

function esPar(numero) {
  if(numero % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}