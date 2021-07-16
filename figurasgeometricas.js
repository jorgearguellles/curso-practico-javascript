/**
 * 
 * CUADRADO -----
 * Area = la multiplicaciñon un aldo por otro aldo = L*L
 * Perimetro  = la suma de cada lado = L*4
 * 
 * TRIANGULO -----
 * Perimetro = l1+l2+l3
 * Area = (Base * Altura)/2
 * 
 * CIRCULO ----
 * Perimetro = Circunferencia = diametro*PI
 * Area = Radio^2 * PI
 * 
 * */ 


//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado valen:" + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Lado Uno:"+ladoTriangulo1+"cm\n", "Lado Dos:"+ladoTriangulo2+"cm\n", "Base del Triangulo:"+baseTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El Area del triauglo mide: "+alturaTriangulo)


console.groupEnd();




