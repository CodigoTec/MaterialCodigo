//FUNCIONES.....
/*Es un bloque de codigo que se utiliza para ejecutar una tarea
y puedo reutilizarla cada vez que necesito*/

//SINTAXIS
//function nombre-function (parametros_separados_por_comas){....}


//PARAMETROS Y ARGUMENTOS
/* Una funcion puede tener ningun o varios parametro */
/* Los argumentos son los valores que pasamos a una funcion ( Quien las recibe) */

//FUNCION SIN PARAMETROS

function saludo (  ){
  //document.write("hola como estas");
}

saludo(); //Estoy llamando a mi funcion;

//FUNCION CON PARAMETROS

function multiplicacion(a,b) {
  //document.write(a*b + "<br>");
}

multiplicacion(40,5);

//FUNCION ANONIMA.....Es una funcion que no tiene nombre.

var multiplicacion = function(c,d){return c*d;};
//document.write(multiplicacion(9,8));

//FUNCION ANONIMA AUTOINVOCADA


(function(x,y){
  return document.write(x/y);
}(6,6));













