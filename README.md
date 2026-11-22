# Octubre-2026
Octubre-2026

Gameverse

Maquetación en HTML y CSS de Gameverse:

Esta es una web que funciona como tienda de videojuegos.
Usé una variedad de imágenes como ejemplo de práctica.
 
Usé como referencia, para el diseño de la web, el ejemplo de la PEC-03, donde creé el diseño en FIGMA: https://www.figma.com/design/imBMytLTG3RjlJtIGJ9pIn/Johan-Sebasti%C3%A1n-Rodr%C3%ADguez-Osorio?node-id=0-1&t=gsfKSWzVIhm27nMo-1

Usé HTML5, CSS3 (custom properties, Flexbox, Grid, scroll-snap), metodología BEM, unidades relativas (rem, vw, %) y diseño responsive.

ARQUITECTURA:

Diseño Figma de la PEC-03
Páginas HTML semánticas
css/main.css
Custom properties "coloresen :root"
images "carátulas", "bannerse iconos"
js/main.js

PÁGINAS MAQUETADAS:

ARCHIVOS:	 	 
index.html - Inicio.	
generos.html - Géneros.	
gratis.html - Gratis.	
biblioteca.html - Biblioteca.	
centrodeayuda.html - Centro de ayuda.	
iniciosesion.html - Inicio de sesión.

PÁGINA: Inicio.
Carruseles de Juegos populares. 
Carruseles de juegos más vendidos.
botones de comprar y añadir a la cesta.

PÁGINA: Género.
un carrusel por género: infantiles, acción y terror.

PÁGINA: Gratis.
Lleva un título "Gratis por tiempo limitado" y tres carruseles de carátulas.

PÁGINA: Biblioteca.
Implementé tres columnas, y cada una contiene los juegos divididos por: Tus juegos, Más jugados, Favoritos, y cada juego lleva un botón de "jugar".

PÁGINA: Centro de ayuda.
Agregué un formulario para enviar una incidencia, el formulario contiene (nombre, apellido, email, tipo de incidencia y detalle).

PÁGINA: Inicio de sesión.
Agregué otro formulario de "email" y "contraseña", con los botones "Entrar" y "Crear" y un enlace "Olvidé mi contraseña".

COMPONENTES CREADOS:

BANNER: banner, banner__hero, banner__logo, banner__botones.
MENÚ DE NAVEGACIÓN: header, header__nav, header__ul.
CARRUSEL: div__carruseldecaratulas.
TARJETA DE JUEGOS: picture__caratulas, carruselboton.
COLUMNA DE BIBLIOTE: main__biblioteca.
FORMULARIOS: formulario, formulario__campo-de-texto, boton.
FOOTER: footer, footer__div.

CAMBIOS AL DISEÑO:
Cambié los enlaces del navegador, porque al separarlos se veían muy amontonados.
Cambié, en la página de Biblioteca, el nombre del videojuego por un botón "Jugar".
Cambié el Footer, para que no fuese tan sencillo, le agregué unos enlaces para brindar información, centré el texto
"derechos reservados..." y cambié el nombre de las redes sociales por el logo de estas.
Alineé los enlaces de (menú, valoración, ayuda, ingresar) hacia la esquina superior izquierda, para agregar el nombre de la web (Gameverse).
Dejé el logo centrado, entre el título y los enlaces (menú, valoración, ayuda, ingresar). 


Todas las páginas comparten el mismo menú (header) y los mismos botones del banner, así que desde cualquiera se puede ir a las demás.


Estructura del proyecto
text
.
├── index.html
├── generos.html
├── biblioteca.html
├── centrodeayuda.html
├── iniciosesion.html
├── README.md
├── css/
│   └── main.css
├── js/
│   └── main.js
├── fonts/
│   └── quantico-regular.woff2
└── images/

El diseño de la página se adapta con (@media):

Ancho máximo:

1280px	Se ocultan las imágenes decorativas del inicio de sesión y del centro de ayuda.
900px	Los carruseles pasan a columna, la biblioteca a una sola columna y el footer a una sola columna.
600px	El banner se centra, los botones pasan a una rejilla de 2x2 y la biblioteca muestra 2 carátulas por fila.