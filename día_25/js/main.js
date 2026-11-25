// Ejercicio 25
// Nivel 1

// Nivle 1.1

//Alumno
let alumno = {nombre: 'Johan', apellido: 'Rodríguez', edad: '31', curso: 'programación'}

console.log(alumno.nombre,
alumno.apellido,
alumno.edad,
alumno.curso)

//Nivel 1.2

//Deconstrucción
const {nombre, apellido, edad, curso } = alumno;
console.log(nombre, apellido, edad, curso)


//Nivel 1.3
//Añadir nombre completo
alumno = {nombre:'Johan', apellido: 'Rodríguez', edad: '31', curso: 'programación',
    imprimir : function(){
        return `${this.nombre} ${this.apellido}`
    }
};
console.log("EL nombre completo es: "+alumno.imprimir());

//Nivel 2
//Operadores spread y rest

//Nivel 2.1 - spread
const numeros = [10, 20, 30];
const masNnumeros = [...numeros, 50, 80, 130, 210, 340];
console.log(masNnumeros);

//Nivel 2.2




//rest
function suma(...args) {
    return args.reduce((a, b) => a + b, 5);
}
console.log(suma(2,2,3));
