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

document.addEventListener('DOMContentLoaded', inicializarTema);