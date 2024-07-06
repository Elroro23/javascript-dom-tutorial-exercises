//Seleccionamos el id del padre del elemento que queremos eliminar
let selectUl = document.querySelector('#parentLi'); 
let childNodes = selectUl.childNodes; //Accedemos a los elementos de ese padre con .childNodes.
let secondLi = childNodes[3]; //Seleccionamos al hijo .childNodes[indice del elemento].Recuerda que el indice toma en cuenta los espacios
selectUl.removeChild(secondLi); //Eliminamos al hijo con .removeChild(variable donde seleccionamos al hijo).