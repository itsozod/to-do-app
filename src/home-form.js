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
function loadHomeForm() {
    const main = document.querySelector('#main');
    const formContainer = createHomeForm();
    main.appendChild(formContainer);
};
export default loadHomeForm;