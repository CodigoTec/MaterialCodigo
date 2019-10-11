
sedee = prompt("cual es tu sede");
promocion = prompt("cual es tu promocion");

var sede = data[sedee];
var generacion = sede[promocion];
console.log(sede);
console.log(generacion);
console.log(data.LIMA["2016-2"].students);

var activos = 0;
var inactivos = 0;
var estudiantes = generacion.students;
for (let index = 0; index < estudiantes.length; index++) {
   if(estudiantes[index].active === true){
        activos++
   }else{
       inactivos++
   }
}

total = activos + inactivos;
console.log(activos,inactivos,total);

x = (inactivos*100)/total;

console.log(Math.round(x) + "%");







