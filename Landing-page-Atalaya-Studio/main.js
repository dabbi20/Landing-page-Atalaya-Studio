//1. Helpers (pequeñas funciones para reutilizar)
document.addEventListener("DOMContentLoaded",() =>{
    const form = document.querySelector("form")
    const status = document.getElementById("form-status")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        //Mostramos mensaje accesible
        status.hidden = false
        status.textContent = "Gracias, tu solicitud fue registrada"

        //Limpiar formulario
        form.reset()
    })
})

//2. Formulario
function initForm(){

}

//3. Menu mobile

function initMenu(){

}

//4. Testimonios API

async function loadTestimonials() {
    
}

//5. Inicializacion
document.addEventListener("DOMContentLoaded", () => {
    initForm()
    initMenu()
    loadTestimonials()
})