const buttons = document.querySelectorAll('#flex button');
const containerPlantas = document.querySelector('.container #plantas');

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
    img.alt= product.nonmbre;

    const h3 =document.createElement('h3');
    h3.textContent = product.nombre;

    const p = document.createElement('p');
    p.textContent=`Precio: €${product.precio}`;

    const button = document.createElement('button');
    button.textContent = "Agregar al carrito";

    figure.appendChild(img);
    div.append(figure, h3, p, button);
    article.appendChild(div);
    dom.appendChild(article);

}


function printAllProducts(list, dom){
    list.forEach(product => printOneProduct(product, dom))
}




printAllProducts(productos0, containerPlantas);