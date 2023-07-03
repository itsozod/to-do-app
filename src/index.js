import loadPage from "./initial-load-page";
import loadHomeForm  from './home-form';

function displayHomeOrNotes() {
  const listHome = document.querySelector(".list-home");
  const listNotes = document.querySelector(".list-notes");
  const addHomeContainer = document.querySelector(".add-homeContainer");
  const addNotesContainer = document.querySelector(".add-notesContainer");
  const addHomeBtn = document.querySelector(".add-home-btn");
  const addNotesBtn = document.querySelector(".add-notes-btn");

  listHome.addEventListener("click", () => {
    const formContainer1 = document.querySelector(".form-container1");

    listHome.classList.add("active");
    listNotes.classList.remove("active");
    addHomeContainer.style.display = "flex";
    addNotesContainer.style.display = "none";
    formContainer1.style.display = "none";
    if (addNotesBtn.classList.contains("active")) {
      addNotesBtn.classList.remove("active");
    }
  });

  listNotes.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");

    listNotes.classList.add("active");
    listHome.classList.remove("active");
    addHomeContainer.style.display = "none";
    addNotesContainer.style.display = "flex";
    formContainer.style.display = "none";

    if (addHomeBtn.classList.contains("active")) {
      addHomeBtn.classList.remove("active");
    }
  });

  addHomeBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");

    if (addHomeBtn.classList.contains("active")) {
      addHomeBtn.classList.remove("active");
      formContainer.style.display = "none";
    } else {
      addHomeBtn.classList.add("active");
      formContainer.style.display = "flex";
    }
  });

  addNotesBtn.addEventListener("click", () => {
    const formContainer1 = document.querySelector(".form-container1");
    if (addNotesBtn.classList.contains("active")) {
      addNotesBtn.classList.remove("active");
      formContainer1.style.display = "none";
    } else {
      addNotesBtn.classList.add("active");
      formContainer1.style.display = "flex";
    }
  });
}

function showPage() {
  loadPage();
  displayHomeOrNotes();
  loadHomeForm();
}
showPage();
