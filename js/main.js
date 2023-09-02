alert ("¡Gracias por tu interés en saber más sobre el idioma Japonés!");
alert ("Para poder generar un plan de estudios personalizado deberás completar la siguiente información");
let nYa = prompt ("Indicá tu nombre y apellido").toUpperCase();
function saludar (nYa){
    if (nYa != undefined) {
        alert ("Hola" + nYa);
    } else {
        alert ("Hola persona sin nombre");
    }
}
alert ("Gracias por interesarte en nuestra oferta de cursos de idioma " + nYa);
let e = prompt ("Indicá tu edad");
    if (e <= 6) {
        alert ("La edad mínima para comenzar a estudiar es de 7 años");
    }
    console.log ("SE TERMINO");
let z = prompt ("¿Tu lugar de residencia es CABA, AMBA o interior del país?").toUpperCase();
    switch (z) {
        case "CABA":
            console.log ("Tenemos sedes en CABA");
            alert ("Tenemos sedes en CABA");
            break;
        case "AMBA":
            console.log ("Tenemos sedes en AMBA");
            alert ("Tenemos sedes en AMBA");
        default:
            console.log ("Lamentablemente, por el momento no contamos con sedes en el interior del país.");
            alert ("Lamentablemente, por el momento no contamos con sedes en el interior del país.");
    }
    let tipoCurso = prompt ("Contamos con cursos individuales o pack de 3 y 2 cursos. ¿Con cual te gustaría comenzar?").toUpperCase();
    switch (tipoCurso) {
        case "PACK DE 3":
            console.log ("El valor del pack de 3 cursos es de ...");
            alert ("El valor del pack de 3 cursos es de ...");
            break;
        case "PACK DE 2":
            console.log ("El valor del pack de 2 cursos es de ...");
            alert ("El valor del pack de 2 cursos es de ...");
            break;
        case "CURSO INDIVIDUAL":
            console.log ("El valor de curso individual es de ...");
            alert ("El valor de curso individual es de ...");
        default:
            console.log ("Aún no seleccionaste ningún curso");
            alert ("Aún no seleccionaste ningún curso");
    }




