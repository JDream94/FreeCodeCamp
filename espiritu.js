var arreglo = ["hola", "juan", "carlos", "como", "estas", "chupapijas", "?"];
var frase = "";
/* arreglo.forEach((palabra) => {
  frase += palabra + " ";
}); */

for (var index = 0; index < arreglo.length; index++) {
  frase += arreglo[index] + " ";
}
console.log(frase);
