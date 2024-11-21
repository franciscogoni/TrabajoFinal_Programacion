fetch('https://dummyjson.com/recipe/tags')
    .then(function (response) {
        return response.json(); 
    })
    .then(function (tags){
        console.log(tags)
        let listacategorias = document.querySelector(".lista_categorias")
        tags.forEach(function(categoria){
            let li = document.querySelector("li")
        })
    })