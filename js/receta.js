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
        let tiempo = document.querySelector(".tiempo_coccion").innerText += " " + data.prepTimeMinutes + " minutos."
        document.querySelector(".receta_foto").src = data.image;
        document.querySelector(".receta_foto").alt = "Foto de " + data.name;

        let lista_categorias = document.querySelector(".lista_categorias")
        for (let index = 0; index < data.tags.length; index++) {
            lista_categorias.innerHTML += `<article class ="box" ><a class= "link_receta" href = "./category.html?id=${data.tags[index]}"> ${data.tags[index]} </a></article>`    
        }
    })
.catch(function(error){
    console.log(error)
    }) 

    let busc = document.querySelector('.buscador_input')
let formulario = document.querySelector('.formulario')

    formulario.addEventListener('submit', function(error){
        error.preventDefault();
        if (busc.value == ''){
            alert('Debes completar el buscador')
        }else if (busc.value.length < 3){
            alert('El buscador debera tener al menos 3 letras')
        }else{
            this.submit()
            }
        })