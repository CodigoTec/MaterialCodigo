//ejercicio 1

function computeAverageLengthOfWords(word1, word2) {
    var promedio = (word1.length + word2.length)/2
    return promedio;
}


//ejercicio 2
function getNthElement(array, n) {
    for (i=0;i<array.length;i++){
      if (array.indexOf(array[i]) === n) {
          return array[i];
      }
    }
  }

console.log(getNthElement([1,2,9,4,5,6],2));


//ejercicio 3
var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
    for (var i in obj) {
        if (obj[i].length > num) {
             delete obj[i];
        }
        
    }
   console.log(obj);
}  
console.log(removeStringValuesLongerThan(2, obj))

//ejercicio 4
function computeSumOfAllElements(arr) {
     var suma = 0;
    for(var i = 0; i < arr.length ; i++){
       suma = suma + arr[i]
    }
    return suma
  }

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output);

//Ejercicios 5 ...Dado un objeto como parámetro, 
//contar la cantidad de propiedades que este contiene y retornarlo.

function objeto (obj){
  return Object.keys(obj).length;
}

console.log(objeto({"apellido":"rosales","edad":20}));

//Ejercicio 6 ...Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.

function getAllKeys(obj) {
  return Object.keys(obj)
}

console.log(getAllKeys({
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}))

//Ejercicio 7 ...Escribe una función llamada listAllValues que devuelve un array de todos los valores del objeto de entrada.

function listAllValues(obj) {
  return Object.values(obj)
}


console.log(listAllValues(
  {
    name: 'Krysten',
    age: 33,
    hasPets: false
  }
))

//Ejercicio 8: 
/*Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

   el primer elemento del array como la clave del objeto, y
   el último elemento del array como valor de esa clave.  */

   function transformFirstAndLast(array){
    for(var i=0;i<array.length;i++){
          key=array.shift();
          value=array.pop();
           var obj={key:value};
            return obj;
   
          }
   }


  console.log( transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));