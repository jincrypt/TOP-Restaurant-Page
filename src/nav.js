import indexPage from './index.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

function navigation() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    tab1.innerHTML = 'Home';
    tab2.innerHTML = 'Menu';
    tab3.innerHTML = 'Contact';

    tab1.id = 'tab1';
    tab2.id = 'tab2';
    tab3.id = 'tab3';

    tab1.addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        document.querySelector('#content').appendChild(indexPage());
    });

    tab2.addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        document.querySelector('#content').appendChild(menuPage());
    });

    tab3.addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        document.querySelector('#content').appendChild(contactPage());
    });

    nav.appendChild(tab1);
    nav.appendChild(tab2);
    nav.appendChild(tab3);
    header.appendChild(nav);

    return header;
}

document.querySelector('body').prepend(navigation());
document.querySelector('#content').appendChild(indexPage());