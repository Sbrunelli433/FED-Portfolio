const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    //toggle menubars open/closed
    menuBars.classList.toggle('change');
    //activate menu
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        //overlay in 
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        //bring nav items in
        
    } else {
        //overlay out
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    }
    //
}

//event listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);