//Para los textos de animacion
const textos = ["Hola, soy Yaser-code.", "Desarrollador web.", "Apasionado por la tecnología."];
const textoElemento = document.getElementById("texto-animado");
let indiceTexto = 0;
const velocidadEscritura = 150; // ms por letra
const tiempoEspera = 1500; // ms para mostrar texto completo antes de borrar

function animarTexto() {
    const textoActual = textos[indiceTexto];
    let letraIndex = 0;

    function escribir() {
        if (letraIndex < textoActual.length) {
            textoElemento.textContent += textoActual.charAt(letraIndex);
            letraIndex++;
            setTimeout(escribir, velocidadEscritura);
        } else {
            setTimeout(borrar, tiempoEspera);
        }
    }
    function borrar() {
        if (letraIndex > 0) {
            textoElemento.textContent = textoElemento.textContent.slice(0, -1);
            letraIndex--;
            setTimeout(borrar, velocidadEscritura / 2);
        } else {
            indiceTexto = (indiceTexto + 1) % textos.length;
            setTimeout(animarTexto, velocidadEscritura);
        }
    }

    escribir();
}

animarTexto();

//Otros metodos

function unaPagina(nombrePagina, elemento) {
    var i, contenidoPagina, paginaLinks;
    event.preventDefault();
    //Oculta todas las secciones
    contenidoPagina = document.getElementsByClassName("contenidoPagina");
    for (i = 0; i < contenidoPagina.length; i++) {
        contenidoPagina[i].style.display = "none";
    }


    //Quitamos todas las clases links de los anclas
    paginaLinks = document.getElementsByClassName("linkPagina");
    for (i = 0; i < paginaLinks.length; i++) {
        paginaLinks[i].classList.remove("active");
    }

    //Quitamos la clase active de todas las clases
    paginaLinks = document.getElementsByClassName("linkPagina");
    for (i = 0; i < paginaLinks.length; i++) {
        paginaLinks[i].style.backgroundColor = "";
    }
    //Muestra la seccion actual
    document.getElementById(nombrePagina).style.display = "block";
    elemento.style.backgroundColor = "#ddd";
}
function menuResponsivo() {
    var x = document.getElementById("miMenu");
    if (x.className === "menu") {
        x.className += " responsivo";
    } else {
        x.className = "menu";
    }
}
//Funcion para el desplegable
function funcionDesplegable(boton) {
    //Alteramos la clase active
    boton.classList.toggle("activeDesplegable");

    //elegimos el div que sigue justo despues despues de boton presionado
    var contenido = boton.nextElementSibling;
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}

//Funcion para descargar el cv
function descargarCV() {
    // URL del archivo PDF que quieres descargar
    const url = '../documents/cv-yaser.pdf';
    const nombreArchivo = 'cv-yaser.pdf';

    // Crear un elemento <a> dinámicamente
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = nombreArchivo;

    // Añadir el enlace al DOM, hacer clic y luego eliminarlo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}