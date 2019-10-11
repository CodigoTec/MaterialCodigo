//switch ....Evaluan expresion e intenta comparar con el valor de la etiqueta CASE
//si encuentra una coincidencia, ejecuta el bloque de codigo.

var estacion = prompt("¿Cual es tu estacion favorita?");

switch (estacion) {
    case "primavera":
        console.log("su estacion es primavera");
        break;
    case "invierno":
        console.log("su estacion es invierno");
        break;
    case "otoño":
        console.log("su estacion es otoño");
        break;
    case "verano":
        console.log("su estacion es verano");
        break;
    default:
        console.log("el valor ingresado es invalido");
        break;
}




