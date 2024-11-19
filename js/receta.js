fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let params = new URLSearchParams(window.location.search);
    let recipeId = params.get("id");

}

.catch(function (error) {
console.error("Error", error);
    });