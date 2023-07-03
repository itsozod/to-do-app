let myTodos = [];

function ToDo(name, completed) {
  this.name = name;
  this.completed = completed || false;
}
function renderTodos() {

  const todosContainer = document.querySelector('.todos-container');
  todosContainer.innerHTML = "";

  myTodos.forEach(function (todo, index) {
    let todoEl = document.createElement("div");
    todoEl.classList.add("container");
    todoEl.innerHTML = `
    <img src="images/icon-green.png" alt="icon" class="green" data-index="${index}">
    <img src="images/icon-red.png" alt="icon" class="red" data-index="${index}">
    <h2 class="todo ${todo.completed ? "completed" : ""}">${todo.name}</h2>
    <div class="button-container">
      <img src="images/delete-button.png" alt="delete" class="delete-todo">
    </div>
  `;
    todosContainer.appendChild(todoEl);
    todosContainer.style.display = "flex";

    // delete todo button
    const deleteTodo = todoEl.querySelector('.delete-todo');

    deleteTodo.addEventListener('click', () =>{
      const index = myTodos.indexOf(todo);
      myTodos.splice(index, 1);

      if (myTodos.length === 0) {
        todosContainer.style.display = 'none';
      }
      renderTodos();
      setTimeout(() => {
        alert('Your todo is deleted!');
      }, 500);
      console.log('Your todo is deleted!');
    });

    // each todo, green and red icons
    const todoElement = todoEl.querySelector('.todo');
    const greenIcon = todoEl.querySelector(`.green[data-index="${index}"]`);
    const redIcon = todoEl.querySelector(`.red[data-index="${index}"]`);

    todoElement.addEventListener("click", function () {
      if (greenIcon && redIcon) {
        if (greenIcon.style.display !== "none") {
          greenIcon.style.display = "none";
          redIcon.style.display = "block";
          todo.completed = true;
        } else {
          greenIcon.style.display = "block";
          redIcon.style.display = "none";
          todo.completed = false;
        }
      } else {
        todo.completed = !todo.completed;
      }

      todoElement.classList.toggle("completed");
    });

    greenIcon.addEventListener("click", function () {
      todo.completed = !todo.completed;
      greenIcon.style.display = "none";
      redIcon.style.display = "block";
      todoElement.classList.toggle("completed");
    });

    redIcon.addEventListener("click", function () {
      todo.completed = !todo.completed;
      greenIcon.style.display = "block";
      redIcon.style.display = "none";
      todoElement.classList.toggle("completed");
    });

    greenIcon.style.display = todo.completed ? "none" : "block";
    redIcon.style.display = todo.completed ? "block" : "none";

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

  // export default addTodos;
  export { myTodos, addTodos };