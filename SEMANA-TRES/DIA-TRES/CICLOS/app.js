//CICLO.......

/*A menudo cuando se escribe código,se desea que el mismo bloque de código se ejecute una y otra, y otra vez 
 en forma consecutiva. En vez de agregar muchas líneas casi iguales de código,
 en JAVASCRIPT se pueden utilizar los ciclos para desempeñar una tarea como ésta.*/

//CICLO FOR
/*se utiliza cuando sabemos cuántas veces vamos a ejecutar un pedazo de código.*/

//SINTAXIS

/*for (expresion-inicial;condicion; expresionIncremento) {
    sentencia
}*/
 
//MUESTRA EN PANATALLA LOS 10 PRIMEROS NUMEROS;

    // var i;
    // for(i = 0 ; i <= 100 ; i++){
    //    document.write(i + "<br>")
    // }

//MUESTRA LOS DIAS DE LA SEMANA;

// var diasDeLaSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

// for (var i = 0; i <= diasDeLaSemana.length - 1 ; i++ ){

//   console.log(diasDeLaSemana[i]);

// }






/*..............................*..................................... */

//CICLO WHILE
/*...se suele utilizar cuando no sabes cuántas veces tienes que repetir el bucle,
  ...mientras se cumpla la condición, ejecuta el siguiente bloque de código entre llaves*/

//SINTAXIS

/*while(condicion){
   //bloque a ejecutar MIENTRAS la condicion sea verdadera
}*/

//MUESTRA EN PANATALLA LOS 20 PRIMEROS NUMEROS;

// var i = 21;
// while(i<=20){
//   //console.log(i);
//   i++;
//  }



//MUESTRA LOS DIAS DE LA SEMANA;




/*...........................................*.........................*/

//CICLO DO WHILE....obligatoriamente siempre se ejecuta al menos una vez.
//SINTAXIS

// do{
     //codigo a ejecutar
// }while();

//MUESTRA EN PANATALLA LOS 5 PRIMEROS NUMEROS;

// var i = 6;

// do{
//   console.log(i);
//   i++;
// }while(i <= 5);




/*.........................................*..................................*/

//BREAk......Interrumpe el bucle en que se ejecute;

var i;

for(i=0;i<=10;i++){
  if (i === 4) {
    break;
  }

  //alert(i);

}



//CONTINUE......Saltar hasta la siguiente iteracion del bucle;

for(i=0;i<=10;i++){
  if (i === 4) {
    continue;
  }

  //alert(i);

}


/*.......................................*..............................*/

//While o For 
//......For tiene incluido al contador en su propia sintaxis.

//  var letra = "";

// while (letra !== "x") {
//     letra = prompt("Introduzca la letra x para salir:");
//     document.write(letra);
// }



//  var letra = "";
//  for( ;letra !== 'x'; ){
//     letra = prompt("Introduzca la letra x para salir:");

// }

//Si sabemos cuántas repeticiones requerirá el bucle, será mejor utilizar el  for .
// En cambio, si no conocemos el número de vueltas requeridas, utiliza el  while .‌



  
  