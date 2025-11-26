// AUTO SLIDE BANNER SUPER PRO
const slides = document.querySelectorAll(".promo-slide");
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0";
    });
    index = (index + 1) % slides.length;
}
setInterval(showSlide, 3500);

// NAVBAR SHADOW ON SCROLL
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});
