
//"Actividad 1.1"
const message = document.querySelector("#message1");
message.textContent = "Hola mundo";

//"Actividad 1.2"
const message2 = document.querySelector("#message2");
message2.style.color = "black";

//"Actividad 1.3"
const message3 = document.querySelector("#message3");
const boton_rojo = document.querySelector("#boton-rojo");
const boton_azul = document.querySelector("#boton-azul");

boton_rojo.addEventListener("click", () => {
    message3.style.color = "red";
});

boton_azul.addEventListener("click", () => {
    message3.style.color = "blue";
});

