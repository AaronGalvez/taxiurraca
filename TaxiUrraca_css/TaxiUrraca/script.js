const imagenes = document.querySelectorAll(".image");
const imagenes4 = document.querySelectorAll(".image4");
const modal = document.getElementById("modal");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.getElementById("cerrar");

// Agregar evento de clic a cada imagen para mostrar el modal con la imagen ampliada cuando se haga clic en ella
imagenes.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        modal.style.display = "flex";
        imagenGrande.src = imagen.src;
    });
});

imagenes4.forEach((imagen4) => {
    imagen4.addEventListener("click", () => {
        modal.style.display = "flex";
        imagenGrande.src = imagen4.src;
    });
});

if (cerrar) {
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function inicializarTema() {
  const boton = document.getElementById('darkModeToggle');
  const temaGuardado = localStorage.getItem('tema');

  if (temaGuardado === 'oscuro') {
    document.body.classList.add('oscuro');
    boton.textContent = '☀️';
  }

  boton.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    const esOscuro = document.body.classList.contains('oscuro');
    boton.textContent = esOscuro ? '☀️' : '🌙';
    localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
  });
}

document.addEventListener('DOMContentLoaded', inicializarTema);