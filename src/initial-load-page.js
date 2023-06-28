function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const h1 = document.createElement('h1');
    h1.textContent = 'To-Do-App';

    header.appendChild(h1);
    return header;
}

function loadPage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    content.appendChild(header);
}
export default loadPage;