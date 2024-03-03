document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
    })
})


// Close menu when pressing Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      //Click action
      document.querySelector('.header').classList.remove('open');
    }
});

// Close menu when clicking outside of it
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Click action
  document.querySelector('.header').classList.remove('open');
});