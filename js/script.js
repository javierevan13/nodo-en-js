var elementosP = document.getElementById("p");
var segundoParrafo = document.getElementById("segundo");
//1.-Crear el elemento
var elemento = document.createElement("h2");
//2.-Crear un nodo de texto
var contenido = document.createTextNode("Este es el titular");
//3.-Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4.- Agregar atributos
elemento.setAttribute("aling", "center");
//5.- Agregar el elemento al documento
//document.getElementById("subtitulo").appendChild(elemento);
document.body.appendChild(elemento);