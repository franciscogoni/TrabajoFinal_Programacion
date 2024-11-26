let params = location.search;
let queryString = new URLSearchParams(params);
let category = queryString.get("category");

document.querySelector(".tipo_categoria").innerText = `${category}`;

fetch(`https://dummyjson.com/recipie/tag/${category}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        let listaRecetas = document.querySelector(".receta_categorias");
        let recetasHTML = "";

        for (let receta of data.recipes) {
            recetasHTML += `<article class="receta">
                <img src="${receta.image}" alt="Imagen de ${receta.name}" class="receta_imagen">
                <h2 class="receta_titulo">${receta.name}</h2>
                <p class="receta_dificultad">Nivel de dificultad: ${receta.difficulty}</p>
                <a href="./receta.html?id=${receta.id}" class="receta_detalle">Ver más detalles</a>
            </article>`;
        }

        listaRecetas.innerHTML = recetasHTML;
    })
    .catch(function(error){
        console.log(error)
    }) 