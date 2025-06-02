document.addEventListener("DOMContentLoaded", function () {
  // Define el string de 6 letras (por ejemplo: A, b, c, d, e, f)
  const letras = "Abcdef";
  // Array de colores para cada cuadrado (asegúrate de tener 6 colores o usa un valor por defecto)
  const colores = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#d1c4e9"];
  
  // Selecciona el contenedor donde se insertarán los cuadrados
  const squareContainer = document.querySelector(".square-container");
  // Limpia el contenedor por si tuviera contenido previo
  squareContainer.innerHTML = "";

  // Guarda los elementos generados para usarlos en la animación
  const squares = [];

  // Por cada letra, crea un cuadrado y lo añade al contenedor
  [...letras].forEach((letra, index) => {
    const divLetter = document.createElement("div");
    divLetter.classList.add("square");
    // Asigna el color correspondiente o un valor por defecto
    divLetter.style.backgroundColor = colores[index] || "#cccccc";
    divLetter.textContent = letra;
    squareContainer.appendChild(divLetter);
    squares.push(divLetter);
  });

  // Aplica el efecto "rotate" a cada cuadrado en orden (A, B, C, ...) cada 300ms
  for (let i = 0; i < squares.length; i++) {
    setTimeout(() => {
      squares[i].classList.add("rotate");
    }, (i + 1) * 300);
  }
});
