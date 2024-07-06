//referenciamos el id del elemento al que queremos aplicarle el evento.
let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() { //Le aplicamos un evento
//Creamos un elemento para añadir a la lista ul cuando se haga click al botón.
let forLi  = document.createElement("li"); 
forLi.innerHTML = "Forth element"; //Añadimos contenido al elemento.
let myList = document.querySelector("#myList"); //Referenciamos nuestra lista ul.
myList.appendChild(forLi); //Añadimos nuestro li a la lista ul.
});
