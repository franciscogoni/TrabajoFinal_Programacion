fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function(data){ 
    console.log(data);
    let listaRecetas = document.querySelector('.recetas');
    let recetas = '';
    for (let i=0; i<11; i++){
        console.log(i);

       recetas = recetas + `<article>
         <img src=${data.recipes[i].image} alt='' width=100 height=100>
         <h2>${data.recipes[i].name}.</h2>
          <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
          <a href=''>Name: ${data.recipes[i].name}</a>
        </article>`;
        }
    listaRecetas.innerHTML = recetas
}) 
.catch(function(error){
    console.log(error)
}) 