// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector

//Accedemos al elemento que queremos eliminar mediante su referencia, en este caso un ID.
let removeSecondLi = document.querySelector('#secondElement');
removeSecondLi.parentNode.removeChild(secondElement);
//Especificamos la variable donde seleccionamos el elemento.
//Accedemos al elemento padre mediante ".parentNode".
//Eliminamos el elemento con el método  ".removeChild(nombre del id, clase o tag del elemento a eliminar)".


