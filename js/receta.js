fetch('https://dummyjson.com/recipes') 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);

        let params = location.search; 
        let recetaID = new URLSearchParams(params);
        let id = recetaID.get("id"); 
        let categoria = recetaID.get("categoria"); 

        if (id) {
            let receta = data.recipes.find(function(item) {
                return item.id == id;
            });

            if (receta) {
                
                document.querySelector(".nombre_receta").textContent = receta.title;
                document.querySelector(".instrucciones").textContent = receta.instructions;
                document.querySelector(".receta_foto").src = receta.image;
                document.querySelector(".receta_foto").alt = "Foto de " + receta.title;

                
                if (categoria) {
                    let recetasFiltradas = data.recipes.filter(function(item) {
                        return item.tags.includes(categoria);
                    });

                    let listaRecetas = document.querySelector(".lista_recetas");
                    recetasFiltradas.forEach(function(receta) {
                        let li = document.createElement("li");
                        li.textContent = receta.title;
                        listaRecetas.appendChild(li);
                    });
                }
            } 
        } 
    })
    .catch(function(error) {
        console.error("El error es: " + error);
    });
