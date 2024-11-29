let email = document.querySelector('#email')
let contrasena = document.querySelector('#contra')
let formulario = document.querySelector('.forms')
let link = document.querySelector('.link')
console.log(formulario)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value == '' ){
        alert('Por favor complete el campo email');
        
    }else if(contrasena.value == '' ){
        alert('Por favor complete el campo contraseña');
        
    }else{
        this.submit()
    }
})

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