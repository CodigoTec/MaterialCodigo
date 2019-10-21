
//Metodo Map :::> Devuelve un nuevo array con las especificaciones dichas. (push)

let numeros = [1,2,3,4,5,6,7,8,9];

let nuevoArray = numeros.map( numero =>  numero * 2);

console.log(nuevoArray);


// Metodo filter :::> Devuelve un nuevo array con los elementos que cumplan con una condicion de filtrado.
//               :::> No busca alterar los valores de los elementos, 
// Obtener la lista de estudiantes aprobados (se aprueba con nota 11):

let estudiantes = [
    { nombre: 'Alvaro',nota: 10 },
    { nombre: 'Daniel',nota: 16},
    { nombre: 'Alexys',nota: 12},
    { nombre: 'Rafa',nota: 17},
    {nombre: 'Alejandro',nota: 8},
    {nombre: 'Sofia',nota: 9}
]

let nuevoEstudiantes = estudiantes.filter(estudiante=>estudiante.nota >= 11).map(estudiant=>estudiant.nombre);

console.log(nuevoEstudiantes);

//Metodo find :::> Se encarga de devolver el primer elemento que cumpla con la especificacion proporcionada.

let personas = [
  {nombre: "Liliam", edad:45},
  {nombre: "Marcos", edad:15},
  {nombre: "Luana", edad:24},
  {nombre: "Roxana", edad:13},
  {nombre: "Luz Maria", edad:36},
]


// let newPersonas = personas.find((person,index,array)=>{
//   console.log(index,"elem",person,array);    
// })


let trabajadores = [
  { usuario: 1, nombre: 'Ricardo', descripcion:"es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum", edad: 25,venta: 70 },
  { usuario: 4, nombre: 'Daniel', descripcion:"El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo", edad: 55,venta: 46},
  { usuario: 1, nombre: 'Maria', descripcion:"Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. ", edad: 17,venta: 12},
  { usuario: 2, nombre: 'Teofilo', descripcion:"Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,  ", edad: 26,venta: 67},
  { usuario: 3, nombre: 'Juan', descripcion:"cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera ", edad: 45,venta: 83},
  {usuario: 1, nombre: 'Flor', descripcion:"el texto de Lorem Ipsum no es simplemente texto aleatorio. ", edad: 21,venta: 94},
  {usuario: 3, nombre: 'Patrick', descripcion:"combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. ", edad: 37,venta: 12},
  {usuario: 6, nombre: 'Rafael', descripcion:"Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas ", edad: 33,venta: 67},
  {usuario: 2, nombre: 'Dante', descripcion:"Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de gregtegrregerg", edad: 20,venta: 83},
  {usuario: 1, nombre: 'Miguel', descripcion:" Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum,  ", edad: 18,venta: 94}
]


let descripcion = trabajadores.find((elemento)=>{
  return elemento.usuario ;
})

console.log(descripcion);

//Metodos para textos

//Metodo Include :::> Determina si EXISTE O NO un elemento dentro del Array

let animales = ['gato', 'perro', 'conejo', "vaca" , "conejo"];
let existe = animales.includes("gato");
console.log(existe);

let numerosExiste = [45,56,54,23];
let existe1 = numerosExiste.includes(100);
console.log(existe1);

let texto = "hola soy nefeli";
let existe2 = texto.includes("soy");
console.log(existe2);


//Metodo split  :::> Crea un arreglo a partir de una cadena

let oracion = "Huancayo";
let nuevaOracion = oracion.split("");
console.log(nuevaOracion);


//Metodo charAt :::> Nos permite obtener un caracter de un string al pasarle el index.

let frase = "Rosa fue al mercado";

      //PRIMERA LETRA  //charAt(0);

      let primera = frase.charAt(0);
      console.log("PRIMERA",primera);

      //ULTIMA LETRA //charAt(frase.length-1);
      let ultima = frase.charAt(frase.length - 1);
      console.log("ULTIMA",ultima);


      //POR DEFECTO //charAt();
      let porDefecto = frase.charAt();
      console.log("PORDEFECTO",porDefecto);
      

      //SINO EXISTE  //frase.charAt(67);
      let noExiste = frase.charAt(67);
      console.log("NOEXISTE",noExiste);


//Metodo toUpperCase :::> Nos permite convertir el string de minuscula a mayuscula.

let palabraMinuscula = "esta frase sera convertida a mayuscula";
let mayuscula = palabraMinuscula.toUpperCase();
console.log(mayuscula);


//Metodo toLowerCase :::> Nos permite convertir el string de mayuscula a minuscula.


let palabraMayuscula = "ESTA FRASE SERA CONVERTIDA EN MINUSCULA";
let minuscula = palabraMayuscula.toLowerCase();
console.log(minuscula);
