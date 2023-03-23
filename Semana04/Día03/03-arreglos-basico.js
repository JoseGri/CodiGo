const libros = ['HP1', 'HP2', 'HP3'];
const notas = [7, 5, 3, 13, 6, 12];

console.log('notas ' + notas);
console.log('suma de la 1ra con la última ', notas [0] + notas [5]);
// reasignación de un elemento
notas [4] = 20;
console.log('notas nuevas', notas);

// propiedades

// . LENGTH indica cuantas posiciones hay, se usa cuando no sabes cuantas posisiones hay (cuando son muchísimas)
console.log('Cantidad de libros');
console.log(libros.length);

console.log('Cantidad de notas');
console.log(notas.length);

// .PUSH agrega una nueva posición con el valor indicado
libros.push('Aves sin nido');
console.log(libros);


// recorriendo un arreglo
let acumulador = 0;

for (let i = 0; i < notas.length; i++) {
    acumulador = acumulador + notas[i];
}
console.log('acumulador', acumulador);

//ejercicio:
// ¿Cuántos números del arreglo de notas son pares?
// ¿Cuántos números del arreglo de notas son impares?

let pares = 0;
let impares = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log('Total pares', pares);
console.log('Total impares', impares);

// Ejercicio mejorado RETO
// Al enunciado anterior imprimir también que números son pares y que números son impares
// OJO imprimir al final, NO en cada iteración
