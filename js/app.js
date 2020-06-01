// Variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const formulario = document.getElementById('enviar-mail')
const btnEnviar = document.getElementById('enviar')
const resetBtn = document.getElementById('resetBtn')



// EventListeners

eventListeners()

function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp)

    email.addEventListener('blur', validarCampo)

    asunto.addEventListener('blur', validarCampo)

    mensaje.addEventListener('blur', validarCampo)

    formulario.addEventListener('submit', enviarFormulario)
    resetBtn.addEventListener('click', formularioReset)
}

// Deshabilita el boton de enviar el formulario

function inicioApp(){
    btnEnviar.disabled = true
}

// Resetea el Formulario

function formularioReset(e){
    e.preventDefault()
    formulario.reset()
}


function validarCampo(){
    // Valida la longitud de los campos    
    validarLongitud(this)
    
    if (this.type === 'email'){
        validarEmail(this)
    }

    let errores = document.querySelectorAll('.error')
    if ( email.value !== '' && asunto.value !== '' && mensaje.value !== '' ){
        if ( errores.length === 0 ){
            btnEnviar.disabled = false
        }
    }
}

function enviarFormulario(e){
    e.preventDefault()
    const animationMensajes = document.getElementById('spinner')
    animationMensajes.style.display = 'block'

    setTimeout(()=>{
        animationMensajes.style.display = 'none'
        formulario.reset()
        inicioApp()
    },2500)
}

// Valida el email
function validarEmail(campo){
    let email = campo.value
    if(email.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

// Valida la longitud de los campos
function validarLongitud(campo){
    
    if (campo.value.length > 0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}



