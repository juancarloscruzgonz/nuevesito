

alert("hola");
let texto ='boligrafo super caros';
const producto2 ="teclado";
console.log (texto);
console.log (typeof producto2);

//length = extension //indexof = retorna posicion
console.log(texto.length);
console.log(texto.indexOf("super"));

//includes (retorna true o false)
console.log(texto.includes('barato'));

// objeto 

const producto = {
    nombreProducto: "lavadora",
    precio: 300,
    boolean: true,
}
console.log(producto);
console.log(producto.precio);
console.log(producto["boolean"]);  // ver lo que hay entre los corchetes
// agregar nuevas propiedades
producto.mueble = "chico";
producto.frigorifico = "grande";
console.log(producto);

//borrar propiedad
delete producto.boolean;
console.log(producto);
// ver anterior forma
const precioProducto = producto.precio;
/*console.log(precioProducto);
// ver nueva forma (destructuring)
const {frigorifico,mueble} = producto;
console.log(frigorifico);
console.log(mueble);

const medida ={
    marcas: 20,
    peso:"50kg",
}
console.log(medida);
// unir 2 objetos
const nuevo = {...producto,...medida};
console.log(nuevo);*/