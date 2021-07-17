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

//Reto: calcular la altura de un triángulo isósceles.

function calcularAlturaTriguloIsoceles(){
  const inputLado1 = document.getElementById("InputPrimerLado");
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("InputSegundoLado");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("InputBase");
  const base = inputBase.value;

  if(lado1 !== lado2){
    alert("El lado 1 no es igual al lado 2, por favor veririca que tenga el mismo valor ")
  } else {
    let calc = (lado1*lado1)-((base*base)/4);
    let altura = Math.sqrt(calc);
    alert(altura);
  }
}