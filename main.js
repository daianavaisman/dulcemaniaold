let carrito = []

// Voy a querer hacer un if --> if (carrito.length === 0) { mostrar mensaje "Tu carrito está vacío"} pero no sé cómo aún.

class Producto {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    getSemitotal = function (cantidad) {
        return this.precio * cantidad
    }
    //Semitotal es el precio del producto por la cantidad. Será el precio de la compra de ese producto.
    //El Total será la suma de los semitotales.
    
    getCompraProducto = function (cantidad) {
        return {
            item: this,
            cantidad: cantidad,
            monto: this.getSemitotal(cantidad)
        }
    }
    //CompraProducto me va a indicar qué producto se compró (mediante "item"), cuántos items (cantidad), y semitotal.
    //Esta CompraProducto va a alimentar mi carrito.

    agregarAlCarrito = function (cantidad) {
        carrito.push(this.getCompraProducto(cantidad))
    }

}

// INVENTARIO DE PRODUCTOS - INICIO

const p1 = new Producto ("ch1" , "Tremendo Choco" , 500);
const p2 = new Producto ("ch2" , "Bomba de Amor" , 550);
const p3 = new Producto ("ch3" , "Una Fiesta" , 525);
const p4 = new Producto ("ch4" , "Festival de Sabores" , 500);
const p5 = new Producto ("ch5" , "Esto es Fatal" , 550);
const p6 = new Producto ("ch6" , "El Chocolate de tu Vida" , 525);

// INVENTARIO DE PRODUCTOS - FIN


if (confirm("Si te gustaría comprar Tremendo Choco, hacé click en Aceptar, si no en Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p1.getSemitotal(cantidad)}`);
    p1.agregarAlCarrito(cantidad);
} 

if (confirm("Si te gustaría comprar Bomba de Amor, hacé click en Aceptar, si no en Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p2.getSemitotal(cantidad)}`);
    p2.agregarAlCarrito(cantidad);    
}

if (confirm("Si te gustaría comprar Una Fiesta, hacé click en Aceptar, si no en Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p3.getSemitotal(cantidad)}`);
    p3.agregarAlCarrito(cantidad);
}

if (confirm("Si te gustaría comprar Festival de Sabores, hacé click en Aceptar, si no en Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p4.getSemitotal(cantidad)}`);
    p4.agregarAlCarrito(cantidad);
}

if (confirm("Si te gustaría comprar Esto es Fatal, hacé click en Aceptar, si no en Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p5.getSemitotal(cantidad)}`);
    p5.agregarAlCarrito(cantidad);
}

if (confirm("Si te gustaría comprar El Chocolate de tu Vida, hacé click en Aceptar, si no a Cancelar")) {
    cantidad = Number(prompt("Cuántos te gustaría comprar?"));
    alert(`Si comprás ${cantidad}, te sale ${p6.getSemitotal(cantidad)}`);
    p6.agregarAlCarrito(cantidad);
}
console.log(carrito)


