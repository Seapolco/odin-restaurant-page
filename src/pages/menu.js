import elementFactory from '../elementFactory';
import clearPage from '../clearPage';
import homePage from './home';



function menuPage() {

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

    let menuCards = elementFactory('div', {class: 'menu-cards'},
                    elementFactory('div', {class: 'card beef-burger'},
                        elementFactory('h2', {class: "card-title"}, "Beef Burger"),
                        elementFactory('p', {class: "card-price"}, "£8.99"),
    ),              elementFactory('div', {class: 'card chicken-burger'},
                        elementFactory('h2', {class: "card-title"}, "Chicken Burger"),
                        elementFactory('p', {class: "card-price"}, "£8.99")
    ),              elementFactory('div', {class: 'card beef-burger'},
                        elementFactory('h2', {class: "card-title"}, "Chicken Wings"),
                        elementFactory('p', {class: "card-price"}, "£6.99"),
    ),              elementFactory('div', {class: 'card beef-burger'},
                        elementFactory('h2', {class: "card-title"}, "Fries"),
                        elementFactory('p', {class: "card-price"}, "£1.99")
    ),
    );


    document.body.appendChild(rootContainer);
    rootContainer.appendChild(navBar);
    rootContainer.appendChild(mainContent);
    mainContent.appendChild(menuCards);

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

export default menuPage



{/* <div class="menu-cards">
                    <div class="card beef-burger">
                        <!-- <img class="bb-image"  alt=""> -->
                        <h2 class="card-title">Beef Burger</h2>
                        <p class="card-price">£8.99</p> 
                    </div>
                    <div class="card chicken-burger">
                        <!-- <img class="cb-image"  alt=""> -->
                        <h2 class="card-title">Chicken Burger</h2>
                        <p class="card-price">£8.99</p> 
                    </div>
                    <div class="card chicken-wings">
                        <!-- <img class="cw-image" alt=""> -->
                        <h2 class="card-title">Chicken Wings</h2>
                        <p class="card-price">£6.99</p> 
                    </div>
                    <div class="card fries">
                        <!-- <img class="f-image" alt=""> -->
                        <h2 class="card-title">Fries</h2>
                        <p class="card-price">£1.99</p> 
                    </div>
                </div> */}