// Ejercicio 25
// Nivel 1

// Nivle 1.1
//Objetos y propiedades

let alumno = { nombre: 'Johan', apellido: 'Rodríguez', edad: '31', curso: 'programación' }

console.log(
    alumno.nombre,
    alumno.apellido,
    alumno.edad,
    alumno.curso)

//Nivel 1.2
//Deconstrucción

const { nombre, apellido, edad, curso } = alumno;
console.log(nombre, apellido, edad, curso)


//Nivel 1.3
//Añadir nombre completo

alumno = {
    nombre: 'Johan', apellido: 'Rodríguez', edad: '31', curso: 'programación',
    imprimir: function () {
        return `${this.nombre} ${this.apellido}`
    }
};
console.log("EL nombre completo es: " + alumno.imprimir());

//Nivel 2
//Operadores spread y rest

//Nivel 2.1 - spread
const numeros = [10, 20, 30];
const masNnumeros = [...numeros, 50, 80, 130, 210, 340];
console.log(masNnumeros);

//Nivel 2.2

const arte = ['escritura', 'dibujo', 'canto'];
const diversion = ['videojuegos', 'lectura', 'peliculas'];
const musica = ['rap', 'boleros', 'regge', 'rock'];

const hobby = [...arte, ...diversion, ...musica]
console.log("Tus hobbys son: " + hobby);

//Nivel 2.3 rest

function suma(...args) {
    return args.reduce((a, b) => a + b, 5);
}
console.log(suma(2, 2, 3));

//Desestructuración en un array
const años = [5, 10, 15, 25, 40, 65, 80];
const [primero, segundo, ...resto] = años;

console.log(primero);
console.log(segundo);
console.log(resto);

//Desestructuración en un objeto
const evento = {
    invitados1: "Alcolirikoz",
    invitados2: "Ozelot",
    invitados3: "Siomantis",
    invitados4: "Brock Ansiolitiko",
    invitados5: "Rafael Lechowski"
};

const { invitados1, invitados2, ...otrosartistas } = evento;
console.log(invitados1);
console.log(invitados2);
console.log(otrosartistas);

//Nivel 3
//Manipulación del DOM (básico)

//Crea un HTML con un <p> y usa JavaScript para cambiar su contenido.

const parrafo = document.getElementById("texto");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    parrafo.textContent = "Andamos prácticando";
    parrafo.style.color = "red";
});

//Crea una etiqueta <ul> y añadele un <li> usando JavaScript.

const ul = document.createElement("ul");
const li = document.createElement("li");

li.textContent = "Creando un 'li' con JavaScript.";
ul.appendChild(li);
document.body.appendChild(ul);

//Elimina un elemento del DOM al pulsar un botón.

const botonborrar = document.getElementById("boton2");

botonborrar.addEventListener("click", () => {
    parrafo.remove();
});

//Crea un contador que se incremente cada vez que haces clic en un botón.

let contar = 0;
const conteo = document.getElementById("conteos");
const botonconteo = document.getElementById("boton3");

botonconteo.addEventListener("click", () => {
    contar++;
    conteo.textContent = contar;
});