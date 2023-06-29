import loadPage from "./initial-load-page";


function displayHomeOrNotes() {
    const listHome = document.querySelector('.list-home');
    const listNotes = document.querySelector('.list-notes');
    const addHomeContainer = document.querySelector('.add-homeContainer');
    const addNotesContainer = document.querySelector('.add-notesContainer');
    const addHomeBtn = document.querySelector('.add-home-btn');
    const addNotesBtn = document.querySelector('.add-notes-btn');

    listHome.addEventListener('click', () => {
        listHome.classList.add('active');
        listNotes.classList.remove('active');
        addHomeContainer.style.display = 'flex';
        addNotesContainer.style.display = 'none';
    });

    listNotes.addEventListener('click', () => {
        listNotes.classList.add('active');
        listHome.classList.remove('active');
        addHomeContainer.style.display = 'none';
        addNotesContainer.style.display = 'flex';
    });

    addHomeBtn.addEventListener('click', () => {
        if (addHomeBtn.classList.contains('active')) {
          addHomeBtn.classList.remove('active');
        } else {
          addHomeBtn.classList.add('active');
        }
    });

    addNotesBtn.addEventListener('click', () => {
        if (addNotesBtn.classList.contains('active')) {
          addNotesBtn.classList.remove('active');
        } else {
          addNotesBtn.classList.add('active');
        }
    });
};


function showPage() {
    loadPage();
    displayHomeOrNotes();
};
showPage();