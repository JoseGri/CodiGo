//Ejercicio ejemplo 2.2 pág 30
const num1 = 15;
const num2 = 30;
const num3 = 45;
const num4 = 50;

const suma = num1 + num2 + num3 + num4;
const promedio = suma / 4;
console.log(promedio);


//Ejercicio 2.4 pág 43

const horas = 9;
const precioPorHora = 3;
let cobro = 0;
cobro = horas * precioPorHora;
console.log('total pagar: ', cobro);

//Ejercicio 2.13 pág 44
const sueldo = 1250;
const ahorroPorMes = 0.15;
const SemanasPorMes = 4;
const MesesPorAnio = 12;

AhorroTotal = (((+sueldo * +ahorroPorMes) * SemanasPorMes) * MesesPorAnio);

console.log('El Ahorro total es ', AhorroTotal);
