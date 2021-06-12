// FUNCIONES -- Inicio
function mostrarPrecio (precio) {
    alert(`El precio de este producto es $${precio}`)
}

// FUNCIONES -- Fin


let informacionProductos = confirm("Hola! Si te gustaría conocer el precio de los productos, hacé click en Aceptar. Te voy a hacer algunas preguntitas para ayudarte a encontrar el tocado perfecto para vos!");

if (informacionProductos) {
    let tipoProducto = prompt("En stock tengo coronas y semicoronas. Cuál de estos productos buscabas?").toLowerCase();

    switch (tipoProducto) {
        case "coronas" :
            let coronaMaterial = prompt("Qué buena elección una Corona! Ahora elegi: flores o piedras?").toLowerCase();
                switch (coronaMaterial) {
                    case "flores":
                        let precioCoronaFlores = Number(1500);
                        mostrarPrecio(precioCoronaFlores)
                        break;
                
                    case "piedras":
                        let precioCoronaPiedras = Number(2500);
                        mostrarPrecio(precioCoronaPiedras)
                         break;
                    
                    default:
                        alert("Solo tengo Flores o Piedras. Siento no poder ayudarte hoy.")
                        break;
                }
            break;
    
        case "semicoronas":
        let semicoronaMaterial = prompt("Me encantan las semicoronas! Ahora elegi: flores o piedras?").toLowerCase;
            switch (semicoronaMaterial) {
                case "flores":
                    let precioSemiCoronaFlores = Number(1000);
                    mostrarPrecio(precioSemiCoronaFlores)
                    break;
                
                case "piedras":
                    let precioSemiCoronaPiedras = Number(3000);
                    mostrarPrecio(precioSemiCoronaPiedras)
                    break;
                    
                default:
                    alert("Solo tengo Flores o Piedras. Siento no poder ayudarte hoy.")
                break;
                }
            break;

        default:
            alert("No me queda stock. Lo siento! Chau!")
            break;
    }
} 
else {
    alert("Siento mucho no poder ayudarte. Chau!")
}