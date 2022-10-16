import elementFactory from "../elementFactory";
import clearPage from '../clearPage';
import menuPage from './menu';
import homePage from './home';

function contactPage() {

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

    let mainContent = elementFactory('div', {class:'main-content'});

    let contactForm = elementFactory('div', {class:'contact-form'}, 
                        elementFactory('h2', {class: 'contact-us'}, "Contact Us"),
                        elementFactory('div', {class:'phone-contact'},
                            elementFactory('p',{},"01345 945654")),
                        elementFactory('div', {class:'email-contact'},
                            elementFactory('p',{},"papaya@email.co.uk")),
                        elementFactory('img',{class:'maps-image'})
    )


    document.body.appendChild(rootContainer);
    rootContainer.appendChild(navBar);
    rootContainer.appendChild(mainContent);
    mainContent.appendChild(contactForm);


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
        clearPage();
        contactPage();
    });

    


}

export default contactPage
