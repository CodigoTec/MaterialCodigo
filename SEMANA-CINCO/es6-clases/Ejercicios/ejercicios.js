//ejercicio 1:

const mostrarIntengrantes = (team,array)=>{
    let cantidad = array.length;    
    console.log(`Hay ${cantidad} personas en el equipo de ${team}.
    Ellos son: ${array} `)
};

console.log(mostrarIntengrantes("formacion",['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike']));

//Ejercicio 2:

let array = [1,-2,-3,4,5,6];

const cuadrado = (numeros) => {
   return numeros.map(numero => Math.pow(numero,2));
}

console.log(cuadrado(array));

//Ejercicio 3:

let contra = prompt("escribe tu contraseña");

let validarContraseña = (contra) => {
    contra === "codigoTecsup" ? console.log("verdadero") : console.log("verdadero");
}

console.log(validarContraseña(contra));

// ejercicio 4:

let palabra = "Eres hermosa"
const letraCapital = (palabra) => {

    let newStr = palabra.split(" ");

    console.log(newStr);

    let result = [];
    newStr.map(palabra=> {
     let primerLetra = palabra.charAt(0).toUpperCase();
     //console.log(primerLetra);
     let mediaPalabra = palabra.slice(1, palabra.length);
     //console.log(mediaPalabra);
     result.push(primerLetra + mediaPalabra);
    });

    console.log(result.join(" "));
    
};

console.log(letraCapital(palabra));

//ejercicio 5:

 const calculo = (operacion) => {

   let numero1 = parseInt(document.getElementById("numero1").value);
   let numero2 = parseInt(document.getElementById("numero2").value);
   let resultado = document.getElementById("resultado");
   
   let resul;

   if (operacion === 1) {resul = numero1 + numero2};
   if (operacion === 2) {resul = numero1 - numero2};
   if (operacion === 3) {resul = numero1 * numero2};
   if (operacion === 4) {resul = numero1 / numero2};

   return resultado.innerHTML = resul;

 }





