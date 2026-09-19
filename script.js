document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);


    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousedown", () => {
            card.style.transform = "scale(0.97)";
        });

        card.addEventListener("mouseup", () => {
            card.style.transform = "";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });


    const glow = document.querySelector(".background-glow");

    document.addEventListener("mousemove", event => {

        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY - 350}px`;

    });

});
