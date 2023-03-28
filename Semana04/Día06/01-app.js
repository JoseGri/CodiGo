/** SCOPE = Alcance de una variable */

function saludo() {

//    console.log('hola')
const saludar = 'hola'
return saludar

}

const resultado = saludo()

console.log(resultado)

//------------------------------//



// Function anónima
const sumarDosNumeros2 = function () {

    console.log(2 + 3)
}

sumarDosNumeros2()

// Function arrow

 const sumar = () => console.log(numero + numero2) 


 //------------------------------//

 const arrays = ['Jose', 'Juan', 'Victor']

 function devolverUltimoArray(array) {

    return array [array.length - 1]
 }

 console.log(devolverUltimoArray(arrays));

  //------------------------------//

 function incrementarPorUno(array)
 
 const newArray= []
function incrementarPorUno(array){
    array.forEach(valor => {
        newArray.push(valor + 1)
    });
    return newArray
}



 /*for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);