// Un objeto puede tener funciones como atributos

const vehiculo = {
    marca: 'Audi',
    modelo: 'Q5',
    mantenimientos: [
        {
            fecha: '05/05/23',
            kilometraje: 17000
        },
        {
            fecha: '05/05/24',
            kilometraje: 27000
        }
    ],
    imrpimirMarcaYModelo: function () {
        console.log('this', this);
        console.log('marca', this.marca);
        console.log('modelo', this.modelos);
    }
};

console.log('vehiculo', vehiculo);
vehiculo.imrpimirMarcaYModelo();

// Imprimir segundo mantenimiento
console.log('segundo mantenimiento', vehiculo.mantenimientos[1]);

// NO COPIAR OBJETOS DE LA SIGUIENTE MANERA
const vehiculo2 = vehiculo;
vehiculo2.modelo = 'q3';

console.log('vehiculo1', vehiculo);
console.log('vehiculo2', vehiculo2);

// Función que crea objetos
function creadorDeVehiculos(pMarca, pModelo, pAnio, pMantenimientos) {
	const vehiculoGenerico = {
		marca: pMarca,
		modelo: pModelo,
		anio: pAnio,
		mantenimientos: pMantenimientos
	};
	return vehiculoGenerico;
}

// funcion creadora de mantenimientos con los siguientes atributos
/**
 * fecha: ""
 * kilometraje: 0
 * aceite: false
 */

// function mantenimiento (pFecha = '', pKilometraje = 0, pAceite = false) {
//     return {
//         fecha: pFecha,
//         kilometraje: pKilometrae,
//         aceite: 
//     }
// }



//------------------------------------

const mazdaCX3 = creadorDeVehiculos('Mazda', 'CX3', 2023, []);
const bmwX4 = creadorDeVehiculos('BMW', 'X4', 2021, []);

console.log('mazda', mazdaCX3);
console.log('bmw', bmwX4);