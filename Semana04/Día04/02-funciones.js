/** ¿Qué es una función?
 * Una función es un conjunto de solcuiones para podeer realizar tareas
 */

function nombreDeLaFuncion() {
    // Una vez declarado la función, 
    // todo el codigo que haga dentro de esta solo va a ejectuarse cuando se llame función

    console.log('Mi primera función');
    alert('Mi primera función');
}

function sumar(numero1, numero2) {
    const suma = numero1 + numero2;
    console.log('resultado:', suma); 
    //El console.log va a dentro ya que no puede revisar lo que hay dentro de las llaves [] a noser que este adentro
}

sumar(100, 20)

// TIPOS DE FUNCIONES
// Existen 3 tipos de funciones:
// - Función Declarativa
// - Función Expresiva o anonima
// - Función Arrow o función flecha

// Se antepone la palabra FUNCTION

// Función Declarativa
function suma(a, b, c) {
    return a+ b + c
}

console.log(10, 10, 10)

// Función Expresiva o anonima
let suma2 = function(a, b)
 {
    return a + b
 }

 console.log(20, 10)

 // Función Arrow o función flecha
const suma3 = (x, y) => {
    return x+y
}

console.log(suma3(20, 10))


// Función saludar al alumno

const saludar = (nombre, apellido) => {

    return 'Hola mi nombre es ' + nombre + 'y mi apellido es ' + apellido;

}

console.log(saludar('Guillermo', 'Sifuentes'));


// Función saludar al alumno, metodo 2

const saludar2 = (nombre, apellido) => {

    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`; // template string

}

console.log(saludar2('Guillermo', 'Sifuentes'));


const mostrarNombre=()=>{

    let elementoNombre = document.getElementById ('nombreUsuario');
    let title = document.getElementById('reemplazo');
    let mensaje = 'tu te llamas ' + elementoNombre.value;

    title.textContent = mensaje;

}

//<!--------------ejercicio 1------------->>

const mostrarTexto=() => {

    let elementoNombre2 = document.getElementById ('inputTexto');
    let title = document.getElementById('titulo');
    
    title.textContent = elementoNombre2.value;
}

//<!--------------ejercicio 2------------->>

const mostrarTexto2 = () => {

    const elementoNombre3 = document.getElementById('inputTexto2')
    let title = document.getElementById('titulo2')

    title.textContent = `Mi artistita favorito es ${elementoNombre3.value}`
}

//<!--------------Ejemplo 1------------->>
const comenzarAlarma = () => {
    setTimeout(tiempocumplido, 1000 * 3); // El "1000" son milisegundos y 1000 milisegundos equivalen a 1 segundo
}

const tiempocumplido = () => {
    alert('Se acabó el tiempo')
}

//<!--------------Ejemplo 2------------->>
let elementoSegundos = document.getElementById('tiempoElegido');
let elementoTextoAlarma = document.getElementById('textoAlarma');

const comenzarTiempo = () => {
    setTimeout(tiempoCumplido2, 1000 * elementoSegundos.value)
}

const tiempoCumplido2 = () => {
    elementoTextoAlarma.textContent = 'ENCENDIDO';
    elementoTextoAlarma.style.color = "green";
}