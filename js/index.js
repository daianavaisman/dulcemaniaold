// INVENTARIO DE PRODUCTOS - INICIO

const products = [
    { id: 1, title:"Tremendo Choco",           price: 500, image: "images/ch1.jpg", altText: "Choco 1", description: "Centro y cobertura de pura felicidad.", buttonText: "Lo Quiero!"},
    { id: 2, title:"Bomba de Amor",            price: 550, image: "images/ch2.jpg", altText: "Choco 2", description: "Una explosión de sabores, sabelo.",      buttonText: "Lo Necesito!"},
    { id: 3, title:"Una Fiesta",               price: 525, image: "images/ch3.jpg", altText: "Choco 3", description: "No podés creer que algo así exista!",    buttonText: "Dame Mil!"},
    { id: 4, title:"Festival de Sabores",      price: 500, image: "images/ch4.jpg", altText: "Choco 4", description: "Te vas a querer casar con este choco.",  buttonText: "Ufff.. Compro!"},
    { id: 5, title:"Esto es Fatal",            price: 550, image: "images/ch5.jpg", altText: "Choco 5", description: "Todo lo que está bien (y mal)...",       buttonText: "Tome mi Dinero!"},
    { id: 6, title:"El Chocolate de tu Vida",  price: 525, image: "images/ch6.jpg", altText: "Choco 6", description: "No existe otro como este, he dicho!",    buttonText: "Lo Deseo!"}
]

// INVENTARIO DE PRODUCTOS - FIN



// TRAIGO INVENTARIO AL HTML
let container = document.querySelector("#dynamicTienda")

for (const product of products) {
let productsContainer = document.createElement("div");
productsContainer.classList.add("col-lg-4", "col-md-6", "col-sm-12", "clase-image-container")
productsContainer.innerHTML =  
`<img src="${product.image}" alt="${product.altText}" class="shadow p-3 bg-white rounded clase-image">
 <div class="layer-top">
    <div class="layer-text">
        <h2>${product.title}</h2>
        <p class="clases-text-responsive">${product.description}</p>
        <p class="clases-text-responsive"><img src="images/precio.png" alt="Precio"> ${product.price}</p> 
        <button type="button" value="${product.id}" class="btn addToCartButton">${product.buttonText}</button>
    </div>
 </div>`

container.appendChild(productsContainer)
}

// FUNCIONES Y EVENTOS PARA AGREGAR AL CARRITO - INICIO
const cart = []

function addToCart(e) {
    //.find() es un metodo de los arrays que te devuelve el elemento que coincida con la busqueda. 
    //en este caso buscamos que me traiga el product.id que coincida con el value del boton
    const productToCart = products.find(product => product.id === parseInt(e.target.value));
    console.log(productToCart);

    if(!productToCart) {
        console.log('hmm no consigo el producto');
        return;
    }
    cart.push(productToCart);
    saveToLocalStorage("cart", cart)
}


const cartButton = document.querySelectorAll(".addToCartButton");
cartButton.forEach(button => button.addEventListener("click", addToCart)) //la función está definida arriba


// FUNCIONES Y EVENTOS PARA AGREGAR AL CARRITO - FIN




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
