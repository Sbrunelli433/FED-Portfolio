const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);


//create function to keep nav bar at top of the screen on scroll
function fixNav() {
    console.log(window.scrollY, nav.offsetHeight);
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active');
    }
}