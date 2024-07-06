//Definimos una variable con un array de paises(strings).
let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let select = document.querySelector("#mySelect"); //Seleccionamos el id del elemento que queremos agregarle los paises.

for (let i = 0; i < countries.length; i++) { //Definios un bucle que itere sobre los paises.
    let option = document.createElement("option"); //En cada iteración que cree un elemento <option>.
    option.value = countries[i]; //Datos que se enviaran al servidor al seleccionar una opción(paises).
    option.innerText = countries[i]; //Lo que el usuario ve(paises).
    select.appendChild(option); //Agregamos <option> como hijo de <select>. 
}
//Aplicamos un evento a select. Cuando el usuario seleccione una opción se ejecuta la función.
select.addEventListener("change", function(){
    alert(select.value); //Añadimos una alerta(paises) cada vez que se elija una opción.
});

