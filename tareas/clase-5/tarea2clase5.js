document.querySelector("#boton").onclick = function(){
    const nombre = document.querySelector("#nombre").value
    const segundoNombre = document.querySelector("#segundo-nombre").value
    const apellido = document.querySelector("#apellido").value
    const edad = document.querySelector("#edad").value
    const $nombreCompleto = nombreCompleto(nombre, segundoNombre, apellido, edad)

    document.querySelector("#titulo").textContent = "Bienvenido " + nombre 
    document.querySelector("#nombre-completo").value = $nombreCompleto

    return false
}

function nombreCompleto (nombre, segundoNombre, apellido, edad){
    return nombre + " " + segundoNombre + " " + apellido + " y tenes " + edad + " años."
}



