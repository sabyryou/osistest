// Example: Navbar scroll effect
window.addEventListener("scroll", function () {
    const nav = document.querySelector("header");
    if (window.scrollY > 50) {
        nav.style.background = "#00296b";
    } else {
        nav.style.background = "#0e3d91";
    }
});
