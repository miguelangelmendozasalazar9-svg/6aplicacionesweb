document.addEventListener("DOMContentLoaded", () => {

    // Resaltar la tarjeta seleccionada al hacer clic
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("click", () => {
            tarjetas.forEach((t) => t.style.outline = "none");
            tarjeta.style.outline = "3px solid var(--color-acento)";
        });
    });

});
document.querySelectorAll(".btn-header").forEach((boton) => {
    boton.addEventListener("click", function (evento) {
        const circulo = document.createElement("span");
        const diametro = Math.max(this.clientWidth, this.clientHeight);
        const radio = diametro / 2;

        circulo.style.width = circulo.style.height = `${diametro}px`;
        circulo.style.left = `${evento.clientX - this.offsetLeft - radio}px`;
        circulo.style.top = `${evento.clientY - this.offsetTop - radio}px`;
        circulo.classList.add("ripple");

        // Elimina el ripple anterior si existe, para que no se acumulen
        const rippleAnterior = this.querySelector(".ripple");
        if (rippleAnterior) rippleAnterior.remove();

        this.appendChild(circulo);
    });
});