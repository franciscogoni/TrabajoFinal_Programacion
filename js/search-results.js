let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let busqueda= queryStringObjeto.get("busqueda")

fetch(`https://dummyjson.com/recipes/search?q=${busqueda}`)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data){
        console.log(data);

        let listaBuscada = document.querySelector(".buscador");
        let buscadoHTML = "";

        for (let busca of data.recipes) {
            buscadoHTML += `<article class="articulos">
                <img src="${busca.image}" alt='Imagen de ${busca.image}' width=100 height=100>
                <h2>${busca.name}.</h2>
                <p>Nivel de dificultad: ${busca.difficulty}</p>
                <a href='./receta.html?id=${busca.id}'>Mas detalles</a>
                </article>`;
        }

        listaBuscada.innerHTML = buscadoHTML; 
    })

.catch(function(error){
    console.log(error)
}) 
    