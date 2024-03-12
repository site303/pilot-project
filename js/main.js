let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav__menu');
let menuItem = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav__menu-active');
});

menuItem.forEach((elem) =>{
    elem.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__menu-active');
    })
})