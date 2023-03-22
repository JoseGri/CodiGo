// Ejercicio
/**
 * Dados 3 números enteros, evaluar el mayor
 */
//debugger;

const n1 = 81;
const n2 = 20;
const n3 = 80;

if (n1 > n2) {
    if (n1 > n3) {
        console.log('El mayor es', n1);
    } else {
        console.log('El mayor es', n3);
    }
} else {
    if(n2 > n3) {
        console.log('El mayor es', n2);
    } else {
        console.log('El mayor es', n3);
    }
}

/**
 * Ejercicio
 * Dado un año, ejm: 2020; evaluar si ese año es bisiesto.
 * 
 * Es bisiesto si:
 * Es divisible entre 4 y no entre 100 o que es divisible entre  400
 */

const year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, 'es bisiesto');
} else {
    console.log(year, 'no es bisiesto');
}