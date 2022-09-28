const html = document.querySelector('html')
const lightModeButton = document.querySelector('.checkbox-light-mode')
const navBarListMenu = document.querySelector('.nav-bar-list-menu');

/* LOGIC TO BUTTON COLOR CHANGE */
function checkColorAndIconMenu(){
    if(html.classList.contains('light-mode') && navBarListMenu.classList.contains('open')){
        document.querySelector('.icon').src = "./assets/img/x-icon-black.svg";
    }else if(html.classList.contains('light-mode') == false && navBarListMenu.classList.contains('open') == true){
        document.querySelector('.icon').src = "./assets/img/x-icon-white.svg";
    }else if(html.classList.contains('light-mode') == true && navBarListMenu.classList.contains('open') == false){
        document.querySelector('.icon').src = "./assets/img/lines-icon-black.svg";
    }else if(html.classList.contains('light-mode') == false && navBarListMenu.classList.contains('open') == false){
        document.querySelector('.icon').src = "./assets/img/lines-icon-white.svg";
    }
}

/* CHANGE THEME TO LIGHT MODE */
lightModeButton.addEventListener('change', function(){
    html.classList.toggle('light-mode')
    checkColorAndIconMenu();
    
})

/* SCROLL DOWN EVENT, LITTLE NAV BAR */
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header')
    header.classList.toggle('page-down', window.scrollY > 0);
})

/* SHOW MENU MOBILE */
function menuShow(){
    if(navBarListMenu.classList.contains('open')){
        navBarListMenu.classList.remove('open');
        checkColorAndIconMenu();
        closeMenuMobile();
    }else{
        navBarListMenu.classList.add('open')
        checkColorAndIconMenu();
    }
}

/* CLOSE MENU IF CLICK ON LINK MENU MOBILE */
function closeMenuMobile(){
    if(navBarListMenu.classList.contains('open')){
        navBarListMenu.classList.remove;
        checkColorAndIconMenu();
    }
}