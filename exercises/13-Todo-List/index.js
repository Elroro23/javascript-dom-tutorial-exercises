let input = document.querySelector("#addToDo"); //Seleccionamos el input
input.addEventListener("keypress", function (event) { //añadimos un listener para el evento "keypress".
    if (event.key === "Enter") { //Si la tecla presionada es "Enter" entonces, ejecuta el código dentro del bloque.
        let newTask = input.value; //Obtenemos el valor del input y lo almacenamos en la variable.
        if (newTask.trim() !== "") { //verificamos que el valor del input no esté vacío.
            let li = document.createElement("li"); //Creamos un elemento li.
            li.innerHTML = `<span><i class ="fa fa-trash"></li></span> ${newTask}`; //Añadimos contenido HTML dentro de li
            document.querySelector("ul").appendChild(li); //Añadimos li al final de la lista ul.
            input.value = ""; //Limpiamos el input para que este vacío para una nueva entrada.
        }
    }
});
//Eliminamos tareas.
document.querySelector("ul").addEventListener("click", function (event) { //Cuando se hace click en la lista se ejecuta el código.
    if (event.target.classList.contains("fa-trash")) { //En la función, si el elemento clicado (event.target) tiene la clase fa-trash se ejecuta el código de if.
        let li = event.target.parentElement.parentElement; //Nos paramos en el icono de la papelera y subimos hasta el li que tiene el icono.
        li.remove(); //Eliminamos ese li.
    };
});
