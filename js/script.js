// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
// Ketika HAmburger di Klik
hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle('active');
});
document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});