 /* CUADRADO -----
 * Area = la multiplicaciñon un aldo por otro aldo = L*L
 * Perimetro  = la suma de cada lado = L*4
 */
function perimetroCuadrado(lado) {
  let result = lado*4;
  return result+" cm";
}

function areaCuadrado(lado){
  return lado*lado;
} 

/*TRIANGULO -----
 * Perimetro = l1+l2+l3
* Area = (Base * Altura)/2
*/
function perimetroTriangulo(lado1,lado2,base){
  return lado1+lado2+base;
} 

function areaTriangulo(base, altura){
  let cal = (base*altura)/2
  return cal;
}

/* 
* CIRCULO ----
* Perimetro = Circunferencia = diametro*PI
* Area = Radio^2 * PI
* */

function calcDiametro(radio){
  return radio*2;
}
function perimetroCirculo(radio){
  const diametro = calcDiametro(radio)
  return diametro * Math.PI;
} 

function areaCirculo(radio){
  return (radio*radio) * Math.PI;
} 


//Interactuar con el HTML

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value) 
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = areaCuadrado(value) 
  alert(perimetro);
}