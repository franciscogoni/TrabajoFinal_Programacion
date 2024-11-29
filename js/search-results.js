let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let busqueda= queryStringObjeto.get ("busqueda")
fetch(`https://dummyjson.com/recipes/search?q=${busqueda}`)
