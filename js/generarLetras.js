document.addEventListener("DOMContentLoaded", function () {
  // Las letras en el orden original
  const letras = "Minoru";
  // Colores para cada letra (basado en el orden original)
  const colores = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#d1c4e9"];
  const total = letras.length;
  
  const squareContainer = document.querySelector(".square-container");
  squareContainer.innerHTML = "";
  
  // Array donde guardaremos las referencias a cada cuadrado,
  // indexados según su posición original (0 a total-1)
  let squares = [];
  
  // Array de índices que aún no se han mostrado; inicialmente [0, 1, …, total-1]
  let remainingIndices = [];
  // Guardamos el orden en que se han mostrado (para la regla)
  let shownIndices = [];
  
  // Crear los cuadrados en el orden original
  [...letras].forEach((letra, index) => {
    remainingIndices.push(index);
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.backgroundColor = colores[index] || "#cccccc";
    squareDiv.textContent = letra;
    // Guardamos el índice original en un data attribute (opcional)
    squareDiv.dataset.index = index;
    // Se inician ocultos (opacity: 0) según el CSS
    squareContainer.appendChild(squareDiv);
    squares[index] = squareDiv;
  });
  
  // Función para elegir la siguiente letra a mostrar
  function chooseNextLetter() {
    if (remainingIndices.length === 0) return; // Terminar si ya se mostraron todas
    
    let candidatePool = [];
    
    // Verificamos si existen al menos 2 letras reveladas
    if (shownIndices.length >= 2) {
      const last = shownIndices[shownIndices.length - 1];
      const secondLast = shownIndices[shownIndices.length - 2];
      
      // Si los dos últimos son consecutivos en el orden original:
      if (Math.abs(last - secondLast) === 1) {
        // Definimos low y high
        const low = Math.min(last, secondLast);
        const high = Math.max(last, secondLast);
        // Letras prohibidas para extender el grupo de 2 a 3 consecutivas
        const forbidden = new Set();
        if (low - 1 >= 0) forbidden.add(low - 1);
        if (high + 1 < total) forbidden.add(high + 1);
        // Filtramos los candidatos que NO estén en forbidden
        candidatePool = remainingIndices.filter(index => !forbidden.has(index));
      }
    }
    // Si no se obtuvo ningún candidato por la condición o no se cumplía la regla, se usan todos los restantes.
    if (candidatePool.length === 0) {
      candidatePool = [...remainingIndices];
    }
    
    // Selecciona aleatoriamente uno de los candidatos
    const randomCandidate = candidatePool[Math.floor(Math.random() * candidatePool.length)];
    // Remueve ese índice de remainingIndices
    remainingIndices = remainingIndices.filter(index => index !== randomCandidate);
    // Añade a shownIndices (en el orden en que se muestran)
    shownIndices.push(randomCandidate);
    // Aplica la clase "fade" para que aparezca con efecto de opacidad desde 0 hasta 1
    squares[randomCandidate].classList.add("fade");
  }
  
  // Cada 1 segundo (1000 ms) se escoge la siguiente letra
  const interval = setInterval(() => {
    if (remainingIndices.length === 0) {
      clearInterval(interval);
    } else {
      chooseNextLetter();
    }
  }, 400);
});
