// OBJETOS

const persona = {
    nombre: 'yuki',
    dni: '12345678',
    telefono: '999999999',
    idiomas: ['Español', 'Ingles', 'Frances'] // se usa corchetes en caso sean varios datos
};

console.log('telefono', persona.telefono); // devuelve un atributo
console.log('idiomas', persona.idiomas);

// Inyectando un nuevo dato

persona.idiomas.push('Aymara'); // Push agregara ese nuevo idiomta a idiomas
console.log('persona actualizada', persona);

// Modificando un dato

persona.telefono = '888888888';
console.log('persona actualizada', persona);

// Agregando un nuevo atributo
// NO se recomienda agregar nuevos atributos a un objeto (solo editar los existentes), 
// ya deben tenerlos todos desde el inicio.

persona.direccion = {};
persona.direccion.calle = 'Lima';
persona.direccion.distrito = 'Miraflores';
persona.direccion.ciudad = 'Arequipa';

console.log('persona', persona);

// Agregando otro atributo a la persona

persona.estudios = {
    primaria: 'Escuela de los Andes',
    secundaria: 'Colegio Nuestra Senora de los Andes',
    superior: 'Universidad Mayor de los Andes'

};

console.log('persona actualizada', persona);