
function mostrarProducto (){
    let producto;
    do{
        producto = parseInt(prompt ("Que producto va a llevar? \n1.Vans \n2.Nike \n3.Jordan"))
    } while (producto !=1 && producto !=2 && producto !=3)
    switch (producto){
        case 1:
            return "Vans";
        case 2:
            return "Nike";
        case 3:
            return "Jordan";
    }
}

function validarPrecio(producto){
    if (producto=="Vans"){
        return 15000;
    }
    else if (producto=="Nike")
    {
        return 25000;
    }
    else{
        return 40000;
    }
}

function cobrar(nombre,precio) {
    let metodoPago;
    do {
        metodoPago = prompt("Elija su metodo de pago: \n-Presione 'E' para pagar en efectivo o 'T' si desea pagar con tarjeta");
    } while (metodoPago !== 'E' && metodoPago !== 'T');
    if(metodoPago == 'E'){
        alert("Usted lleva: "+nombre + "\nTotal a pagar: $" +precio);
    }
    else{
        precioTarjeta(nombre,precio);
    }
}
function precioTarjeta(nombre,precio) {
    let cuotas;
    do {
        cuotas = parseInt(prompt("Escriba la cantidad de cuotas en las que pagara: \n-1 cuota (sin interes)\n-3 cuotas (3% de interes)\n-6 cuotas (5% interes)\n-12 cuotas (7% interes)"));
    } while (cuotas !=1 && cuotas !=3 && cuotas !=6 && cuotas !=12);
    console.log(precio);
    switch (cuotas){
        case 1:
            alert("Usted lleva: "+nombre + "\nTotal a pagar: $" +precio);
            break;
        case 3:
            alert("Usted lleva: "+nombre + "\nTotal a pagar: $" +(precio+(precio*3)/100));
            break;
        case 6:
            alert("Usted lleva: "+nombre + "\nTotal a pagar: $" +(precio+(precio*5)/100));
            break;
        case 12:
            alert("Usted lleva: "+nombre + "\nTotal a pagar: $" +(precio+(precio*7)/100));
            break;
    }
    console.log(precio);
}
let miProducto = mostrarProducto ();
let precioProducto = validarPrecio(miProducto);
cobrar(miProducto, precioProducto);



console.log(miProducto);
console.log(precioProducto);