const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const expediente = document.getElementById("email")
const contraseña = document.getElementById("cont")
const carrera = document.getElementById("carrera")
const form = document.getElementById("form")

form.addEventListener('submit', e=>{
    e.preventDefault
    localStorage.setItem('Nombre', nombre.value)
    localStorage.setItem('Apellido', apellido.value)
    localStorage.setItem('Expediente', expediente.value)
    localStorage.setItem('Cont', contraseña.value)
    localStorage.setItem('Carrera', carrera.value)
})
