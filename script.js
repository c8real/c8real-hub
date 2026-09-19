// =========================
// PAGE LOAD ANIMATION
// =========================

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

});


// =========================
// CARD CLICK EFFECT
// =========================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.97)";

        setTimeout(() => {
            card.style.transform = "";
        }, 120);

    });

});


// =========================
// MOUSE PURPLE GLOW
// =========================

const glow = document.querySelector(".background-glow");

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    glow.style.left = `${x}px`;
    glow.style.top = `${y - 350}px`;

});


// =========================
// MOBILE TOUCH EFFECT
// =========================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("touchstart", () => {

        card.style.transform = "scale(0.97)";

    });

    card.addEventListener("touchend", () => {

        setTimeout(() => {
            card.style.transform = "";
        }, 120);

    });

});
