
// creación de elementos que capturamos en el DOM

const buttonsSigAnt = document.querySelectorAll('.container #flex button');
const containerPlantas = document.querySelector('.container #plantas');
const carritoListado = document.querySelector('#carrito #cajaListado #listado');
const importeTot = document.querySelector('#carrito #importeTot');
const vaciarCarrito = document.querySelector('#carrito #compraFinal #butVaciar');
const comprar = document.querySelector('#carrito #compraFinal #butComprar');
const clickCarrito = document.querySelector('header #clickCarrito');
const carrito = document.querySelector('#carrito');


// Para hacer la transición del carrito que aparezca y desaparezca

if (clickCarrito && carrito) {
    clickCarrito.addEventListener('click', () => {
        carrito.classList.toggle('visible');
    });
}


// Función y Listener para cargar la página correspondiente

function goToPage(event) {
    const pagina = parseInt(event.target.dataset.object); 
    if (pagina) {
        switch (pagina) {
            case 1:
                init(productos1);
                break;
            case 2:
                init(productos2); 
                break;
            case 3:
                init(productos3);
                break;
        }
    }
}

buttonsSigAnt.forEach(button => button.addEventListener('click',goToPage));


// Función para calcular y pintar el Total del carrito

function calcularTotal() {
    const listaItems = carritoListado.querySelectorAll('li');
    let total = 0;
    // Sumatorio de todos los pxq
    listaItems.forEach(item => {
        total += parseInt(item.dataset.pxq || 0);
    });
    // Actualizar el spanTot en importeTot
    let spanTot = importeTot.querySelector('span');
    if (!spanTot) {
        spanTot = document.createElement('span');
        importeTot.appendChild(spanTot);
    }
    spanTot.textContent = `€${total}`;
}


// Funciones para aumentar y disminuir cantidad

function incrementarCantidad(li, span, precio, stock) {
    if (li.dataset.cant < stock) {
        li.dataset.cant = parseInt(li.dataset.cant) + 1;
        span.textContent = `${li.dataset.nombre} - €${precio} x ${li.dataset.cant}`;
        li.dataset.pxq = parseInt(li.dataset.cant) * precio;
        calcularTotal();
    } else {
        alert("Ya no hay más stock de este producto");
    }
}

function disminuirCantidad(li, span, precio) {
    let cantidadActual = parseInt(li.dataset.cant);
    if (cantidadActual > 1) {
        cantidadActual -= 1;
        li.dataset.cant = cantidadActual;
        span.textContent = `${li.dataset.nombre} - €${precio} x ${cantidadActual}`;
        li.dataset.pxq = cantidadActual * precio;
        calcularTotal();
    } else {
        li.remove(); // Elimina el producto si la cantidad llega a 0
        calcularTotal();
    }
}


// Función para agregar productos al Carrito

function agregarCarrito(event) {
    const planta = event.target.dataset.nombre;
    const precio = parseInt(event.target.dataset.precio);
    const stock = parseInt(event.target.dataset.stock);

    // Verificar si el producto ya está en el carrito
    const existe = Array.from(carritoListado.children).some(li => 
        li.querySelector('span')?.textContent.includes(planta)
    );
    if (existe) {
        alert("Ya has agregado este producto al carrito");
        return; // Salir de la función si ya existe
    }

    // Crear el nuevo elemento <li>
    const li = document.createElement('li');
    li.dataset.cant = 1;
    li.dataset.pxq = li.dataset.cant * precio;
    li.dataset.nombre = planta;

    const span = document.createElement('span');
    span.textContent = `${planta} - €${precio} x ${li.dataset.cant}`;

    const butEliminar = document.createElement('button');
    butEliminar.textContent = 'Eliminar';

    const butSignoMas = document.createElement('button');
    butSignoMas.textContent = '+';
    butSignoMas.classList.add('mas');

    const butSignoMenos = document.createElement('button');
    butSignoMenos.textContent = '-';
    butSignoMenos.classList.add('menos');

    const hr = document.createElement('hr');

    // Crear Eventos Listeners para Eliminar, Más y Menos
    butEliminar.addEventListener('click', () => {
        li.remove();
        calcularTotal();
    });

    // Delegar la lógica de incremento y decremento a las funciones externas
    butSignoMas.addEventListener('click', () => incrementarCantidad(li, span, precio, stock));
    butSignoMenos.addEventListener('click', () => disminuirCantidad(li, span, precio));

    li.append(span, butEliminar, butSignoMas, butSignoMenos, hr);
    carritoListado.append(li);

    calcularTotal();
}


// Función para vaciar el carrito

vaciarCarrito.addEventListener('click', () => {
    if(carritoListado.childElementCount === 0){
        alert("El carrito está vacío");
    }else{
        carritoListado.innerHTML = ''; // Vacía todos los elementos <li>
        calcularTotal(); // Recalcula el total (debería ser 0)
    } 
});


// Función para comprar los productos
// PDTE NO ME SALE
// PDTE NO ME SALE
// PDTE NO ME SALE
// PDTE NO ME SALE
// PDTE NO ME SALE
// PDTE NO ME SALE
// PDTE NO ME SALE



// Función para crear y pintar los artículos

function printOneProduct(product, dom){

    const article = document.createElement('article');
    const div = document.createElement('div');
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src= product.imagen;
    img.alt= product.nombre;

    const h3 =document.createElement('h3');
    h3.textContent = product.nombre;

    const p1 = document.createElement('p');
    p1.textContent=product.descripcion;

    const p2 = document.createElement('p');
    p2.textContent=`Precio: €${product.precio}`;

    const button = document.createElement('button');
    button.textContent = "Agregar al carrito";

    button.addEventListener('click',agregarCarrito);
    button.dataset.id=product.id;
    button.dataset.nombre=product.nombre;
    button.dataset.precio=product.precio;
    button.dataset.stock=product.stock;

    figure.appendChild(img);
    div.append(figure, h3, p1, p2, button);
    article.appendChild(div);
    dom.appendChild(article);
}

function printAllProducts(list, dom){
    dom.innerHTML = "";
    list.forEach(product => printOneProduct(product, dom))
}


// Función par a iniciar y en la que se definen los datasets de los botones de paginación

function init (list){
    buttonsSigAnt[0].dataset.object = list.info.prev ? list.info.prev : null;
    buttonsSigAnt[1].dataset.object = list.info.next ? list.info.next : null;
    printAllProducts(list.results, containerPlantas);
    console.log(list.results)
};


// El script arranca cargando el primero objeto
init (productos1)












