fetch('https://dummyjson.com/recipes') 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);
        
        let params = location.search; 
        let recetaID = new URLSearchParams(params);
        let buscador = recetaID.get("Buscador");
        let id = recetaID.get("id");

        if(id){
            let receta = data.find(function(item){
                return item.id == id;
            })
            if(receta) {
                document.querySelector(".nombre_receta").textContent = receta.title;
                document.querySelector(".instrucciones").textContent = receta.instructions;
                document.querySelector(".receta_foto").src = receta.image;
                document.querySelector(".receta_foto").alt = "Foto de " + receta.title;

                let listaCategorias = document.querySelector(".categorias")
            }
              
    });


.catch(function(error) {
    console.error('El error es' + error;
});
