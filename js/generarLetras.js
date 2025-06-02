document.addEventListener("DOMContentLoaded", function () {
  // Define el string de 6 letras (ejemplo: "Abcdef")
  const letras = "Minoru";
  // Define un array de colores para cada cuadrado
  const colores = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#d1c4e9"];
  
  // Selecciona el contenedor para insertar los cuadrados
  const squareContainer = document.querySelector(".square-container");
  squareContainer.innerHTML = "";
  
  // Array para almacenar los elementos generados
  const squares = [];
  
  // Para cada letra, crea un div con la clase "square", le asigna el color y lo inserta
  [...letras].forEach((letra, index) => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.backgroundColor = colores[index] || "#cccccc";
    squareDiv.textContent = letra;
    squareContainer.appendChild(squareDiv);
    squares.push(squareDiv);
  });
  
  // Aplica la animación de rotación a cada cuadrado en orden, con un retardo de 300 ms entre cada uno
  squares.forEach((square, index) => {
    setTimeout(() => {
      square.classList.add("rotate");
    }, (index + 1) * 300);
  });
});
