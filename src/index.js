import loadPage from "./initial-load-page";
import loadHomeForm from "./home-form";


function displayHomeOrNotes() {
    const listHome = document.querySelector('.list-home');
    const listNotes = document.querySelector('.list-notes');
    const addHomeContainer = document.querySelector('.add-homeContainer');
    const addNotesContainer = document.querySelector('.add-notesContainer');
    const addHomeBtn = document.querySelector('.add-home-btn');
    const addNotesBtn = document.querySelector('.add-notes-btn');

    listHome.addEventListener('click', () => {
      // const formContainer = document.querySelector('.form-container');

        listHome.classList.add('active');
        listNotes.classList.remove('active');
        addHomeContainer.style.display = 'flex';
        addNotesContainer.style.display = 'none';
        // formContainer.style.display = 'none';
    });

    listNotes.addEventListener('click', () => {
      const formContainer = document.querySelector('.form-container');

        listNotes.classList.add('active');
        listHome.classList.remove('active');
        addHomeContainer.style.display = 'none';
        addNotesContainer.style.display = 'flex';
        formContainer.style.display = 'none';
    });

    addHomeBtn.addEventListener('click', () => {
      const formContainer = document.querySelector('.form-container');

        if (addHomeBtn.classList.contains('active')) {
          addHomeBtn.classList.remove('active');
          formContainer.style.display = 'none';
        } else {
          addHomeBtn.classList.add('active');
          formContainer.style.display = 'flex';
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
    loadHomeForm();
};
showPage();