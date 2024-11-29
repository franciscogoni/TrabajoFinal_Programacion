let email = document.querySelector('#email')
let contra = document.querySelector('#password')
let noMail = document.querySelector('.sinMail')
let noContra = document.querySelector('.sinContrasena')
let form = document.querySelector('.registro')

noMail.style.display = 'none'
noContra.style.display = 'none'

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value == ''){
        noMail.style.display = 'block'
    }else if(contra.value == ''){
        noContra.style.display = 'block'
    }else{
        this.submit()
    }
    
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