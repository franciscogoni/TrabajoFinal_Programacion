fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let recetas = document.querySelector(``)
