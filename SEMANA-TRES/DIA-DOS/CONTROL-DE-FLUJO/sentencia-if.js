//IF..especifica un bloque de codigo que se ejecuta  si una condicion es cierta.
//Sintaxis:

//if(condicion){
    //las instrucciones si la condicion es verdadera
//}

var nota = 16;

if (nota > 10) {
    //document.write("Usted aprobo el curso");
}

//Else....especifica un bloque de codigo que se ejecuta si una condicion es falsa.

var nota1 = 06;

if (nota1 > 10) {
    //document.write("Felicidades, usted aprobo el curso"); 
} else {
    //document.write("Lo siento mucho , usted desaprobo el curso");
}

//Else if....especifica una nueva condicion si la primera es falsa.

var nota3 = 10;

if (nota3 <= 10) {
    document.write("Usted esta desaprobado en este curso");   
} else if ( nota3 > 10 && nota3 <= 15) {
    document.write("usted tiene una nota aceptable");    
} else if (nota3 == 16 || nota3 == 17) {
    document.write("usted tiene una nota excelente"); 
} else if (nota3 == 18 || nota3 == 19 || nota3 == 20) {
    document.write("usted es un genio"); 
} else {
    document.write("El valor que ingreso es invalido")
}
