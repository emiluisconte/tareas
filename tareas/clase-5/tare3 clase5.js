document.querySelector("#siguiente").onclick = function () {
    //crear tantas clases como el usuario puso en el input "cantidad de clases"
    //3 inputs por clase (horas minutos y segundos)
    //los inputs se agregan en el contenedor
    document.querySelector("#contenedor").innerHTML = ""


    const cantidadDeClases = Number(document.querySelector("#cantidad-de-clases").value)

    for (let i = 0; i < cantidadDeClases; i++) {

        const clase = document.createElement("div")
        const inputHoras = document.createElement("input")
        const inputMinutos = document.createElement("input")
        const inputSegundos = document.createElement("input")

        inputHoras.className = "horas"
        inputMinutos.className = "minutos"
        inputSegundos.className = "segundos"

        inputHoras.type = "number"
        inputMinutos.type = "number"
        inputSegundos.type = "number"

        inputHoras.placeholder = "Cantidad de horas"
        inputMinutos.placeholder = "Cantidad de minutos"
        inputSegundos.placeholder = "Cantidad de segundos"

        clase.appendChild(inputHoras)
        clase.appendChild(inputMinutos)
        clase.appendChild(inputSegundos)
        document.querySelector("#contenedor").appendChild(clase)
    }
}

document.querySelector("#calcular").onclick = function () {
    //aqui sumaremos la cantidad de segundos, luego la de minutos y por ultimo las horas
    const inputsSegundos = document.querySelectorAll(".segundos")

    let totalSegundos = 0
    for (let i = 0; i < inputsSegundos.length; i++) {
        totalSegundos += Number(inputsSegundos[i].value); 
        //esto es lo mismo que poner totalSegundos = totalsegundos + Number(inputsSegundos[i].value) 
    }

    const inputsMinutos = document.querySelectorAll(".minutos")
    let totalMinutos = 0
    for (let i = 0; i < inputsMinutos.length; i++) {
        totalMinutos += Number(inputsMinutos[i].value);
    }

    const inputsHoras = document.querySelectorAll(".horas")
    let totalHoras = 0
    for (let i = 0; i < inputsHoras.length; i++) {
        totalHoras += Number(inputsHoras[i].value);
    }

    const segundosAminutos = Math.trunc(totalSegundos / 60)
    const segundosRestantes = totalSegundos % 60
    
    totalMinutos = totalMinutos + segundosAminutos

    const minutosAhoras = Math.trunc(totalMinutos / 60)
    const minutosRestantes = totalMinutos % 60

    totalHoras = totalHoras + minutosAhoras

    document.querySelector("#resultado").textContent = `el tiempo total es: ${totalHoras}:${minutosRestantes}:${segundosRestantes}`



}