function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    const lines = document.createElement('div');
    lines.classList.add('lines');

    const line1 = document.createElement('div');
    line1.classList.add('line1');
    const line2 = document.createElement('div');
    line2.classList.add('line2');
    const line3 = document.createElement('div');
    line3.classList.add('line3');

    lines.appendChild(line1);
    lines.appendChild(line2);
    lines.appendChild(line3);

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
    header.appendChild(lines);
    header.appendChild(headerContainer);
    return header;
}

function moveLines() {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    const sideBar = document.querySelector('.side-bar');
    const addHomeBtn = document.querySelector('.add-home-btn');
    const addNotesBtn = document.querySelector('.add-notes-btn');
    const formContainer = document.querySelector('.form-container');
    const formContainer1 = document.querySelector('.form-container1');

    if (line1.classList.contains('active') && line3.classList.contains('active')) {
        setTimeout(() => {
            line1.classList.remove('active');
            line2.style.opacity = '1';
            line3.classList.remove('active');
            sideBar.style.display = 'none';
        }, 500);
        
      } else {
        setTimeout(() => {
            line1.classList.add('active');
            line2.style.opacity = '0';
            line3.classList.add('active');
            sideBar.style.display = 'flex';
        }, 500)
        addHomeBtn.classList.remove('active');
        formContainer.style.display = 'none';
        addNotesBtn.classList.remove('active');
        formContainer1.style.display = 'none';
      }
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
    listHome.textContent = 'Todos';
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

    const mainAddHome = document.createElement('div');
    mainAddHome.classList.add('main-add-home');

    // home container
    const addHomeContainer = document.createElement('div');
    addHomeContainer.classList.add('add-homeContainer');
    mainAddHome.appendChild(addHomeContainer);
    
    const h1Home = document.createElement('h1');
    h1Home.classList.add('h1-home');
    h1Home.textContent = 'Add a To Do';
    
    const addHomeBtn = document.createElement('img');
    addHomeBtn.classList.add('add-home-btn');
    addHomeBtn.src = './images/add-button.png';
    addHomeBtn.alt = 'Add button';
    
    addHomeContainer.appendChild(h1Home);
    addHomeContainer.appendChild(addHomeBtn);
    
    const mainHomeForm = document.createElement('div');
    mainHomeForm.classList.add('main-home-form');

    const homeFormContainer = document.createElement('div');
    homeFormContainer.classList.add('form-container');
    mainHomeForm.appendChild(homeFormContainer)

    const mainTodos = document.createElement('div');
    mainTodos.classList.add('main-todos');

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');
    mainTodos.appendChild(todosContainer);

    main.appendChild(mainAddHome);
    main.appendChild(mainHomeForm);
    main.appendChild(mainTodos);

    // notes container
    const mainAddNotes = document.createElement('div');
    mainAddNotes.classList.add('main-add-notes');

    const addNotesContainer = document.createElement('div');
    addNotesContainer.classList.add('add-notesContainer');
    mainAddNotes.appendChild(addNotesContainer);

    const h1Notes = document.createElement('h1');
    h1Notes.classList.add('h1-notes');
    h1Notes.textContent = 'Add a note';
    
    const addNotesBtn = document.createElement('img');
    addNotesBtn.classList.add('add-notes-btn');
    addNotesBtn.src = './images/add-button.png';
    addNotesBtn.alt = 'Add button';

    addNotesContainer.appendChild(h1Notes);
    addNotesContainer.appendChild(addNotesBtn);

    main.appendChild(mainAddNotes);

    const mainNotesForm = document.createElement('div');
    mainNotesForm.classList.add('main-notes-form');

    const notesFormContainer = document.createElement('div');
    notesFormContainer.classList.add('form-container1');
    mainNotesForm.appendChild(notesFormContainer);

    const mainNotesContainer = document.createElement('div');
    mainNotesContainer.classList.add('main-notes-container');

    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-container');
    mainNotesContainer.appendChild(notesContainer);

    main.appendChild(mainNotesForm);
    main.appendChild(mainNotesContainer);

    pageContainer.appendChild(main);
    return pageContainer;
}


function loadPage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    content.appendChild(header);

    const pageContainer = createPage();
    content.appendChild(pageContainer);

    const lines = document.querySelector('.lines');
    lines.addEventListener('click', moveLines);

}
export default loadPage;