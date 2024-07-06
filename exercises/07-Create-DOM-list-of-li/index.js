let beginning = "<ul>";
//Concatenamos los elementos que se verán en el HTML.
let listString = "<li>First Item</li>" + "<li>Second Item</li>" + "<li>Third Item</li>";
let ending = "</ul>";

//Agregamos el contenido concatenando las variables para que se vean de manera correcta en el HTML. 
document.body.innerHTML = beginning + listString + ending;
