import loadPage from "./initial-load-page";


function displayHomeOrNotes() {
    const listHome = document.querySelector('.list-home');
    const listNotes = document.querySelector('.list-notes');
    const addBtn = document.querySelector('.add-btn');

    listHome.addEventListener('click', () => {
        listHome.classList.add('active');
        listNotes.classList.remove('active');
    });

    listNotes.addEventListener('click', () => {
        listNotes.classList.add('active');
        listHome.classList.remove('active');
    });
    addBtn.addEventListener('click', () => {
        if (addBtn.classList.contains('active')) {
          addBtn.classList.remove('active');
          formContainer.style.display = 'none';
        } else {
          addBtn.classList.add('active');
          formContainer.style.display = 'flex';
        }
    });
};


function showPage() {
    loadPage();
    displayHomeOrNotes();
};
showPage();