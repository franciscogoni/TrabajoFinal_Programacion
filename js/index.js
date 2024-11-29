fetch('https://dummyjson.com/recipes?limit=10')
.then(function(response){
    return response.json();
})
.then(function(data){ 
    console.log(data);
    let listaRecetas = document.querySelector('.recetas');
    let recetas = '';
    for (let i=0; i<data.recipes.length; i++){
        console.log(i);

       recetas = recetas + `<article class="articulos" class="recetovich">
         <img src=${data.recipes[i].image} alt='' width=100 height=100>
         <h2>${data.recipes[i].name}.</h2>
          <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
          <p>Name: ${data.recipes[i].name}</p>
          <a href='./receta.html?id=${data.recipes[i].id}'>Mas detalles</a>
        </article>`;
        }
    listaRecetas.innerHTML = recetas
}) 
.catch(function(error){
    console.log(error)
}) 


let boton = document.querySelector('.boton')

let skip = 10

boton.addEventListener('click', function(){
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
.then(function(response){
    return response.json();
})
.then(function(data){ 
    console.log(data);
    let listaRecetas = document.querySelector('.recetas');
    let recetas = '';
    for (let i=0; i<data.recipes.length; i++){
        console.log(i);

       recetas = recetas + `<article class="articulos">
         <img src=${data.recipes[i].image} alt='' width=100 height=100>
         <h2>${data.recipes[i].name}.</h2>
          <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
          <p>Name: ${data.recipes[i].name}</p>
          <a href='./receta.html?id=${data.recipes[i].id}'>Mas detalles</a>
        </article>`;
        }
    listaRecetas.innerHTML += recetas
}) 
.catch(function(error){
    console.log(error)
}) 

skip = skip + 10

})