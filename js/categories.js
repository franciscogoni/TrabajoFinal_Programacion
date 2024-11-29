let params = location.search;
let querystring = new URLSearchParams(params);
let categories = querystring.get("Categories"); 

fetch('https://dummyjson.com/recipe/tags')
    .then(function(response) {
        return response.json(); 
    })
    .then(function(tags) {
        console.log(tags); 

        let listaCategorias = document.querySelector('.lista_categorias');

       
        for (let index = 0; index < tags.length; index++) {
            let category = tags[index]; 
            listaCategorias.innerHTML += `
                <article class ="box">
                    <a class = "link_receta" href="./category.html?id=${category}">
                        ${category}
                    </a>
                </article>`;
        }
    })
.catch(function(error){
    console.log(error)
    }) 

