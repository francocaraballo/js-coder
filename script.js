let descripcionCompra = ''
let totalCompra = 0;
let seguirComprando = true;


const ingresarProducto = () => {
    let producto = parseInt(prompt(`Que producto desea comprar? (Ingrese solo el numero)
        1 - Fernet Branca 750 ml - $9.000
        2 - Gancia 1 L - $5.000
        3 - Gin Gordons 700 ml $8.500
        4 - Vodka Absolut Raspberri 700 ml - $18.000
        5 - Jägermeister Jagger 700 ml - $24.000
        `));
    return producto;
}

const ingresarCantidadProductos = () => {
    let cantidad = parseInt(prompt("Cuantas unidades quiere agregar?"));
    return cantidad;
}

const mostrarDetalleCompra = (total, descripcion) => {
    descripcion += `\nTOTAL: $${total}`;
    alert(descripcion);
}

do {
    let producto = 0;
    let cantidadProductos = 0;

    // Validacion de los campos de entrada.

    while (!producto || !cantidadProductos) {
        producto = ingresarProducto();
        cantidadProductos = ingresarCantidadProductos();

        if(producto > 5 || producto < 1 || cantidadProductos < 0) {
            producto = 0;
            cantidadProductos = 0;
            alert('Por favor, ingrese un numero valido!')
        }

    }

    // Listado de productos, donde se asigna el precio y nombre correspondiente.

    let productoNombre = '';
    let precioUnitario = 0;

    switch (producto) {
        case 1:
            precioUnitario = 9000;
            productoNombre = 'Fernet Branca 750 ml'
            break;

        case 2:
            precioUnitario = 5000;
            productoNombre = 'Gancia 1 L'
            break;

        case 3:
            precioUnitario = 8500;
            productoNombre = 'Gin Gordons 700 ml'
            break;

        case 4:
            precioUnitario = 18000;
            productoNombre = 'Vodka Absolut Raspberri 700 ml'
            break;

        case 5:
            precioUnitario = 24000;
            productoNombre = 'Jägermeister Jagger 700 ml'
            break;

        default:
            alert("Por favor, ingrese un numero valido!")
            break;
    }

    let precioTotal = cantidadProductos * precioUnitario;

    descripcionCompra += `${cantidadProductos}u - ${productoNombre} - $${precioTotal}\n`;

    totalCompra += precioTotal;

    seguirComprando = confirm("Quiere seguir comprando?")
} while (seguirComprando);

// Se muestra el detalle de la compra realizada

mostrarDetalleCompra(totalCompra, descripcionCompra)


