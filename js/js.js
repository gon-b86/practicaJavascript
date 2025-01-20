
// creación de elementos que capturamos en el DOM

const buttonsSigAnt = document.querySelectorAll('.container #flex button');
const containerPlantas = document.querySelector('.container #plantas');
const carritoListado = document.querySelector('#carrito #cajaListado #listado');


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
            default:
                console.log("Listado no válido."); 
                break;
        }
    }
}

buttonsSigAnt.forEach(button => button.addEventListener('click',goToPage));


// función borrar del carrito

function borrarProducto(event){
    event.target.parentNode.remove() 
}


// función para agregar al Carrito

function agregarCarrito(event){
   
    const planta = event.target.dataset.nombre;
    const precio = parseInt(event.target.dataset.precio);
    const cantidad = 1;

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
    const span = document.createElement('span')
    const butEliminar = document.createElement('button')
    const butSignoMas = document.createElement('button')
    const butSignoMenos = document.createElement('button')
    const hr = document.createElement('hr')

    span.textContent=`${planta} - €${precio} x ${cantidad}`;

    butEliminar.textContent='Eliminar';
    butSignoMas.textContent='+';
    butSignoMenos.textContent='-';

    butSignoMas.classList.add('mas');
    butSignoMenos.classList.add('menos');

    butEliminar.addEventListener('click',borrarProducto);
    /*butSignoMas.addEventListener('click',sumarUno);
    butSignoMenos.addEventListener('click',restarUno);*/
    

    li.append(span, butEliminar, butSignoMas, butSignoMenos, hr);
    carritoListado.append(li);

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












