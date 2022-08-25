
//const se borra dps de ejecutar la funcion, let y var no
// let nombreIngresado=prompt("Ingresar nombre")
// alert ("El nombre ingresado es" + nombreIngresado)
var letter=" ";

while(letter != 'S' && letter != 's'){
    var suma=0;
    for(let i=0; i<5; i++) {
        var number = parseInt(prompt("Ingrese un numero"));
        suma=suma+number;
    }
    alert("el resultado es: " + suma);
    letter=prompt("Si desea salir presione la letra 'S', si quiere seguir sumando presione cualquier otra tecla");
}
alert("Gracias por participar");
