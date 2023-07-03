import loadPage from "./initial-load-page";
import loadHomeForm  from './home-form';
import addTodos from "./render";

function displayHomeOrNotes() {
  const listHome = document.querySelector('.list-home');
  const listNotes = document.querySelector('.list-notes');
  const addHomeContainer = document.querySelector('.add-homeContainer');
  const addHomeBtn = document.querySelector('.add-home-btn');
  const formHomeContainer = document.querySelector('.form-container');
  const todosContainer = document.querySelector('.todos-container');

  listHome.addEventListener('click', () => {
    listHome.classList.add('active');
    listNotes.classList.remove('active');
    addHomeContainer.style.display = 'flex';
    formHomeContainer.style.display = 'home';
    todosContainer.style.display = 'flex';
  });
  listNotes.addEventListener('click', () => {
    listHome.classList.remove('active');
    listNotes.classList.add('active');
    addHomeContainer.style.display = 'none';
    addHomeBtn.classList.remove('active');
    formHomeContainer.style.display = 'none';
    todosContainer.style.display = 'none';

  });

  addHomeBtn.addEventListener('click', () =>{
    if (addHomeBtn.classList.contains('active')) {
      addHomeBtn.classList.remove('active');
      formHomeContainer.style.display = 'none';
    } else {
      addHomeBtn.classList.add('active');
      formHomeContainer.style.display = 'flex';
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
