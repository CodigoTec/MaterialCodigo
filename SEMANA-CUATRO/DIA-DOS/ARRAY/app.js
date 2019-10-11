//Como se crea un Array
    var personas = ["nefeli","juan","maria","pedro"];
    console.log(personas);
    var numerosPares = [2,4,6,8,10,12];
    console.log(numerosPares);

//Recorriendo un array
   
    var estaciones = ["primavera","verano","invierno","otoño"];
    console.log(estaciones);

    for(var i = 0; i<estaciones.length ; i++){
        console.log(estaciones[i]);
    }


//Ejemplo de un array vacio, rellenandolo

     var nombre = prompt("¿Cual es tu nombre?");
     var edad = prompt("¿Cual es tu edad?");
     var curso = prompt("¿Cual es tu curso?");

     var estudiante = []

     estudiante[0]=nombre;
     estudiante[1]=edad;
     estudiante[2]=curso;

     console.log(estudiante);

//Metodos para array

//push....Agrega un nuevo elemento en la utlima posicion al array.

      const animals = ['pigs', 'goats', 'sheep'];

      const count = animals.push('cows');
      console.log(count);


//shift...Remueve el primer elemento del array.

       var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

       var eliminado = miPescado.shift(); 
       console.log('Elemento eliminado: ' + eliminado); 



//unShift....Agregue nuevos elementos al comienzo del array.
     
     var array1 = [1, 2, 3];

     console.log(array1.unshift(4, 5));
     console.log(array1);



//pop...Elimina el último elemento de una array.

       var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

       console.log(plants.pop());
       console.log(plants);

//concat...Une dos array.

       var  array1 = ['a', 'b', 'c'];
       var array2 = ['d', 'e', 'f'];

       console.log(array1.concat(array2));



// IndexOf...Busca una posicion para el elemento "luna",..-1 si el elemento no se encontrara.


   var array = [2, 9, 9];
        array.indexOf(2);      // 0
        array.indexOf(7);      // -1
        array.indexOf(9, 2);   // 2
        array.indexOf(2, -1);  // -1
        array.indexOf(2, -3);  // 0



//Join...Convierta los elementos de un array en una cadena.
    var elements = ['Fire', 'Air', 'Water'];

       console.log(elements.join());
       console.log(elements.join(''));


//slice....Seleccionar una porcion de un array (inicio,fin).

        var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
        var masculinos = nombres.slice(1, 3);
        console.log(masculinos);

//splice...Agregar elementos al array (desde donde empieza, cuantos ,con que se reemplazra).
    
    var months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Insertando en el Index 1
    console.log(months);
    // resultado en consola:... Array ['Jan', 'Feb', 'March', 'April', 'June']


//lastIndexOf....devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo.

          var animales = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
          var lastIndexOf1 = animales.lastIndexOf('Dodo');
          var lastIndexOf2 = animales.lastIndexOf('Tiger');
          console.log(lastIndexOf1);
          console.log(lastIndexOf2);



