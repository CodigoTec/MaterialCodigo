//Metodos para seleccionar elementos del DOM ( Nodos del tipo 1)

/*
  document.getElementById() //Nodo del tipo elementoque coincida con el ID indicado.
  document.getElementsByTagName() // Coleccion de HTMl
  document.getElementsByClassName() // Coleccion de HTML
  document.querySelector() // Primer elemento que cumpla la condicion
  document.querySelectorAll() //  Todos los elementos que cumplan la condicion
*/

var section = document.getElementById("vertical");
console.log(section);
//console.log(section.firstElementChild);

var elementoP = document.getElementsByTagName("p");
console.log(elementoP[1].innerHTML);

var elemntoLi = document.getElementsByClassName("item");
console.log(elemntoLi);

var li = document.querySelectorAll(".item");
console.log(li);












