/*
Media aritmetica ponderada = [(n1*c1)+(n2*c2)+(nN*cN)] / (c1+c2+c3)
n = nota de la materia
c = creditos de la materia
 */

const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

// Multiplicar cada número de la lista por su peso
const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});
console.log("Multiplicación de cada Nota por sus Creditos correcpondientes:",notesWithCredit);

//Sumar todos los elementos del arreglo de elementos multiplicados por su peso
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);
console.log("Sumatoria del peso de cada Materia (Nota*Credito):",sumOfNotesWithCredit);

// Sumar todos los pesos (créditos)
const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);
console.log("Sumatoria de todos los criditos:",sumOfCredits);

// Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
console.log("Promedio U:",promedioPonderadoNotasConCreditos);
