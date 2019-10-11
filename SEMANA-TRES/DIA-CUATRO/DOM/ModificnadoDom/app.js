
//AGREGAR UN NUEVO ELEMENTO A NUESTRO HTML (createElement,createTextNode,appendChild).
    //elemento.appendChild(texto);

   //Creado el elemento p
    var parrafo = document.createElement("p");
    console.log(parrafo);


   //Agregando contenido a mi elemento P
    var contenido = document.createTextNode("hola soy un contenido ssssssssss");
    console.log(contenido);

   //Colocando mi contenido a mi elemento con appenChild
    parrafo.appendChild(contenido);

   //Llamando a mi elemento padre
    var contenedor = document.getElementById("parrafo");

   //Colocando mi elemento nuevo dentro de mi contenedor.
    contenedor.appendChild(parrafo);


//MODIFICAR CONTENIDO ( innerHTML,textContent)
   //textContent = ("hola");

   var elementoTitulo = document.getElementById("titulo");
   console.log(elementoTitulo);

   elementoTitulo.innerHTML = ("<u>modificando</u>");


//REEMPLAZAR Y ELIMINAR CONTENIDO ( replaceChild,removeChild)

 // padre.replaceChild(nuevo,antiguo);
   
 var elementoNuevo = document.createElement("p");
 var elementoContenido = document.createTextNode("soy el elemento que reemplazo");
     elementoNuevo.appendChild(elementoContenido);

 var elementoViejo = document.getElementById("item");
 var padre = document.getElementById("parrafo");

    padre.replaceChild(elementoNuevo,elementoViejo);

   // padre.removeChild(h1);
     var elementoElimar = document.getElementById("item1");

     padre.removeChild(elementoElimar);

   // parentNode....Para indicar el elemento padre

  //var hijo = document.getElementById("hijo").parentNode;
  //console.log(hijo);

   // padre.insertBefore(elementoNuevo,h1);

     var elementoNuevo1 = document.createElement("p");
     var elementoContenido1 = document.createTextNode("probando insertBefore");
     elementoNuevo1.appendChild(elementoContenido1);

     var padre2 = document.getElementById("hijo").parentNode;
     var hijo = document.getElementById("hijo");

     padre2.insertBefore(elementoNuevo1,hijo);

   

