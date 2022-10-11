// import homepage from './home-page';

//first day of work no sleep day of coding, did one codewarz
/// second day off, new job is a shock to the system. need sleeps.



// homepage();

console.log('Hungry?');


const elementFactory = function(type, attributes, ...children) {

    const el = document.createElement(type);

    if(attributes) {
        for(key in attributes) {
            el.setAttribute(key, attributes[key]);
    
        }
    }



    if(children) {
        children.forEach(child => {
            if (typeof child === 'string') {
              el.appendChild(document.createTextNode(child))
            } else {
              el.appendChild(child)
            }
          })
    }



    return el 
}

let rootContainer = elementFactory('div', {class:'root-container'});

let navBar = elementFactory(
    'div', {class:'nav-bar'},
        elementFactory(
            'img',
            {src: "../src//images/pngfind.com-grilled-chicken-breast-png-4604394.png",
            class:"nav-logo"
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



// let hello = document.createElement('div');
// let text = document.createTextNode('hello');



// hello.appendChild(text);

// hello.setAttribute('class','blue');

// document.body.appendChild(hello);