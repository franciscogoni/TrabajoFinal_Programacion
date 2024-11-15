fetch('https://dummyjson.com/recipes')

.then(function(response){
    response.json()

})
.then(function(data){
    console.log(data)
})