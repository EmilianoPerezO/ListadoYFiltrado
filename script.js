const URL = `https://fakestoreapi.com/products`;
const btnF = document.getElementById("filterBtn");
const container = document.getElementById('contenedor');

const view = document.getElementById("contProducto");
const storeValue = localStorage.getItem("catID");

var minimo = document.getElementById('minPrice').value;
var maximo = document.getElementById('maxPrice').value;

const result = [];

fetch(URL)
    .then((response) => response.json())
    .then((data) => showData(data))
    // .then((data) => showData(data))

    .catch((error) => console.error("Error al obtener los datos:", error));


function showData(URL) {
    // El for itera sobre los elementos del array
    for (const item of URL) {
        // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
        container.innerHTML += `<div class="card">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-price">${item.price}</p>
            <p class="card-description">${item.description}</p>
        </div>
        </div>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
    }

}




btnF.addEventListener('click', () => {
    result = data.filter(rango)
    showData(result);

})

function rango() {

    return data.price >= minimo && data.price <= maximo;

};
