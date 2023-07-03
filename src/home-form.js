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
}

function createNotesForm() {
    const formContainer1 = document.createElement('div');
    formContainer1.classList.add('form-container1');
    formContainer1.innerHTML = `
    <form action="" id="form1">
    <input type="text" id="note" name="name" placeholder="Your notes's name">
    <button type="submit" id="submit-btn1">Submit</button>
    <div id="noteError" class="error"></div>
</form>
    `;
    return formContainer1;
}

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

let myTodos = [];

function ToDo(name) {
  this.name = name;
}
function renderTodos() {

  const todosContainer = document.querySelector('.todos-container');
  todosContainer.innerHTML = "";

  myTodos.forEach(todo => {
    let todoEl = document.createElement("div");
    todoEl.classList.add("container");
    todoEl.innerHTML = `
    <h2 class="todo">${todo.name}</h2>
  `;
    todosContainer.appendChild(todoEl);
  });
}

  
  function addTodos() {
    let name = document.querySelector("#name").value;
  
    if (name) {
      let newTodo = new ToDo(name);
      myTodos.push(newTodo);
      renderTodos();
      console.log("New Todo is added!");
    }
  }
  
  
  function loadHomeForm() {
    const main = document.querySelector('#main');
  
    const formContainer = createHomeForm();
    main.appendChild(formContainer);
  
    const formContainer1 = createNotesForm();
    main.appendChild(formContainer1);
  
    preventDefaultHome();
    preventDefaultNotes();
  
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener("click", addTodos);
  }
  

export default loadHomeForm;

