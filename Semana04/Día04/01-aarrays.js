/** Arrays (arreglos)
 * ¿Cuantos datos recibir un Array?
 * Conjunto de datos
 * Como declaramos un array?
 * Es muy parecido a una variable
 */

let nombre = 'Guillermo';
let productos = ['Guillermo', 'Gianroy', "laptop", 1200, true];
console.log(nombre);
console.log(productos);

//No usar o se colgará ya que repetirá la operación miles de veces
// for (let i=0; i > productos.length; i++) {
//    console.log(productos[i]);
// }

// ¿Cómo capturar un dato de un arreglo?
console.log(productos[2]);

// ¿Cómo reemplazar el dato de el array?
productos[3] = 2000;

//¿Cómo puedo saner cuantos elementos hay en un array?
console.log('Cantidad de productos: ', productos.length);

const pi = 3.141633333;