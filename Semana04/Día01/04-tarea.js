// Tarea pag 43 y 44

//2.1
const base = 15;
const altura = 10.5;

const area = (+base * +altura)/2

console.log('El área del triangulo es', area);


//2.3
/*let BirthDate = 0, CurrentYear = 0;

BirthDate = parseInt(prompt('Ingrese año de nacimiento'));
CurrentYear = parseInt(prompt('Ingrese año actual'));

const edad = +CurrentYear - +BirthDate 

console.log('Su edad es ', edad);*/

//2.7
const costoPorKM = 2;
const KMporRecorrer = 500;

const costoDelBoleto = +costoPorKM * +KMporRecorrer;

console.log('El costo del boleto será', costoDelBoleto);

//2.8
const precio = 100;
const desc = 0.20;
const IVA = 1.15;

const PrecioconDescuento = +precio - (+precio * +desc);
const PrecioFinal = +PrecioconDescuento * IVA;

console.log('El precio con descuento es de', PrecioconDescuento, 'soles', 'y el precio final es de', PrecioFinal, 'soles')

//2.11
const costoPorKW = 0.75;
const consumo = 500;

const totalApagar = +costoPorKW * +consumo;

console.log('El total a pagar será de', totalApagar);