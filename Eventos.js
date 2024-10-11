let carrito = [];
let total = 0;


function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}


function actualizarCarrito() {
    const productosDiv = document.getElementById('productos');
    const totalSpan = document.getElementById('total');

    
    productosDiv.innerHTML = '';

    
    carrito.forEach((producto) => {
        const item = document.createElement('div');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        productosDiv.appendChild(item);
    });

    
    total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    totalSpan.textContent = total.toFixed(2);
}


function aplicarDescuento() {
    if (total > 0) {
        const descuento = total * 0.10;
        total -= descuento;
        document.getElementById('total').textContent = total.toFixed(2);
        alert(`Se ha aplicado un descuento del 10%. Total después del descuento: $${total.toFixed(2)}`);
    } else {
        alert('No hay productos en el carrito para aplicar un descuento.');
    }
}


function realizarCompra() {
    if (carrito.length > 0) {
        alert(`Compra realizada por $${total.toFixed(2)}. ¡Gracias por tu compra!`);
        carrito = []; 
        actualizarCarrito(); 
    } else {
        alert('El carrito está vacío, no puedes realizar una compra.');
    }
}


document.getElementById('btnAgregarA').addEventListener('click', function() {
    agregarProducto('Juego A', 900);
});

document.getElementById('btnAgregarB').addEventListener('click', function() {
    agregarProducto('Juego B', 650);
});

document.getElementById('btnDescuento').addEventListener('click', aplicarDescuento);

document.getElementById('btnComprar').addEventListener('click', realizarCompra);