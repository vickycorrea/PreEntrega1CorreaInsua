// SALUDO DE BIENVENIDA

alert ("¡Gracias por tu interés en saber más sobre el idioma Japonés!");
alert ("Para poder generar un plan de estudios personalizado deberás completar la siguiente información");

// UTILIZACION DE FUNCTION PARA SALUDA

function saludar (nYa){
    if (nYa != undefined) {
        alert ("¡Hola " + nYa + "!");
    } else {
        alert ("Hola persona sin nombre");
    }
}
let nYa = prompt ("Indicá tu nombre y apellido").toUpperCase();
saludar (nYa);
alert ("Gracias por interesarte en nuestra oferta de cursos de idioma");

// UTILIZACION DE WHILE PARA VERIFICAR LA EDAD

let e = prompt ("Indicá tu edad");
while (e > 7){
    console.log("su edad es de " + e);
        alert ("¡Perfecto! Tenemos planes de estudio para la edad que nos indicas.");

//  UTILIZACION DE SWITCH PARA IDENTIFICAR LA ZONA

        let z = prompt ("¿Tu zona de residencia es AMBA o interior del país?").toUpperCase();
    switch (z) {
        case "AMBA":
            console.log ("si en AMBA");
            alert ("Nuestras sedes de AMBA son en Capital Federal y Zona Oeste.");

//  UTILIZACION DE FOR PARA IDENTIFICAR EL TIPO DE CURSO

            for (tipoCurso = 0; tipoCurso < 4; tipoCurso ++) {
                let tipoCurso = Number(prompt ("Contamos con las siguientes opciones: 1) curso individual - 2) paquete de 2 cursos - 3) paquete de 3 cursos. Elejí la opción que más te guste."));
                if (tipoCurso === 1) {
                    console.log ("si curso individual");
                    alert ("El valor de curso individual es de $...");
                    break;
                } else if (tipoCurso === 2) {
                    console.log ("si pack 2 cursos");
                    alert ("El valor del paquete de dos cursos es de $...");
                    break;
                } else if (tipoCurso === 3) {
                    console.log ("si pack 3 cursos");
                    alert ("El valor del paquete de tres cursos es de $...");
                    break;
                } else if (tipoCurso >= 4) {
                    console.log("no cursos");
                    alert ("Por el momento no contamos con paquetes de más de 3 cursos.");
                    break;
                } else if (tipoCurso === 0){
                    console.log("nulo");
                    alert ("No ha seleccionado ningún curso.");
                    break;
                }}
            break;
        default:
            console.log ("no sedes");
            alert ("Lamentablemente, por el momento no contamos con sedes en el interior del país.");
    }
    e--;
    break;
}
console.log("Fin del while");
if (e <=7) {
    alert ("La edad mínima para comenzar a estudiar Japonés con nosotros es de 8 años.");
 }










