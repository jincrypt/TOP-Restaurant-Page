console.log('test')
import index from './image/index.jpeg';

function indexPage() {
    const element = document.createElement('div');

    const myIcon = new Image();
    myIcon.src = index;

    element.append(myIcon);

    const header = document.createElement('h1');
    header.innerHTML = 'Pizza Restaurante';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Pizza here is the best. Order Now!'

    element.append(header);
    element.append(paragraph);

    return element;
}

export default indexPage;