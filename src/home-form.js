function createHomeForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.innerHTML = `
    <input type="text" id="name" name="name" placeholder="Your to do's name">
    <button type="submit" id="submit-btn">Submit</button>
    <div id="nameError" class="error"></div>
    `;
    return form;
}

// function createNotesForm() {
//     const formContainer1 = document.querySelector('.form-container1');
//     formContainer1.classList.add('form-container1');
//     formContainer1.innerHTML = `
//     <form action="" id="form1">
//     <input type="text" id="note" name="name" placeholder="Your notes's name">
//     <button type="submit" id="submit-btn1">Submit</button>
//     <div id="noteError" class="error"></div>
// </form>
//     `;
//     return formContainer1;
// }

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

// function preventDefaultNotes() {
//     const form1 = document.querySelector('#form1');
//     const nameNotesInput = document.querySelector('#note');
//     const nameNotesError = document.querySelector('#noteError');
//     form1.addEventListener('submit', function(event) {
//         event.preventDefault();

//         if (nameNotesInput.value === "") {
//             nameNotesError.textContent = " * Fill the input field";
//         } else {
//             nameNotesError.textContent = "";
//         }
//     });
// }
  
  function loadHomeForm() {
    const formHomeContainer = document.querySelector('.form-container');
    const form = createHomeForm();
    formHomeContainer.appendChild(form);
  
    preventDefaultHome();
    // preventDefaultNotes();
  }
  

export default loadHomeForm;

