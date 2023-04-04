var botonBuscar = document.getElementById("Buscar")
var fechaSeleccionada = document.getElementById("fechaSeleccionada")

botonBuscar.addEventListener('click', clickBuscar)
function clickBuscar(){
    var fecha= document.getElementById('fecha').value;
    fechaSeleccionada.textContent= "Fecha Seleccionada: ${fecha}";
    
}