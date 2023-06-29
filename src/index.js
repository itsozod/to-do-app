import loadPage from "./initial-load-page";


function displayHomeOrNotes() {
    const listHome = document.querySelector('.list-home');
    const listNotes = document.querySelector('.list-notes');

    listHome.addEventListener('click', () => {
        listHome.classList.add('active');
        listNotes.classList.remove('active');
    });

    listNotes.addEventListener('click', () => {
        listNotes.classList.add('active');
        listHome.classList.remove('active');
    });
};


function showPage() {
    loadPage();
    displayHomeOrNotes();
};
showPage();