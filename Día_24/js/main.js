const textoarea = document.getElementById("texto");
const botont = document.getElementById("boton");
const areadetexto = document.getElementById("addtexto");

botont.addEventListener("click", function() {

    const texteado = textoarea.value;

    areadetexto.textContent = texteado;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const boton = document.getElementById("botonaction");
const resultado = document.getElementById("resultadosuma");

botonaction.addEventListener('click', function() {

    const suma = Number(num1.value) + Number(num2.value);
    resultado.textContent = "La suma es: " +suma;
});
