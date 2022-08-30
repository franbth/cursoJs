const nombre='asndro';
/* const apellido='';
const edad='';
const pelicula=''; */ 


//objetos literales
const personaje = {
    nombre,
    apellido: "Grillo",
    edad: 42,
    peliculas : "dumbo"
}
console.table (personaje);
console.log(personaje.nombre);

//objetos constructores
function personaj (nombre, apellido, edad, pelicula){
    this.nombre =nombre;
    this.apelllido =apellido;
    this.edad =edad;
    this.pelicula =pelicula;
}

const personaje3 = new personaj ('Tony', 'Montana', '35', 'scarface');
console.log (personaje3);
//MIRAR METODOS PQ NI ME FIJE QUE ONDA