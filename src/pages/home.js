import elementFactory from "../elementFactory";
import clearPage from '../clearPage';
import menuPage from './menu';

function homePage() {


let rootContainer = elementFactory('div', {class:'root-container'});

let navBar = elementFactory(
    'div', {class:'nav-bar'},
        elementFactory(
            'img',
            { class:"nav-logo"
            }
            ),
        elementFactory('ul', {class:'nav-links'},
            elementFactory('li',{class:'home'}, 'Home'),
            elementFactory('li',{class:'menu'}, 'Menu'),
            elementFactory('li',{class:'contact'}, 'Contact')
    )
);

let mainContent = elementFactory(
    'div', 
    {class:'main-content'},
        elementFactory('div', {class:'hungry'}, 'Hungry?')
);

document.body.appendChild(rootContainer);
rootContainer.appendChild(navBar);
rootContainer.appendChild(mainContent);

let rootContainter = document.querySelector('.root-container')

let homeLink = document.querySelector('.home');
let menuLink = document.querySelector('.menu');
let contactLink = document.querySelector('.contact')

homeLink.addEventListener('click', (e) => {
    console.log(rootContainter)
    console.log('home')
    clearPage();
    homePage();
});

menuLink.addEventListener('click', (e) => {
    console.log(rootContainter)
    console.log('menu')
    clearPage();
    menuPage();

});

contactLink.addEventListener('click', (e) => {
    console.log(rootContainter)
    console.log('contact')
    clearPage();
});

}

export default homePage