/*console.log(promedioDosNumeros(2, 4));

function promedioDosNumeros(num1, num2) {
    return (num1 + num2) /2;
}*/

//------------------------------//

/*const calcularEdad = (anioNacimiento) => {
    return 2023 - anioNacimiento
};

console.log(calcularEdad(2000));*/

//------------------------------//

/*const calcularEdad2 = (anioNacimiento) => 2023 - anioNacimiento

console.log(calcularEdad(2000));*/

// Concatenar

/*const sumarNNumeros = (...numeros) => {
    let suma =0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma;
}

console.log(sumarNNumeros(2, 4, 1, 1));*/

/*const concatenarCadenas = (...cadenas) => {
    return cadenas.join('');
}

console.log(concatenarCadenas('Hola ','Mundo ','JS ','2023 ','CodiGo '));*/



// Ternarios

/*const ternarios = (num1, num2) => {
    return num1 !== num2 ? 'Son iguales' : 'Sin diferentes';
}

console.log(ternarios(13 ,27));*/

const ternarios2 = (acepto) => {
    return acepto ? 'acepto' : 'No acepto';
}

console.log(ternarios2(false))