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
    <img src="images/icon-green.png" alt="icon" class="green">
    <h2 class="todo">${todo.name}</h2>
    <div class="button-container">
      <img src="images/delete-button.png" alt="delete" class="delete-todo">
      <img src="images/edit-button.png" alt="edit" class="todo-btn">
    </div>
  `;
    todosContainer.appendChild(todoEl);
    todosContainer.style.display = "flex";
  });
}

  
  function addTodos() {
    let name = document.querySelector("#name").value;
  
    if (name) {
      let newTodo = new ToDo(name);
      myTodos.push(newTodo);
      renderTodos();
      setTimeout(() => {
        alert('Your todo is added!');
      }, 500);
      console.log("New Todo is added!");
    }
  }

  export default addTodos;