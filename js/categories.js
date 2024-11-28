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
                <li>
                    <a href="./category.html?id=${category}">
                        ${category}
                    </a>
                </li>`;
        }
    })
    .catch(function(error) {
        console.error("El error es: " + error); 
    });

