const todoArray = [];

function todoList() {
  const inputElement = document.querySelector('.js-input-value');

  const name = inputElement.value;

  todoArray.push(name);
  console.log(todoArray);

  inputElement.value = '';
}

const todoArray2 = [];

function updateTask() {
  const inputValue = document.querySelector('.js-input');
  
  const name2 = inputValue.value;
  
  todoArray2.push(name2);
  console.log(todoArray2);

  inputValue.value = '';

  let todoListHTML = '';

  for (let index = 0; index < todoArray2.length; index++) {
    const value = todoArray2[index];
    const html = `<p>${value}</p>`;

    todoListHTML += html;
  }

  document.querySelector('.task-div').innerHTML = todoListHTML;
}

const todoArray3 = [];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoArray3.length; i++) {
    const todoObject = todoArray3[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div class="generatedHTML">
      <div>${name}</div>
      <div>${dueDate}</div>
       
      <button onclick="
        todoArray3.splice(${i}, 1);
        renderTodoList();
      " class="deleteButton">Delete</button>
      </div>
    `
    todoListHTML += html;
  }

  document.querySelector('.displayTodo').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-todo-dueDate');
  const dueDate = dateInputElement.value;

  todoArray3.push({
    name: name,
    dueDate: dueDate
  });


  renderTodoList();
}