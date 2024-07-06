//Referenciamos el id de nuestro botón.
let button = document.getElementById("superDuperButton"); 
button.addEventListener("click", function() { //Agregamos un evento al botón con .addEventListener();
	// Your code here
let div = document.createElement("div"); //Creamos un elemento con .createElement().
div.style.background = "yellow"; //Le cambiamos el stilo css al div.
div.innerHTML = "Hello World"; //Le agregamos un elemento a ese div.
document.body.appendChild(div); //Agregamos el div al body del html.
});
