window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#555";
    } else {
        header.style.backgroundColor = "#333";
    }
});

const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#ff6200";
    });

    link.addEventListener('mouseout', () => {
        link.style.color = "white";
    });
});
