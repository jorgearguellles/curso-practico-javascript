const lista1 = [
  1,2,3,1,2,3,4,2,2,2,1,6
];

function calcularModa(lista){
  //Funciones necesarias para el proceso de calcular la Moda
  const lista1Count = {}; 
  const contarRepeticion = function(elemento){
    lista1Count[elemento]? lista1Count[elemento] += 1 : lista1Count[elemento] = 1;
  };
  const ordenarMenorAMayor = function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
  };

  // Algoritmo para calcular la Moda de una lisa
  lista1.map(contarRepeticion);
    
  const lista1Array = Object.entries(lista1Count).sort(ordenarMenorAMayor);
  const moda = lista1Array[lista1Array.length - 1];

  const Lista = document.getElementById("Lista");
  Lista.innerText = "Esta es la lista ordenada:" + lista;

  const Moda = document.getElementById("Moda");
  Moda.innerText = `La Moda es el número ${moda[0]} y aparece ${moda[1]} veces` ;
};

