const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputEmail = document.getElementById("inputEmail")
const inputMotivo = document.getElementById("inputMotivo")
const inputMensaje = document.getElementById("inputMensaje")
const boton = document.getElementById("boton")

function alertaConfirmacion() {

        alert(`
        DE: ${inputNombre.value} ${inputApellido.value} (${inputEmail.value})\n
            ASUNTO: ${inputMotivo.value}\n
            MENSAJE:\n
            ${inputMensaje.value}
        `)
}

function evaluar() {
    (inputNombre.value != "" && inputApellido.value != "" && inputEmail.value != "" && inputMensaje.value != "" && inputMotivo.value != 0) ? alertaConfirmacion() : alert("Por favor, rellene todos los campos.")
}

boton.addEventListener("click", evaluar)

