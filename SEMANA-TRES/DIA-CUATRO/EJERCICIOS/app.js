
function recibir() {
    var valor = document.getElementById("texto").value;
    document.getElementById("txt").innerHTML = valor;
}   

var boton = document.getElementById("boton");
boton.addEventListener("click",recibir);


