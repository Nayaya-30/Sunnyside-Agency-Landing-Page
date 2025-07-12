const navBar = document.getElementById('nav_bar');
const menuToggle = document.getElementById('menu');
const navElements = document.querySelectorAll('.nav_item');
const arrow = document.getElementById('arrow');

navElements.forEach(element => {
    element.addEventListener('click', () => {
        navElements.forEach(link => {
            link.classList.remove('active');
        })
        element.classList.add('active');
    })
})

menuToggle.addEventListener('click', () => {
    navBar.style.display = 'block';
    navBar.classList.toggle('active');
    arrow.classList.toggle('active');
})