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

// UTILIZACIÓN DE ARRAY PARA ALMACENAR VALORES

             const cursos = [
                  "IDIOMA: Los primeros 300 kanjis primordiales para desenvolverte en Japón.",
                  "IDIOMA: Curso general idiomas N5",
                  "IDIOMA: Curso general idiomas N4",
                  "IDIOMA: Curso general idiomas N3",
                  "CULTURA: Cómo es la estructura política de los emperadores japoneses",
                  "CULTURA: Aprendé lo esencial de la comida Japonesa",
                  "ENTRETENIMIENTO: Convirtiéndome en mi mangaka favorito.",
                  "ENTRETENIMIENTO: Sumi-e: El arte de la tinta.",
                  ];

// UTILIZACIÓN DE UNSHIFT PARA AGREGAR UN VALOR AL INICIO DEL ARRAY

             const total = cursos.unshift("IDIOMA: Introducción al vocabulario Japonés");

// UTILIZACIÓN DE PUSH PARA AGREGAR UN VALOR AL FINAL DEL ARRAY

             const total1 = cursos.push("ENTRETENIMIENTO: Origami práctico para el día a día");
             console.table(cursos);

// UTILIZACIÓN DE JOIN PARA SEPARAR LOS VALORES DEL ARRAY CON " --- "

             alert("Todos los cursos que ofrecemos son " + cursos.join("  ---  "));

// UTILIZACIÓN DE SLICE PARA CATEGORIZAR LOS DIFERENTES TIPOS DE CURSOS        
    
             const idioma = cursos.slice(0, 5);
             console.log(idioma);
             alert("Nuestros cursos de idioma son: " + idioma.join("  ---  "));
             const cultura = cursos.slice(5, 7);
             console.log(cultura);
             alert("Nuestros cursos de cultura son: " + cultura.join("  ---  "));
             const entretenimiento = cursos.slice(7);
             console.log(entretenimiento);
             alert("Nuestros cursos de entretenimiento son: " + entretenimiento.join("  ---  "));

// UTILIZACIÓN DE CONCAT PARA UNIR LAS 3 CATEGORÍAS DE CURSOS ANTERIORMENTE DETALLADAS

             const cursosTodos = idioma.concat(cultura, entretenimiento);
             console.log(cursosTodos);

            const cursosYprecios = [
                  "CURSOS DE IDIOMAS: $69995.59 cada uno",
                  "CURSOS DE CULTURA: $20665.79 cada uno",
                  "CURSOS DE ENTRETENIMIENTO: $15333.20 cada uno",
                  ];
            console.table(cursosYprecios);

// UTILIZACIÓN DEL FOREACH PARA MOSTRAR EL VALOR DE CADA CATEGORÍA DE CURSOS
        
            cursosYprecios.forEach(valor => alert("Los precios de los cursos son: " + valor))

            const cursosSelect = [
                {producto: "IDIOMA 1", precio: 69995.59},
                {producto: "IDIOMA 2", precio: 69995.59},
                {producto: "IDIOMA 3", precio: 69995.59},
                {producto: "IDIOMA 4", precio: 69995.59},
                {producto: "IDIOMA 5", precio: 69995.59},
                {producto: "CULTURA 1", precio: 20665.79},
                {producto: "CULTURA 2", precio: 20665.79},
                {producto: "ENTRETENIMIENTO 1", precio: 15333.20},
                {producto: "ENTRETENIMIENTO 2", precio: 15333.20},
                ];
            let tipoCurso = Number(prompt("¿Estás interesado en: 1) Curso individual, o 2) Más de un curso"));
            if (tipoCurso === 1) {           
            let cursoInd = Number(prompt("Escribí si el curso que buscas es de 1) idiomas, 2) cultura o 3) entretenimiento"));
            for (cursoInd = 0; tipoCurso < 4; tipoCurso ++){
            if (cursoInd === 1) {
                    console.log ("si curso idiomas");
                    const idiomaImp = cursosSelect.map( item => item.precio * 1.21);
                    console.log(idiomaImp);
                    alert("El precio final con impuesto IVA es de: " + idiomaImp);
                    break;
            } else if (cursoInd === 2) {
                    console.log ("si curso cultura");
                    const culturaImp = cursosSelect.map( item => item.precio * 1.21);
                    console.log(culturaImp);
                    alert("El precio final con impuesto IVA es de: " + culturaImp);
                    break;
            } else if (cursoInd === 3) {
                    console.log ("si curso entretenimiento");
                    const entretenimientoImp = cursosSelect.map( item => item.precio * 1.21);
                    console.log(entretenimientoImp);
                    alert("El precio final con impuesto IVA es de: " + entretenimientoImp);
                    break;
            } else if (cursoInd >= 4) {
                    console.log("no cursos");
                    alert ("No contamos con más que estas tres categorías");
                    break;
            } else if (tipoCurso === 0){
                    console.log("nulo");
                    alert ("No ha seleccionado ningún curso.");
                    break;          

            }}} else if (tipoCurso === 2) {
                     console.log ("si pack 2 cursos");
                     alert ("El valor del paquete de dos cursos es de $...");
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










