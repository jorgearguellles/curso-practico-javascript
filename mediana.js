const lista1 = [1,2,5,3,7,5,8,670,7,98,9,8,10];



function mediana(lista){
  let listaOrdenada = lista.sort(function(a, b) {
    return a - b;
  });
  
  if(esPar(lista.length)){
   
    const indiceMitad = Math.floor(lista.length / 2);
    let elementoAnterior = listaOrdenada.find(element => element === lista[indiceMitad - 1])
    let elementoPosterior = listaOrdenada.find(element => element === lista[indiceMitad + 1])
    let med = (elementoAnterior+elementoPosterior)/2;
    return med
    
  } else {
    const indiceMitad = Math.floor(lista.length / 2);
    let elementoMitad = listaOrdenada.find(element => element === lista[indiceMitad])
    return elementoMitad;
  }
}


function esPar(numero) {
  if(numero % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}