let params = location.search;
let queryString = new URLSearchParams(params);
let category = queryString.get("id");  
document.querySelector(".tipo_categoria").innerText = category;  
        

fetch(`https://dummyjson.com/recipes/tag/${category}`)  
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        let listaRecetas = document.querySelector(".recetas_categorias");  
        let recetasHTML = "";

        for (let receta of data.recipes) {
            recetasHTML += `
                <article class="receta">
                    <img src="${receta.image}" alt="Imagen de ${receta.name}" class="receta_imagen">
                    <h2 class="receta_titulo">${receta.name}</h2>
                    <p class="receta_dificultad">Nivel de dificultad: ${receta.difficulty}</p>
                    <a class="link_receta" href="./receta.html?id=${receta.id}" class="receta_detalle">Ver más detalles</a>
                </article>`;
        }
        
        listaRecetas.innerHTML = recetasHTML; 
    })
.catch(function(error){
    console.log(error)
        }) 