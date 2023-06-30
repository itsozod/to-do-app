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
    <form action="" id="form">
    <input type="text" id="name" name="name" placeholder="Your notes's name">
    <button type="submit" id="submit-btn">Submit</button>
    <div id="nameError" class="error"></div>
</form>
    `;
    return formContainer1;
};

function loadHomeForm() {
    const main = document.querySelector('#main');
    const formContainer = createHomeForm();
    main.appendChild(formContainer);

    const formContainer1 = createNotesForm();
    main.appendChild(formContainer1);
};
export default loadHomeForm;