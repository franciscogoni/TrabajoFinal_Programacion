fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function (data) {

    console.log(data);

    let params = new URLSearchParams(window.location.search);
    let recipeId = params.get("id");

    if (!recipeId) {
        alert("No se especificó ninguna receta.");
        window.location.href = "index.html"; 
        return;
    }
    let receta = null;
    for (let i = 0; i < data.recipes.length; i++) {
        if (data.recipes[i].id == recipeId) {
            receta = data.recipes[i];
            break;
        }
    }
    if (!receta) {
        alert("No se encontró la receta.");
        window.location.href = "index.html";
        return;
    }
    document.querySelector(".nombre_receta").textContent = receta.title;
    document.querySelector(".instrucciones").textContent = receta.instructions;
    document.querySelector(".tiempo_coccion").textContent = receta.cookingTime || "No especificado";
    document.querySelector(".receta_foto").src = receta.image;
    document.querySelector(".receta_foto").alt = "Imagen de " + receta.title;
    
    let listaCategorias = document.querySelector(".categorias");
    for (let i = 0; i < receta.tags.length; i++) {
        let li = document.createElement("li");
        let enlace = document.createElement("a");
        enlace.textContent = receta.tags[i];
        enlace.href = "category.html?category=" + encodeURIComponent(receta.tags[i]);
        li.appendChild(enlace);
        listaCategorias.appendChild(li);
    }
})
.catch(function (error) {
    console.error("Error al obtener los datos:", error);
    alert("Hubo un problema al cargar los datos.");
});