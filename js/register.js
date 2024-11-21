let email = document.querySelector('#email')
let contra = document.querySelector('#password')
let noMail = document.querySelector('.sinMail')
let noContra = document.querySelector('.sinContrasena')
let form = document.querySelector('.registro')

noMail.style.display = 'none'
noContra.style.display = 'none'

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value === ''){
        noMail.style.display = 'block'
        return
    }else if(contra.value === ''){
        noContra.style.display = 'block'
        return
    }
    form.action = "./index.html"
    
})
