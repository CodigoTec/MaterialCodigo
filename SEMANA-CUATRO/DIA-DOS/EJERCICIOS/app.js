var juan = {
    nombre:"juan",
    edad:25,
    clase:true,
    cursos:["javascript","html","javascript avanzado","css","php"]
}

var ana = {
    nombre:"Ana",
    edad:35,
    clase:false,
    cursos:["javascript avanzado","css"]
}

var rosario = {
    nombre:"Rosario",
    edad:19,
    clase:false,
    cursos:["javascript","html","css","php"]
}


var mateo = {
    nombre:"Mateo",
    edad:28,
    clase:true,
    cursos:["javascript","php","javascript avanzado","css"]
}

var studiantes = [juan,ana,rosario,mateo];

//1.Mostrar a todas las estudiantes presentes en la consola.
    for( var i = 0; i < studiantes.length ; i++){
         if(studiantes[i].clase === true){
            console.log(studiantes[i].nombre);
     }
    }

//2.Mostrar a la suma de las edades de todos los estudiantes. //+=

      var sumaEdades = 0;
     for( var i=0; i < studiantes.length; i++){
         sumaEdades += studiantes[i].edad;
      }

      console.log(sumaEdades);

//3.Mostrar el nombre de los estudiantes que este llevando php .
     

       for( var i = 0; i < studiantes.length; i++){
         var cursosEstudiantes = (studiantes[i].cursos);
         for(j=0; j < cursosEstudiantes.length; j++){
             if(cursosEstudiantes[j] === "php"){
                     console.log(studiantes[i].nombre);    
              }
          }
        }

     

     


  

