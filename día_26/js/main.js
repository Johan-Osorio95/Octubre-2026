// Ejemplo 1: if

let a = 3;
let result = 'menor a 0';

if (a > 0) {
    result = 'mayor a 0'
}

console.log(result);

// Ejemplo 2: if/else

let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad con: " + edad + " años");
}
else {
    console.log("Es menor de edad: " + edad + " años.");
}

// Ejemplo 3: if/else if/else

let numero = 30;

if (numero > 50) {
    console.log("El número es mayor a 50.")
} else if (numero < 25) {
    console.log("El número es menor a 50.")
} else {
    console.log("El número está entre 0 y 50.")
}

// Ejemplo 4: swicth/case

const mascota = "perro";

switch (mascota) {
    case "perro":
        console.log("Sí, tengo perro.");
        break;
    case "gato":
        console.log("Sí, tengo gato.");
        break;
    case "loro":
        console.log("Sí, tengo loro.");
        break;
    case "vaca":
        console.log("Sí, tengo vaca");
        break;
    default:
        console.log("No tengo mascota.");
        break;
}

// Ejemplo 5: for

let srt = '';

for(let i = 0; i < 9; i++){
    srt = srt + i;
}
console.log(srt);

// Ejemplo 6: while

let num = 0;

while(num < 3){
    num++;
}
console.log(num);

// Ejemplo 7: do/while

let resultado = ''
let n = 0;

do{
    n = n + 1;
    resultado = resultado + n;
}while(n < 5);

console.log(resultado);

// Ejemplo 8: forEach

const array1 = ['a', 'b', 'c']

array1.forEach((element) => console.log(element));