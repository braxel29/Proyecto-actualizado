 const precios = {
    producto1: 900,
    producto2: 680
};


const imagenes = {
    producto1: ['https://m.media-amazon.com/images/I/81f2PNCNtaS._AC_UF1000,1000_QL80_.jpg'],
    producto2: ['https://products.eneba.games/resized-products/hjihR-MCvn1qJKzTEeDvknIptXcjaDoFB5dW4zmQJ3A_350x200_3x-0.jpeg']
};


function crearProducto(id, nombre, precio) {
    
    const divProducto = document.createElement('div');
    divProducto.classList.add('producto');

    
    imagenes[id].forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        divProducto.appendChild(img);
    });

    
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = `${nombre} - $${precio}`;
    
    
    const input = document.createElement('input');
    input.type = 'number';
    input.id = id;
    input.value = 0;
    input.min = 0;

    
    input.addEventListener('change', actualizarTotal);

    
    divProducto.appendChild(label);
    divProducto.appendChild(input);

    
    document.getElementById('productos').appendChild(divProducto);
}


function actualizarTotal() {
    
    const cantidadProducto1 = parseInt(document.getElementById('producto1').value) || 0;
    const cantidadProducto2 = parseInt(document.getElementById('producto2').value) || 0;

    
    const total = (cantidadProducto1 * precios['producto1']) + (cantidadProducto2 * precios['producto2']);

    
    document.getElementById('total').textContent = total;
}


function realizarCompra() {
    const total = document.getElementById('total').textContent;
    alert(`Compra realizada con éxito. Total pagado: $${total}`);
}


document.addEventListener('DOMContentLoaded', () => {
 
    crearProducto('producto1', 'Producto 1', precios['producto1']);
    crearProducto('producto2', 'Producto 2', precios['producto2']);
});


document.getElementById('btnComprar').addEventListener('click', realizarCompra);