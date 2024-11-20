let email = document.querySelector('#email')
let contrasena = document.querySelector('#contra')
let formulario = document.querySelector('.formulario')

formulario.addEventListener ('submit', function(evento){
    evento.preventDefault()
    if(email.value == `` ){
        alert('Por favor complete el campo email');
        return;
    }else if(contrasena.value == `` ){
        alert('Por favor complete el campo contraseña');
        return;
    }  
})