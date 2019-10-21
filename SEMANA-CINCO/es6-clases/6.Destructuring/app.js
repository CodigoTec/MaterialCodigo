//Mostrar los valores cada uno de las propiedades.

const peliculas = {
      id:1,
      nombre: "El sexto sentido",
      director: "M. Night Shyamalan",
      clasificacion: "Drama"
}

let {id,nombre,director,clasificacion} = peliculas


//Rest

//Mostrar informacion // (...datos)

const persona = (...datos)=>{
    console.log(datos);
 
 }

persona("dd",23,"js");
