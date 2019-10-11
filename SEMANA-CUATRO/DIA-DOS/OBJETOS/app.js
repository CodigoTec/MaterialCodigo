//SINTAXIS

var persona = {
    nombre: "eliana",
    edad: 23,
    comida: "ceviche",
    genero: "rock",
    curso: ["javascript","php","css","html"]
}

//COMO RECORRERLO
for (var i in persona) {
   console.log(persona[i]);
}

//Recorrer propiedades

   //Object.keys("el nombre de tu objeto")
    
   //ejemplo
     
    var obj = { 
       0: 'a', 
       1: 'b', 
       2: 'c' };
       
    console.log(Object.keys(obj))


//Recorrer  Valores
   
    //Object.values("El nombre de tu objeto")

      var object1 = {
        a: 'somestring',
        b: 42,
        c: false
      };
      
      console.log(Object.values(object1));
