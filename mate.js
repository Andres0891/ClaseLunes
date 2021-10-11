function Sumar(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)+parseInt(num2);
    alert("La suma es de: " + resultado);
}
function Restar(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)-parseInt(num2);
    alert("La suma es de: " + resultado);
}
function Dividir(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)/parseInt(num2);
    alert("La suma es de: " + resultado);
}
function Multi(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)*parseInt(num2);
    alert("La suma es de: " + resultado);
}
function ver(){
    var dato = document.getElementById("Materia").value;
    switch (dato) {
        case "Programación":
             alert("Has seleccionado Programacion");
            break;
        case "Soporte TI":
            alert("Has seleccionado Soporte TI");
            break;
        case "TICS":
            alert("Has seleccionado TICS");
            break;
        case "Diseño de Software":
            alert("Has seleccionado Diseño de Software")
            break;
        default:
            break;
    }
}
function CalculoEdad(){

    alert("Proximamente");

}