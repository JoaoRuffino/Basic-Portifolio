AOS.init();

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}


const circle_btn = document.getElementById('circle-btn');
const back_btn = document.getElementById('back-btn');
const left = document.querySelector('.left');
const about = document.getElementById('Sobre');
let mode = 'light';

circle_btn.addEventListener('click', () => {
    if(mode === 'light'){
    circle_btn.classList.add('dark-mode');
    mode = 'dark';
    left.style.background= 'linear-gradient(21deg, rgba(108,99,255,1) 0%, rgba(10,0,166,1) 100%)';
    about.style.background = '#272727'
    about.style.color = '#ffffff'
    document.documentElement.style.setProperty('---color1', '#ffffff');
    document.documentElement.style.setProperty('---color2', '#2e2e2e');
    document.documentElement.style.setProperty('---color3', '#4B4B4B');
    document.documentElement.style.setProperty('---purple', '#D7D7E1');
    document.documentElement.style.setProperty('---blue', '#ffffff');
    document.documentElement.style.setProperty('---color4', '#03AAFF');
    document.documentElement.style.setProperty('---color5', '#000000');
    document.documentElement.style.setProperty('---color6', '#ffffff');




}else if(mode === 'dark'){
    circle_btn.classList.remove('dark-mode');
    mode = 'light';
    left.style.background= 'linear-gradient(21deg, rgb(154, 149, 255) 0%, rgb(16, 0, 240) 100%)';
    about.style.background = '#ffffff'
    about.style.color = '#000000    '
    document.documentElement.style.setProperty('---color1', '#2e2e2e');
    document.documentElement.style.setProperty('---color2', '#ffffff');
    document.documentElement.style.setProperty('---color3', '#f7f7f7');
    document.documentElement.style.setProperty('---purple', '#6C63FF');
    document.documentElement.style.setProperty('---blue', '#03AAFF');
    document.documentElement.style.setProperty('---color4', '#000000');
    document.documentElement.style.setProperty('---color5', 'whitesmoke');
    document.documentElement.style.setProperty('---color6', '#000000');

}


})


const adiciona_Projeto = document.querySelector('#adiciona_Projeto');
const projetos = document.querySelectorAll('.projetos');
const projeto_novo = document.createElement('img');
const div_pai = document.querySelector('.pop-up');
const div_btn = document.querySelector('.pop-btn');
const project_name = document.querySelector('.project-name');
const link = document.querySelector('.link');
const link_project = document.querySelector('.link-project');

for (obj_projeto of projetos){
    obj_projeto.addEventListener('click', function() {exibeProjeto(this.alt)});
}

function exibeProjeto(alt){
    projeto_novo.setAttribute('src', 'images/' + alt + '.jpg');
    projeto_novo.setAttribute('data-aos', 'fade-down');
    projeto_novo.setAttribute('alt', alt);
    adiciona_Projeto.appendChild(projeto_novo);
    project_name.innerHTML = alt;
    div_pai.style.display = 'flex';
    div_btn.style.display = 'flex';


    switch (alt){
        case 'Projeto-Design':
            link.setAttribute('href', 'https://github.com/JoaoRuffino/Huddle-exercise');
            link_project.setAttribute('href', 'https://joaoruffino.github.io/Huddle-exercise/');
            break;
        
        case 'Projeto-Forca':
            link.setAttribute('href', 'https://github.com/JoaoRuffino/Hangman-Game-Version-2.0');
            link_project.setAttribute('href', 'https://joaoruffino.github.io/Hangman-Game-Version-2.0/');
            break;
        
        case 'Projeto-Login':
            link.setAttribute('href', 'https://github.com/JoaoRuffino/page-login');
            link_project.setAttribute('href', 'https://joaoruffino.github.io/page-login/');
            break;
        case 'Projeto-Sonic':
            link.setAttribute('href', 'https://github.com/JoaoRuffino/Sonic-Front-end');
            link_project.setAttribute('href', 'https://joaoruffino.github.io/Sonic-Front-end/');
            break;
    }

}

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }
    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li'
);
mobileNavbar.init()