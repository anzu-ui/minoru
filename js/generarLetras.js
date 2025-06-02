document.addEventListener("DOMContentLoaded", function () {
  // Define el string de 7 letras (incluyendo la G al final)
  const letras = "ABCDEFG";
  // Array de colores para cada cuadrado
  const colores = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#d1c4e9", "#e0c1b5"];
  
  // Selecciona el contenedor donde se insertarán los cuadrados
  const squareContainer = document.querySelector(".square-container");
  
  // Limpia el contenido actual por si acaso
  squareContainer.innerHTML = "";

  // Por cada letra, crea un div con la clase "square" y, si es la última, añade la clase "pop"
  [...letras].forEach((letra, index) => {
    const divLetter = document.createElement("div");
    divLetter.classList.add("square");
    // Si es la última letra, agrega la clase "pop" para el efecto especial
    if (index === letras.length - 1) {
      divLetter.classList.add("pop");
    }
    // Asigna el color correspondiente (según el índice)
    divLetter.style.backgroundColor = colores[index] || "#cccccc";
    divLetter.textContent = letra;
    squareContainer.appendChild(divLetter);
  });
});
