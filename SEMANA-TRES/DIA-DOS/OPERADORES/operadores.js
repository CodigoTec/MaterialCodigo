//Operadores de Asignacion =; +=;-=;*=;/=;%=
var x,y;
x=15;
y=2;

// x+=y //x=x+y;
// alert("suma" + x);

// x-=y //x=x-y;
// alert("resta" + x);

// x*=y; //x=x*y;
// alert("multiplicacion" + x);

// x/=y; //x=x*y;
// alert("division" + x);

// x%=y; //x=x*y;
// alert("resto" + x);

//incremento
var a = 20;
 a++;
 console.log(a);  
 
 //decremento

 var b = 10;
 b--;
 console.log(b);


 //Operadores de Comparacion ==;!=;===;!===;>;>=;<;<=

 var edad = 15; 

 console.log("1igual..." , edad == 15); //valor
 console.log("2igual...", edad == 16); 
 console.log("3igual...", edad == "15");

 console.log("1desigual..." , edad != 15); //valor
 console.log("2desigual...", edad != 16); 
 console.log("3desigual...", edad != "15");

 console.log("1identico..." , edad === 15); //valor y tipo de dato
 console.log("2identico...", edad === 16); 
 console.log("3identico...", edad === "15");

 console.log("1no indetico..." , edad !== 15); //valor y tipo de dato
 console.log("2no indetico...", edad !== 16); 
 console.log("3no indetico...", edad !== "15");

 console.log("mayor..", edad > 8);
 console.log("menor..", edad < 8);

 console.log("mayor igual que....", edad >= 15);
 console.log("menor igual que....", edad <= 15);

 //Operadores logicos AND;OR;NOT

 //AND.....ampersand(&&) ....Y...Ambas comparaciones tienen que ser true;

 var numero1 = 20;
 var numero2 = 25;

 console.log("AND",numero1 > 19 && numero2 < 26); //TRUE
 console.log("AND",numero1 < 19 && numero2 < 26); //FALSE

 //OR.......lambda(||).....O....Basta que comparacion uno se True;
 console.log("AND",numero1 < 19 || numero2 < 26); //TRUE
 console.log("AND",numero1 > 19 && numero2 > 26); //FALSE

//NOT.......negacion(!)......NO

console.log("NOT",!(numero1 === 20));
 









