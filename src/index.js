import loadPage from "./initial-load-page";
import loadHomeForm  from './home-form';
import { myTodos, addTodos } from "./render";

function displayHomeOrNotes() {
  const listHome = document.querySelector('.list-home');
  const listNotes = document.querySelector('.list-notes');
  const addHomeContainer = document.querySelector('.add-homeContainer');
  const addHomeBtn = document.querySelector('.add-home-btn');
  const addNotesContainer = document.querySelector('.add-notesContainer');
  const addNotesBtn = document.querySelector('.add-notes-btn');
  const formHomeContainer = document.querySelector('.form-container');
  const todosContainer = document.querySelector('.todos-container');


  listHome.addEventListener('click', () => {
    listHome.classList.add('active');
    listNotes.classList.remove('active');
    addHomeContainer.style.display = 'flex';
    addNotesBtn.classList.remove('active');
    addNotesContainer.style.display = 'none';
    todosContainer.style.display = 'flex';

    if (myTodos.length === 0) {
      todosContainer.style.display = 'none';
    } else {
      todosContainer.style.display = 'flex';
    }
  });

  listNotes.addEventListener('click', () => {
    listHome.classList.remove('active');
    listNotes.classList.add('active');
    addHomeContainer.style.display = 'none';
    addHomeBtn.classList.remove('active');
    addNotesContainer.style.display = 'flex';
    formHomeContainer.style.display = 'none';
    todosContainer.style.display = 'none';

  });

  addHomeBtn.addEventListener('click', () => {
    if (addHomeBtn.classList.contains('active')) {
      addHomeBtn.classList.remove('active');
      formHomeContainer.style.display = 'none';
    } else {
      addHomeBtn.classList.add('active');
      formHomeContainer.style.display = 'flex';
    }
  });

  addNotesBtn.addEventListener('click', () => {
    if (addNotesBtn.classList.contains('active')) {
      addNotesBtn.classList.remove('active');
    } else {
      addNotesBtn.classList.add('active');
    }
  });
}

function showPage() {
  loadPage();
  displayHomeOrNotes();
  loadHomeForm();
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener("click", addTodos);
}
showPage();
