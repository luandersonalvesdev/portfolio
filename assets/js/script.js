const html = document.querySelector('html');
const lightModeButton = document.querySelector('.checkbox-light-mode');
const navBarListMenu = document.querySelector('.nav-bar-list-menu');

/* LOGIC TO BUTTON COLOR CHANGE */
function checkColorAndIconMenu(){
    if(html.classList.contains('light-mode') && navBarListMenu.classList.contains('open')){
        document.querySelector('.icon').src = "./assets/img/svg/x-icon-black.svg";
    }else if(html.classList.contains('light-mode') == false && navBarListMenu.classList.contains('open') == true){
        document.querySelector('.icon').src = "./assets/img/svg/x-icon-white.svg";
    }else if(html.classList.contains('light-mode') == true && navBarListMenu.classList.contains('open') == false){
        document.querySelector('.icon').src = "./assets/img/svg/lines-icon-black.svg";
    }else if(html.classList.contains('light-mode') == false && navBarListMenu.classList.contains('open') == false){
        document.querySelector('.icon').src = "./assets/img/svg/lines-icon-white.svg";
    }
};

/* CHANGE THEME TO LIGHT MODE */
lightModeButton.addEventListener('change', function(){
    html.classList.toggle('light-mode')
    checkColorAndIconMenu();
});

/* SCROLL DOWN EVENT, LITTLE NAV BAR */
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header')
    header.classList.toggle('page-down', window.scrollY > 0);
});

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
};

/* CLOSE MENU IF CLICK ON LINK MENU MOBILE */
function closeMenuMobile(){
    if(navBarListMenu.classList.contains('open')){
        navBarListMenu.classList.remove;
        checkColorAndIconMenu();
    }
};

// ADD PROJECTS BY JS

// getting UL from HTML
const getUl = document.querySelector('#projects ul');

const myProjects = [
    {
        title: 'Teste',
        description: 'pagina web',
        tags: [
                'html',
                'css'
            ],
        img: './assets/img/projects/project-5.jpg',
        link: 'https://luandersonalvesdev.github.io/my-gallery/',
    },
    {
        title: 'Segundo teste',
        description: 'jogo web',
        tags: [
                'html',
                'css',
                'js'
            ],
        img: './assets/img/projects/project-5.jpg',
        link: 'https://luandersonalvesdev.github.io/falas-campeoes-lol/',
    },
];

const fAddProjects = () => {
    myProjects.forEach((value) => {
        const createLi = document.createElement('li');
        const createA = document.createElement('a');
        createA.target = '_blank';
        const createDiv = document.createElement('div');
        createDiv.classList = 'project-details';
        const createH3 = document.createElement('h3');
        const createP = document.createElement('p');
        const createSection = document.createElement('section');
        createSection.classList = 'techs';
        const createImg = document.createElement('img');

        for (let key in value) {
            createA.href = value.link;
            createH3.innerText = value.title;
            createP.innerText = value.description;
            createImg.src = value.img;
        }

        getUl.appendChild(createLi);
        createLi.appendChild(createA);
        createA.appendChild(createDiv);
        createA.appendChild(createImg);
        createDiv.appendChild(createH3);
        createDiv.appendChild(createP);
        createDiv.appendChild(createSection);
        for (let valueSpan of value.tags) {
            const createSpan = document.createElement('span');
            createSpan.innerText = valueSpan;
            createSection.appendChild(createSpan);
        }
    });
};
fAddProjects();