let carrito = []

// Voy a querer hacer un if --> if (carrito.length === 0) { mostrar mensaje "Tu carrito está vacío"} pero no sé cómo aún.

// INVENTARIO DE PRODUCTOS - INICIO

const productos = [
    { id: 1, titulo:"Tremendo Choco",           precio: 500, imagen: "images/ch1.jpg", altText: "Choco 1", descripcion: "Centro de magia y cobertura de locura.", buttonText: "Lo Quiero!"},
    { id: 2, titulo:"Bomba de Amor",            precio: 550, imagen: "images/ch2.jpg", altText: "Choco 2", descripcion: "Una explosión de sabores, sabelo.",      buttonText: "Lo Necesito!"},
    { id: 3, titulo:"Una Fiesta",               precio: 525, imagen: "images/ch3.png", altText: "Choco 3", descripcion: "No podés creer que algo así exista!",    buttonText: "Dame Mil!"},
    { id: 4, titulo:"Festival de Sabores",      precio: 500, imagen: "images/ch4.jpg", altText: "Choco 4", descripcion: "Te vas a querer casar con este choco.",  buttonText: "Ufff.. Compro!"},
    { id: 5, titulo:"Esto es Fatal",            precio: 550, imagen: "images/ch5.jpg", altText: "Choco 5", descripcion: "Todo lo que está bien (y mal)...",       buttonText: "Tome mi Dinero!"},
    { id: 6, titulo:"El Chocolate de tu Vida",  precio: 525, imagen: "images/ch6.jpg", altText: "Choco 6", descripcion: "No existe otro como este, he dicho!",    buttonText: "Lo Deseo!"}
]

// INVENTARIO DE PRODUCTOS - FIN



// TRAIGO INVENTARIO AL HTML
let contenedor = document.querySelector("#dynamicTienda")

for (const producto of productos) {
let contenedorProductos = document.createElement("div");
contenedorProductos.innerHTML =  
`<div class="col-lg-4 col-md-6 col-sm-12 clase-image-container">
    <img src="${producto.imagen}" alt="${producto.altText}" class="shadow p-3 bg-white rounded clase-image">
    <div class="layer-top">
        <div class="layer-text">
            <h2>${producto.titulo}</h2>
            <p class="clases-text-responsive">${producto.descripcion}</p>
            <p class="clases-text-responsive"><img src="images/precio.png" alt="Precio"> ${producto.precio}</p> 
            <a class="btn infoButton" target="_blank" href="..." role="button">${producto.buttonText}</a>
        </div>
    </div>
</div>`

contenedor.appendChild(contenedorProductos)
}

// if (confirm("Si te gustaría comprar Tremendo Choco, hacé click en Aceptar, si no en Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${productos.ch1.getSemitotal(cantidad)}`);
//     p1.agregarAlCarrito(cantidad);
// } 

// if (confirm("Si te gustaría comprar Bomba de Amor, hacé click en Aceptar, si no en Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${p2.getSemitotal(cantidad)}`);
//     p2.agregarAlCarrito(cantidad);    
// }

// if (confirm("Si te gustaría comprar Una Fiesta, hacé click en Aceptar, si no en Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${p3.getSemitotal(cantidad)}`);
//     p3.agregarAlCarrito(cantidad);
// }

// if (confirm("Si te gustaría comprar Festival de Sabores, hacé click en Aceptar, si no en Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${p4.getSemitotal(cantidad)}`);
//     p4.agregarAlCarrito(cantidad);
// }

// if (confirm("Si te gustaría comprar Esto es Fatal, hacé click en Aceptar, si no en Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${p5.getSemitotal(cantidad)}`);
//     p5.agregarAlCarrito(cantidad);
// }

// if (confirm("Si te gustaría comprar El Chocolate de tu Vida, hacé click en Aceptar, si no a Cancelar")) {
//     cantidad = Number(prompt("Cuántos te gustaría comprar?"));
//     alert(`Si comprás ${cantidad}, te sale ${p6.getSemitotal(cantidad)}`);
//     p6.agregarAlCarrito(cantidad);
// }
console.log(carrito)


