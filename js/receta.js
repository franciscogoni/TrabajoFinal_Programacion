let params = location.search; 
let recetaID = new URLSearchParams(params);
let id = recetaID.get("id"); 

fetch(`https://dummyjson.com/recipes/${id}`) 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);

        document.querySelector(".nombre_receta").innerText = data.name;

        let instrucciones = document.querySelector(".instrucciones")
        for (let index = 0; index < data.instructions.length; index++) {
            instrucciones.innerText += " " + data.instructions[index]
            
        }
        
        document.querySelector(".receta_foto").src = data.image;
        document.querySelector(".receta_foto").alt = "Foto de " + data.name;

        let lista_categorias = document.querySelector(".lista_categorias")
        for (let index = 0; index < data.tags.length; index++) {
            lista_categorias.innerHTML += `<li>${data.tags[index]}</li>`    
        }
    })
.catch(function(error){
    console.log(error)
    }) 