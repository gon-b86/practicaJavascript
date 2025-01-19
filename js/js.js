
// creación de elementos que capturamos en el DOM

const buttonsSigAnt = document.querySelectorAll('.container #flex button');
const containerPlantas = document.querySelector('.container #plantas');

// Función y Listener para manejar el evento de clic y cargar la página correspondiente

function goToPage(event) {
    const listado = parseInt(event.target.dataset.listado);  // obtiene el listado de productos a mostrar
    
    if (listado) {
        switch (listado) {
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

buttonsSigAnt.forEach(button => button.addEventListener('click',goToPage))

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
    buttonsSigAnt[0].dataset.listado = list.info.prev ? list.info.prev : null;
    buttonsSigAnt[1].dataset.listado = list.info.next ? list.info.next : null;
    printAllProducts(list.results, containerPlantas);
    console.log(list.results)
};

// el script arranca cargando el primero objeto
init (productos1)