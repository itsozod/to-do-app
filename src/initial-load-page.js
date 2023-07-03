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
    pageContainer.appendChild(sideBar);

    // main
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    // home container
    const addHomeContainer = document.createElement('div');
    addHomeContainer.classList.add('add-homeContainer');
    
    const h1Home = document.createElement('h1');
    h1Home.classList.add('h1-home');
    h1Home.textContent = 'Add a To Do';
    
    const addHomeBtn = document.createElement('img');
    addHomeBtn.classList.add('add-home-btn');
    addHomeBtn.src = './images/add-button.png';
    
    addHomeContainer.appendChild(h1Home);
    addHomeContainer.appendChild(addHomeBtn);
    
    const homeFormContainer = document.createElement('div');
    homeFormContainer.classList.add('form-container');

    // const emptyTodo = document.createElement('div');
    // emptyTodo.classList.add('empty-todo');

    // const emptyH2 = document.createElement('h2');
    // emptyH2.classList.add('empty-h2');
    // emptyH2.textContent = 'Your to do app is currently empty';

    // emptyTodo.appendChild(emptyH2);

    main.appendChild(addHomeContainer);
    // main.appendChild(emptyTodo);
    main.appendChild(homeFormContainer);

    pageContainer.appendChild(main)
    return pageContainer;
}

function createTodosContainer() {
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');
    return todosContainer;
}


function loadPage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    content.appendChild(header);

    const pageContainer = createPage();
    content.appendChild(pageContainer);

    const main = document.querySelector('#main');
    const todosContainer = createTodosContainer();
    main.appendChild(todosContainer);

}
export default loadPage;