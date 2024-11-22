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