// Show Main Content After 5 Seconds
window.onload = function() {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
    }, 3000);
};

// Hero Section Slideshow
let slides = document.querySelectorAll(".hero-slide");
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change slide every 3 seconds

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
// Fade-in Animation on Scroll
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => observer.observe(section));

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, service, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-status").innerText = "Message Sent!";
    })
    .catch(error => {
        document.getElementById("form-status").innerText = "Error Sending Message!";
    });
});

/*const portfolioItems = document.querySelectorAll(".portfolio-item");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

portfolioItems.forEach((item) => observer.observe(item));*/
