const alumnos = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis'];

// Método for
/*for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
}*/

// Método forEach, retorna todo lo que se desee, a diferencia que con el For que retorna por rangos,
// en el forEach puede retornar uno o ciertos datos (como tomandolos con pinzas)
// En el forEach el "index" va siempre como 2do valor 
/*alumnos.forEach((alumno, index) => {
    console.log(alumno, index)
});*/


// Método map, retorna a todos y se le puede agregar algo, 
// por ejemplo a todos los que se llamen Pedro, retornarlos como Pedro Perez
/*const nuevosAlumnos = alumnos.map((alumno, index) => {
    if (alumno === "Pedro") {
        return alumno + "" + index;
    } else {
        return alumno;
    }
});

console.log(nuevosAlumnos);*/

// Otro método
/*const nuevosAlumnos = alumnos.map((alumno, index) => {
    return `${alumno} ${index}`;
});

console.log(nuevosAlumnos);*/

// Método Filter, retorna la lista menos el alumno en la posición 0
/*const alumnosSinMaria = alumnos.filter((alumno, index) => {
    return index !== 0;
});

console.log(alumnosSinMaria)*/

// Método find, retorna solo 1 valor, no la lista
/*const alumnoEncontrado = alumnos.find((alumno, index) => {
    return alumno === 'Maria';
});

console.log(alumnoEncontrado)*/

// Método findIndex
/*const indexAlumno = alumnos.findIndex((alumno) => {
    return alumno === 'Jose';
});

console.log(indexAlumno);*/


// Método Some, comprueba si el valor existe y retorna un booleano (true o false), 
// Ejem: Existe el valor alumno Jose
const existeAlumno = alumnos.some((alumno) => {
    return alumno === 'Jose';
})

console.log(existeAlumno)