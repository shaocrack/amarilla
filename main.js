const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Función para dibujar un pétalo con curvas Bézier y textura
function drawPetal(x, y, radius, startAngle, endAngle, color, texture) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  const controlPoint1 = {
    x: x + radius * Math.cos(startAngle + (endAngle - startAngle) / 3),
    y: y + radius * Math.sin(startAngle + (endAngle - startAngle) / 3),
  };
  const controlPoint2 = {
    x: x + radius * Math.cos(endAngle - (endAngle - startAngle) / 3),
    y: y + radius * Math.sin(endAngle - (endAngle - startAngle) / 3),
  };
  ctx.bezierCurveTo(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, x + radius * Math.cos(endAngle), y + radius * Math.sin(endAngle));
  ctx.fillStyle = color;

  // Agregar textura al pétalo
  if (texture) {
    const pattern = ctx.createPattern(texture, "repeat");
    ctx.fillStyle = pattern;
  }

  ctx.fill();
}

// Función para dibujar la flor con pétalos giratorios y una carita al final
function drawFlower(budSize, petalRadius, numPetals, rotationAngle, showFace) {
  // Dibujar el tallo
  ctx.beginPath();
  ctx.moveTo(200, 500);
  ctx.lineTo(200, 200 + budSize);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 20;
  ctx.stroke();

  // Calcular el ángulo de separación entre pétalos
  const angleStep = (Math.PI * 2) / numPetals;

  // Dibujar los pétalos giratorios
  for (let i = 0; i < numPetals; i++) {
    const angle = angleStep * i + rotationAngle; // Aplicar el ángulo de rotación
    const color = `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`;
    const texture = new Image();
    texture.src = "./img/yu4.png"; // Reemplaza con la URL de la textura

    // Calcular la posición del pétalo alrededor del centro de la flor con rotación
    const petalX = 180 + petalRadius * Math.cos(angle);
    const petalY = 200 + budSize + petalRadius * Math.sin(angle);

    // Dibujar el pétalo
    drawPetal(petalX, petalY, petalRadius, angle, angle + Math.PI / 3, color, texture);
  }

  // Dibujar el centro de la flor
  ctx.beginPath();
  ctx.arc(180, 200 + budSize, 100, 0, Math.PI * 2, false);
  ctx.fillStyle = "yellow";
  ctx.fill();

}

// Función para animar el crecimiento y rotación de la flor con la carita al final
function animateFlower() {
  let budSize = 50;
  let petalRadius = 0;
  const numPetals = 20;
  let rotationAngle = 0;

  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Incrementar el ángulo de rotación para girar los pétalos
    rotationAngle += 0.03;

    if (budSize > 0) {
      budSize -= 0.5;
    } else if (petalRadius < 100) {
      petalRadius += 1;
    } else {
     showFace = true;
      
    }
     drawFlower(budSize, petalRadius, numPetals, rotationAngle, false); // Dibujar la flor en crecimiento
     if (showFace) {
       const faceImg = new Image();
       faceImg.src = "./img/lo2.png"; // Reemplaza con la URL de la carita
       ctx.drawImage(faceImg, 95, 115, 170, 170); // Ajusta las coordenadas y el tamaño según sea necesario
     }
  }, 30);
}

animateFlower();

//funcion para el texto
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      const movableDiv = document.getElementById("movable-div");
      movableDiv.style.display = "block";

      setTimeout(() => {
          movableDiv.style.display = "none";
      }, 10000); // 5000 milisegundos = 5 segundos
  }, 3000); // 3000 milisegundos = 3 segundos
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      const movableDiv2 = document.getElementById("movable-div2");
      movableDiv2.style.display = "block";

      setTimeout(() => {
          movableDiv2.style.display = "none";
      }, 10000); // 10000 milisegundos = 10 segundos
  }, 15000); // 3000 milisegundos = 3 segundos
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      const btn = document.getElementById("hermoso-btn");
      btn.style.display = "block";
      btn.addEventListener("click", () => {
          alert("Hola hermosa, espero que tengas un día maravilloso ❤️, SHAOPRO");
          window.open("https://youtu.be/cd7eDnNEOoQ?t=22", "_blank");
      });
  }, 20000); // 20000 milisegundos = 20 segundos
});




