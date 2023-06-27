function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const h1 = document.createElement('h1');
    h1.textContent = 'To-Do-App';

    header.appendChild(h1);
    return header;
}
function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('side-bar');
    nav.innerHTML = `
    <ul class="nav">
    <li>
    <span class="span">Home</span>
    </li>
    <li>
    <span class="span">Today</span>
    </li>
    <li>
    <span class="span">Projects</span>
    <ul class="projects">
    <li>Coding</li>
    <li>Work out</li>
    </ul>
    </li>
    </ul>
    `;
    return nav;
}

function loadPage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    content.appendChild(header);

    const nav = createNav();
    content.appendChild(nav);
}
export default loadPage;