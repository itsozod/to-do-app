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
      setTimeout(() => {
        alert('Your todo is added!');
      }, 500);
      console.log("New Todo is added!");
    }
  }

  export default addTodos;