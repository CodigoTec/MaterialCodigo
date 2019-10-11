//SCOPE:....Es lo que determina la accesibilidad de nuestro codigo.

//GLOBAL:....Podemos acceder a ellas desde cualquier parte del codigo.

var variableGlobal = "soy una variable global";

function nombrar(){
 //console.log(variableGlobal);
}

nombrar();
//document.write(variableGlobal);









// function nombrar(){
//     function nombrar1(){
//         alert(variableGlobal);
//     }
//     nombrar1();  
// }

// nombrar();
// console.log(variableGlobal);


/*.........................*.................................. */
//LOCAL:.
      /*Variables creadas dentro de una funcion, y solo pueden ser accedidas 
      desde su propia funcion o una funcion anidad*/

// function nombrar1 (){
//     var variableLocal = "soy una variable local";
//     document.write(variableLocal);
// }

// nombrar1();
// console.log(variableLocal);


 function apellidoPapa (){
    var variableLocal = "soy una variable local";
     function apellidoHijo(){
       console.log(variableLocal);
     }


  apellidoHijo();
}

apellidoPapa();
console.log(variableLocal);