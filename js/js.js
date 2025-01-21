
// creación de elementos que capturamos en el DOM

const buttonsSigAnt = document.querySelectorAll('.container #flex button');
const containerPlantas = document.querySelector('.container #plantas');
const carritoListado = document.querySelector('#carrito #cajaListado #listado');
const importeTot = document.querySelector('#carrito #importeTot');
const vaciarCarrito = document.querySelector('#carrito #icompraFinal #butVaciar');
const comprar = document.querySelector('#carrito #icompraFinal #butComprar');

// Función y Listener para manejar el evento de clic y cargar la página correspondiente

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


// función para calcular y pintar el Total del carrito

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


// función para agregar al Carrito

function agregarCarrito(event){
   
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
   
    /* <li>
        <span>Planta - €Imp x Cant</span>
        <button class="butEliminar">Eliminar</button>
        <button class="butSignoMas">+</button>
        <button class="butSignoMenos">-</button>
    </li>*/
    
    const li = document.createElement('li');
    li.dataset.cant=1;
    li.dataset.pxq=li.dataset.cant * precio

    const span = document.createElement('span')
    span.textContent=`${planta} - €${precio} x ${li.dataset.cant}`;

    const butEliminar = document.createElement('button')
    butEliminar.textContent='Eliminar';

    const butSignoMas = document.createElement('button')
    butSignoMas.textContent='+';
    butSignoMas.classList.add('mas');

    const butSignoMenos = document.createElement('button')
    butSignoMenos.textContent='-';
    butSignoMenos.classList.add('menos');

    const hr = document.createElement('hr')
    
    //Creación de Eventos Listeners en eventos

    butEliminar.addEventListener('click', () => {
        li.remove();
        calcularTotal(); 
    });

    butSignoMas.addEventListener('click', () => {
        if(li.dataset.cant < stock){
            li.dataset.cant = parseInt(li.dataset.cant)+1;
            span.textContent = `${planta} - €${precio} x ${li.dataset.cant}`;
            li.dataset.pxq = parseInt(li.dataset.cant) * precio;
            calcularTotal();
        }else{
            alert("Ya no hay más stock de este producto");
        }
    });

    butSignoMenos.addEventListener('click', () => {
        let cantidadActual = parseInt(li.dataset.cant);
        if (cantidadActual > 1) {
            cantidadActual -= 1; 
            li.dataset.cant = cantidadActual; 
            span.textContent = `${planta} - €${precio} x ${cantidadActual}`; 
            li.dataset.pxq = cantidadActual * precio; 
            calcularTotal(); // Recalcula el total
        } else {
            li.remove(); // Elimina el producto si la cantidad llega a 0
            calcularTotal(); // Recalcula el total tras eliminar el producto
        }
    });


    li.append(span, butEliminar, butSignoMas, butSignoMenos, hr);
    carritoListado.append(li);

    calcularTotal();
}




// función para crear y pintar los artículos

/*
<article>
    <div>
        <figure>
            <img src="https://naturalpoland.com/wp-content/uploads/aloe-vera-in-africa.jpg" alt="AloeVera">
        </figure>
        <h3>Nombre de la planta</h3>
        <p>Descripción de la planta</p>
        <p>Precio: €14</p>
        <button>Agregar al carrito</button>
    </div>
</article>
*/

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



// función par a iniciar y en la que se definen los datasets de los botones de paginación
function init (list){
    buttonsSigAnt[0].dataset.object = list.info.prev ? list.info.prev : null;
    buttonsSigAnt[1].dataset.object = list.info.next ? list.info.next : null;
    printAllProducts(list.results, containerPlantas);
    console.log(list.results)
};

// el script arranca cargando el primero objeto
init (productos1)












