function createHomeForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.innerHTML = `
    <input type="text" id="name" name="name" placeholder="Your to do's name">
    <button type="submit" id="submit-btn">Submit</button>
    <div id="nameError" class="error"></div>
    `;
  return form;
}

function createNotesForm() {
  const form1 = document.createElement("form");
  form1.setAttribute("id", "form1");
  form1.innerHTML = `
    <textarea id="note" name="name" placeholder="Your notes's description"></textarea>
    <textarea id="noteName" name="name" placeholder="Your notes's name"></textarea>
    <button type="submit" id="submit-btn1">Submit</button>
    <div id="noteError" class="error"></div>
    `;
    return form1;
}

function preventDefaultHome() {
  const form = document.querySelector("#form");
  const nameHomeInput = document.querySelector("#name");
  const nameHomeError = document.querySelector("#nameError");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nameHomeInput.value === "") {
      nameHomeError.textContent = " * Fill the input field";
    } else {
      nameHomeError.textContent = "";
    }
  });
}

function preventDefaultNotes() {
    const form1 = document.querySelector('#form1');
    const nameNotesInput = document.querySelector('#note');
    const nameNotesInput1 = document.querySelector('#noteName');
    const nameNotesError = document.querySelector('#noteError');
    form1.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameNotesInput.value === "") {
            nameNotesError.textContent = " * Fill the textarea fields";
        } else {
            nameNotesError.textContent = "";
        }

        if (nameNotesInput1.value === "") {
            nameNotesError.textContent = " * Fill the textarea fields";
        } else {
            nameNotesError.textContent = "";
        }
    });
}

function loadHomeForm() {
  const formHomeContainer = document.querySelector(".form-container");
  const form = createHomeForm();
  formHomeContainer.appendChild(form);

  const formNotesContainer = document.querySelector('.form-container1');
  const form1 = createNotesForm();
  formNotesContainer.appendChild(form1);

  preventDefaultHome();
  preventDefaultNotes();
}

export default loadHomeForm;
