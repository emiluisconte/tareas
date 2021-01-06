/*
TAREA 1: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector("#siguiente").onclick = function () {

    document.querySelector("#contenedor").innerHTML = ""

    const cantidadDeIntegrantes = Number(document.querySelector("#cantidad-de-integrantes").value)

    for (i = 0; i < cantidadDeIntegrantes; i++) {
        crearIntegrante()
    }
}

function crearIntegrante() {
    const integrante = document.createElement("div")
    const inputEdadIntegrante = document.createElement("input")
    integrante.className = "integrante"
    inputEdadIntegrante.className = "edad-integrante"
    inputEdadIntegrante.placeholder = "Edad integrante"
    integrante.appendChild(inputEdadIntegrante)
    document.querySelector("#contenedor").appendChild(integrante)

}

document.querySelector("#calcular").onclick = function () {

    const cantidadDeIntegrantes = document.querySelectorAll(".edad-integrante")
    const edades = []
    for (let i = 0; i < cantidadDeIntegrantes.length; i++) {
        edades.push(Number(cantidadDeIntegrantes[i].value))


    }
    //ya tengo el array, ahora seguimos calculando el numero mas alto (edad)
    // pra recorrer el array "edades" utilizo un nuevo for
    // debugger
    let edadMayor = 0
    for (let i = 0; i < edades.length; i++){
        const edad = edades[i]

        if(edad>edadMayor){
            edadMayor = edad
        }

    }

    const mayorEdad = document.querySelector("#mas-grande")
    mayorEdad.textContent = "La edad mayor es " + edadMayor

    let edadMenor = Infinity //infinity es lo mismo que poner un numero infinito positivo
    for (let i = 0; i < edades.length; i++){
        const edad = edades[i]

        if(edad<edadMenor){
            edadMenor = edad
        }

    }
    const menorEdad = document.querySelector("#mas-chico")
    menorEdad.textContent = "La edad menor es " + edadMenor


    let totalEdades = 0 
    for(let i=0;i<edades.length; i++){
        const edad = edades[i]
        totalEdades += edad  //+= esto es lo mismo que poner totalEdadas = totalEdades + algo
        
    }

    const promedio = totalEdades/edades.length
    document.querySelector("#promedio-edades").textContent = "El promedio de edades es " + promedio.toFixed(2)
}
