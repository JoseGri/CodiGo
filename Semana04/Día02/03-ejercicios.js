/**
 * Ejercicio 3.6, pag 61
 */

const nroPersonas = 50;
let costoPlato = 0;
let total = 0;

if (nroPersonas > 200 && nroPersonas <= 300) {
    costoPlato = 85;
} else {
    if (nroPersonas > 300) {
        costoPlato = 75;
    } else {
        costoPlato = 95;
    }
}

total = costoPlato * nroPersonas;
console.log('Total a pagar para ' +nroPersonas + ' personas: ' +total);

/**
 * Ejercicio 3.8, pag 67
 */

console.log('---ejercicio 3.8---')

const nroAlumnos = 200
let costoBus = 0;

if (nroAlumnos > 100) {
    costoBus = nroAlumnos * 85;
} else {
    if (nroAlumnos >= 50 && nroAlumnos <= 99) {
        costoBus = nroAlumnos * 70;
    } else {
        if (nroAlumnos >= 30 && nroAlumnos <= 49) {
            costoBus = nroAlumnos *95
        } else {
            costoBus = 4000;
        }
    }
}

console.log('Total a pagar por ' + nroAlumnos + ': S/' + costoBus);