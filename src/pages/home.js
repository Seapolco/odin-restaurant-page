import elementFactory from "../elementFactory";

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
            elementFactory('li',{}, 'Home'),
            elementFactory('li',{}, 'Menu'),
            elementFactory('li',{}, 'Contact')
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

}

export default homePage