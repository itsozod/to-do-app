function createHomeForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    formContainer.innerHTML = `
    <form action="" id="form">
    <input type="text" id="name" name="name" placeholder="Your to do's name">
    <button type="submit" id="submit-btn">Submit</button>
    <div id="nameError" class="error"></div>
</form>
    `;
    return formContainer;
};
function createNotesForm() {
    const formContainer1 = document.createElement('div');
    formContainer1.classList.add('form-container1');
    formContainer1.innerHTML = `
    <form action="" id="form1">
    <input type="text" id="note" name="name" placeholder="Your notes's name">
    <button type="submit" id="submit-btn">Submit</button>
    <div id="noteError" class="error"></div>
</form>
    `;
    return formContainer1;
};

function preventDefaultHome() {
    const form = document.querySelector('#form');
    const nameHomeInput = document.querySelector('#name');
    const nameHomeError = document.querySelector('#nameError');
    form.addEventListener('submit', function(event) {
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
    const nameNotesError = document.querySelector('#noteError');
    form1.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameNotesInput.value === "") {
            nameNotesError.textContent = " * Fill the input field";
        } else {
            nameNotesError.textContent = "";
        }
    });
}

function loadHomeForm() {
    const main = document.querySelector('#main');
    const formContainer = createHomeForm();
    main.appendChild(formContainer);

    const formContainer1 = createNotesForm();
    main.appendChild(formContainer1);

    preventDefaultHome();
    preventDefaultNotes();
};
export default loadHomeForm;
// export {preventDefaultHome};
// export {preventDefaultNotes};