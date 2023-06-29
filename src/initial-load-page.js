function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const h1 = document.createElement('h1');
    h1.classList.add('h1-header');
    h1.textContent = 'To-Do-App';

    const checkedImage = document.createElement('img');
    checkedImage.classList.add('checked-img');
    checkedImage.src = './images/checked-image.png';

    headerContainer.appendChild(h1);
    headerContainer.appendChild(checkedImage);
    header.appendChild(headerContainer);
    return header;
}

function createPage() {
    // page container
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    // sidebar
    const sideBar = document.createElement('navbar');
    sideBar.classList.add('side-bar');

    const ulEl = document.createElement('ul');
    ulEl.classList.add('ul-bar')

    const listHome = document.createElement('li')
    listHome.classList.add('list-home');
    listHome.textContent = 'Home';
    listHome.classList.add('active')

    const listNotes = document.createElement('li')
    listNotes.classList.add('list-notes');
    listNotes.textContent = 'Notes';

    ulEl.appendChild(listHome);
    ulEl.appendChild(listNotes);

    sideBar.appendChild(ulEl);
    pageContainer.appendChild(sideBar)

    // main

    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    const addContainer = document.createElement('div');
    addContainer.classList.add('add-container');

    const h1Main = document.createElement('h1');
    h1Main.classList.add('h1-main');
    h1Main.textContent = 'Add a To Do';

    addContainer.appendChild(h1Main);

    main.appendChild(addContainer);

    pageContainer.appendChild(main)
    return pageContainer;
}


function loadPage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    content.appendChild(header);

    const pageContainer = createPage();
    content.appendChild(pageContainer);

}
export default loadPage;