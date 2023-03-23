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

/**
 * Ejercicio 3.9, pag 67
 */

console.log('---ejercicio 3.9---');

const planA = 1200;
const planB = 950;
let totalPagar = 0;
const planElegido = prompt('¿Qué plan desea? Escriba A (plan A) o B (plan B)');
const alcohol = confirm('¿Toma alcohol?');
const lentes = confirm('¿Usted usa lentes?');
const enfermedad = confirm('¿Padece usted de alguna enfermedad?');
const edad = +prompt('Ingrese su edad');
let precioBase = 0;

if (planElegido === 'a') {
    totalPagar = planA;
} else {
    totalPagar = planB;
}
totalPagar = precioBase;

if (alcohol) {
    totalPagar = totalPagar + 0.01 * precioBase;
}
if (lentes) {
    totalPagar = totalPagar + 0.05 * precioBase;
}
if (enfermedad) {
    totalPagar = totalPagar + 0.05 * precioBase;
}

if (edad > 40) {
    totalPagar = totalPagar + 0.02 * precioBase;
} else {
    totalPagar = totalPagar + 0.01 * precioBase;
}
    
console.log('Su cuenta joven: ' + totalPagar + ' soles')